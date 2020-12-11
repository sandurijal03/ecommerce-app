const express = require('express');
const router = express.Router();

const { requiredSignin, isAuth, isAdmin } = require('../controllers/auth');

const { userById, read, update } = require('../controllers/user');

// const { userSignupValidator } = require('../validator');

router.get('/secret/:userId', requiredSignin, isAuth, isAdmin, (req, res) => {
  res.json({
    user: req.profile,
  });
});

router.get('/user/:userId', requiredSignin, isAuth, read);
router.get('/user/:userId', requiredSignin, isAuth, update);

router.param('userId', userById);

module.exports = router;
