const express = require('express');
const router = express.Router();

const {
  create,
  categoryById,
  read,
  update,
  remove,
  list,
} = require('../controllers/category');
const { requiredSignin, isAdmin, isAuth } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/category/:categoryId', read);
router.post(
  '/category/create/:userId',
  requiredSignin,
  isAuth,
  isAdmin,
  create,
);
router.put(
  '/category/:categoryId/:userId',
  requiredSignin,
  isAdmin,
  isAuth,
  update,
);
router.delete(
  '/category/:categoryId/:userId',
  requiredSignin,
  isAdmin,
  isAuth,
  remove,
);
router.get('/categories', list);

router.param('categoryId', categoryById);
router.param('userId', userById);

module.exports = router;
