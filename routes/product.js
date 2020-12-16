const express = require('express');
const router = express.Router();

const {
  list,
  read,
  photo,
  create,
  remove,
  update,
  productById,
  listRelated,
  listCategories,
  listBySearch,
  listSearch,
} = require('../controllers/product');
const { requiredSignin, isAdmin, isAuth } = require('../controllers/auth');
const { userById } = require('../controllers/user');

router.get('/product/:productId', read);
router.post('/product/create/:userId', requiredSignin, isAuth, isAdmin, create);
router.delete('/product/:productId', requiredSignin, isAdmin, isAuth, remove);
router.put(
  '/product/:productId/:userId',
  requiredSignin,
  isAdmin,
  isAuth,
  update,
);

router.get('/products', list);
router.get('/products/search', listSearch);
router.get('/products/related/:productId', listRelated);
router.get('/products/categories', listCategories);
router.post('/products/by/search', listBySearch);
router.get('/product/photo/:productId', photo);

router.param('userId', userById);
router.param('productId', productById);

module.exports = router;
