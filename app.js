const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const createError = require('http-errors');
const helmet = require('helmet');
const winston = require('winston');
const globalFunction = require('./config/function');
const bearerToken = require('express-bearer-token');
const appRoot = require('app-root-path');
const cors = require('cors');
const compression = require('compression');
const jwt = require('jsonwebtoken');

// setiap membuat file router baru, silahkan panggil disini
const carRouter = require('./routes/car');
const loginRouter = require('./routes/login');

const app = express();

app.use(compression());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(bearerToken());
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

// wajib saat naik ke production
if (process.env.NODE_ENV.trim() === 'production') {
  app.use(helmet());
}

if (!process.env.JWT_PRIVATE_KEY) {
  console.error('FATAL ERROR : jwtPrivateKey not set');
  process.exit(1);
}

// setiap ada penambahan Router, inisialisasi index nya disini
app.use('/car', carRouter);
app.use('/login', loginRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
process.on('uncaughtException', (ex) => {
  const logDate = globalFunction.timeDate();
  const fileName = `uncaughtException ${logDate}.log`;
  const logLocation = `${appRoot}/logs/${fileName}`;

  const logFile = winston.createLogger({

    transports: [

      new winston.transports.File({ filename: logLocation, level: 'error', colorize: true, prettyPrint: true })
    ]
  });

  logFile.log({
    level: 'error',
    message: `uncaughtException : ${ex.message}`,
    timestamp: globalFunction.logTime()
  });

  process.exit(1);
});

process.on('unhandledRejection', (ex) => {
  const logDate = globalFunction.timeDate();
  const fileName = `uncaughtException ${logDate}.log`;
  const logLocation = `${appRoot}/logs/${fileName}`;

  const logFile = winston.createLogger({

    transports: [

      new winston.transports.File({ filename: logLocation, level: 'error', colorize: true, prettyPrint: true })
    ]
  });

  logFile.log({
    level: 'error',
    message: `unhandledRejection : ${ex}`,
    timestamp: globalFunction.logTime()
  });

  process.exit(1);
});

app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env').trim() === 'development' ? err : {};

  const logDate = globalFunction.timeDate();
  const fileName = `uncaughtException ${logDate}.log`;
  const logLocation = `${appRoot}/logs/${fileName}`;

  const logFile = winston.createLogger({

    transports: [

      new winston.transports.File({ filename: logLocation, level: 'error', colorize: true, prettyPrint: true })
    ]
  });

  let decoded;
  if (typeof req.header('X-Auth-Token') !== 'undefined') {
    decoded = jwt.verify(req.header('X-Auth-Token'), process.env.JWT_PRIVATE_KEY);

    logFile.log({
      level: 'error',
      message: `${err}`,
      httpStatus: `${err.status || 500}`,
      ip: `${req.ip}`,
      url: `${req.originalUrl}`,
      method: `${req.method}`,
      email: `${decoded._email}`,
      timestamp: globalFunction.logTime()
    });
    // render the error page
    res.status(err.status || 500).send({ httpStatus: err.status || 500, message: err.message, data: null });
  } else {
    logFile.log({
      level: 'error',
      message: `${err}`,
      httpStatus: `${err.status || 500}`,
      ip: `${req.ip}`,
      url: `${req.originalUrl}`,
      method: `${req.method}`,
      email: 'null',
      timestamp: globalFunction.logTime()
    });
    res.status(err.status || 500).send({ httpStatus: err.status || 500, message: err.message, data: null });
  }
});

module.exports = app;
