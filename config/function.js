var moment = require('moment');

const time = () => {
  var date = new Date();
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  var day = date.getDate();
  var month = monthNames[date.getMonth()];
  var year = date.getFullYear();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var loginTime = `${day} ${month} ${year} ${hour}:${minute}:${second}`;

  return loginTime;
};

const timeDate = () => {
  var date = new Date();
  const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  var day = date.getDate();
  var month = monthNames[date.getMonth()];
  var year = date.getFullYear();

  var dateNew = `${day}-${month}-${year}`;

  return dateNew;
};

const checkNull = (value) => {
  if (!value || value === '' || value == null) {
    return '-';
  } else {
    return value;
  }
};

const checkNullStart = (value) => {
  if (!value || value === '' || value == null || value === 0) {
    return '-';
  } else {
    return value;
  }
};

const cekLevel = (level) => {
  if (level === 'Headquarter') return 'headquarter';
  else if (level === 'Cabang') return 'branch';
  else return 'admin';
};

const timeHis = () => {
  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var timeHis = `${year}-${month}-${day} ${hour}:${minute}:${second}`;

  return timeHis;
};

const logTime = () => {
  var date = new Date();

  var day = date.getDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var logTime = `${day}-${month}-${year} ${hour}:${minute}:${second}`;

  return logTime;
};

const capitalEachWord = (letter) => {
  const callback = letter.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

  return callback;
};

const checkDate = (value) => {
  var newDate;
  if (moment(value, 'DD-MM-YYYY', true).isValid() || moment(value, 'D-MM-YYYY', true).isValid()) {
    newDate = value.split('-').reverse().join('-');
  } else if (moment(value, 'DD/MM/YYYY', true).isValid() || moment(value, 'D/MM/YYYY', true).isValid()) {
    newDate = value.split('/').reverse().join('-');
  } else {
    newDate = value;
  }

  return newDate;
};

module.exports = {
  time: time,
  timeHis: timeHis,
  cekLevel: cekLevel,
  capitalEachWord: capitalEachWord,
  logTime: logTime,
  checkNull: checkNull,
  checkNullStart: checkNullStart,
  checkDate: checkDate,
  timeDate: timeDate
};
