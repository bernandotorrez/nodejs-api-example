const express = require('express');
require('express-async-errors');
const router = express.Router();
const {
  TblUser,
  generateAuthKey,
  validateLogin,
  validateRegister
} = require('../models/tbl_user_new');
const cors = require('cors');

// panggil fungsi global function
const globalFunction = require('../config/function');

var corsOption = {
  exposedHeaders: ['X-Auth-Token']
};

router.get('/get', async (req, res) => {
  const {
    id
  } = req.query;
  const data = await TblUser.findOne({
    where: {
      id: id,
      status: ['1', '2']
    },
    attributes: {
      exclude: ['password']
    }
  });

  if (data) {
    res.status(200).send({
      httpStatus: 200,
      message: 'success',
      data: data
    });
  } else {
    res.status(404).send({
      httpStatus: 404,
      message: 'no data',
      data: null
    });
  }
});

router.post('/doLogin', cors(corsOption), async (req, res) => {
  const {
    email,
    password
  } = req.body;

  // Input Validation
  const validation = validateLogin(req.body);

  if (validation.error) {
    res.status(400).send({
      httpStatus: 400,
      message: 'error_validation',
      data: validation.error.details[0].message
    });
    return false;
  }
  // Input Validation

  const data = await TblUser.findOne({
    where: {
      email: email,
      password: password
    }
  });

  if (data) {
    // Generate JWT Token
    const token = generateAuthKey(data);
    // Generate JWT Token

    res.header('X-Auth-Token', token);
    res.status(200).send({
      httpStatus: 200,
      message: 'success',
      data: data
    });
  } else {
    res.status(200).send({
      httpStatus: 200,
      message: 'username or password is wrong',
      data: null
    });
  }
});

router.post('/register', async (req, res) => {
  const {
    email,
    password,
    gender,
    phone,
    date_birth,
    name,
    address
  } = req.body;

  // Input Validation
  const validation = validateRegister(req.body);

  if (validation.error) {
    res.status(400).send({
      httpStatus: 400,
      message: 'error_validation',
      data: validation.error.details[0].message
    });
    return false;
  }
  // Input Validation

  const checkValidate = await TblUser.findAll({
    where: {
      email: email
    }
  });

  if (checkValidate.length > 0) {
    res.status(200).send({
      httpStatus: 200,
      message: 'registered',
      data: 'registered'
    });
  } else {
    const data = await TblUser.create({
      email: email,
      password: password,
      gender: gender,
      phone: phone,
      date_birth: globalFunction.check_date(date_birth),
      name: name,
      address: address,
      api_token: password
    });

    if (data) {
      res.status(200).send({
        httpStatus: 200,
        message: 'success',
        data: 'success'
      });
    } else {
      res.status(200).send({
        httpStatus: 404,
        message: 'username or password is wrong',
        data: null
      });
    }
  }
});

router.put('/doLogout', async (req, res) => {
  const {
    id,
    login_terakhir,
    waktu
  } = req.body;

  const update = await TblUser.update({
    waktu: waktu,
    login_terakhir: login_terakhir
  }, {
    where: {
      id: id
    },
    returning: true,
    plain: true
  });

  if (update) {
    res.status(200).send({
      httpStatus: 200,
      message: 'success',
      data: update
    });
  } else {
    res.status(400).send({
      httpStatus: 400,
      message: 'fail',
      data: null
    });
  }
});

router.put('/updateSuccessLogin', async (req, res) => {
  const {
    username,
    waktu,
    ip
  } = req.body;

  const update = await TblUser.update({
    waktu: waktu,
    ip: ip
  }, {
    where: {
      username: username
    },
    returning: true,
    plain: true
  });

  if (update) {
    res.status(200).send({
      httpStatus: 200,
      message: 'success',
      data: update
    });
  } else {
    res.status(400).send({
      httpStatus: 400,
      message: 'fail',
      data: null
    });
  }
});

module.exports = router;
