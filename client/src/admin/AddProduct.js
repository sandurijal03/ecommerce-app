import React, { useEffect, useState } from 'react';
import Layout from '../core/Layout';
import { isAuthenticated } from '../auth';
import { createProduct, getCategories } from './apiAdmin';

const AddProduct = () => {
  const { user, token } = isAuthenticated();
  const [values, setValues] = useState({
    name: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    shipping: '',
    quantity: '',
    photo: '',
    loading: false,
    error: '',
    createdProduct: '',
    redirectToProfile: false,
    formData: '',
  });

  const {
    name,
    description,
    price,
    categories,
    category,
    shipping,
    quantity,
    loading,
    error,
    createdProduct,
    redirectToProfile,
    formData,
  } = values;

  // load categories and set form data
  const init = () => {
    getCategories().then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({ ...values, categories: data, formData: new FormData() });
      }
    });
  };

  useEffect(() => {
    init();
  }, []);

  const handleChange = (name) => (e) => {
    const value = name === 'photo' ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value });
  };

  const clickSubmit = (e) => {
    e.preventDefault();
    setValues({ ...values, error: '', loading: true });
    createProduct(user._id, token, formData).then((data) => {
      if (data.error) {
        setValues({ ...values, error: data.error });
      } else {
        setValues({
          ...values,
          name: '',
          description: '',
          photo: '',
          price: '',
          quantity: '',
          loading: false,
          createdProduct: data.name,
        });
      }
    });
  };

  const newPostForm = () => {
    return (
      <form className='mb-3' onSubmit={clickSubmit}>
        <h4>Post Photo</h4>
        <div className='form-group'>
          <label className='btn btn-secondary'>
            <input
              onChange={handleChange('photo')}
              type='file'
              name='photo'
              accept='image/*'
            />
          </label>
        </div>

        <div className='form-group'>
          <label className='text-muted'>Name</label>
          <input
            type='text'
            className='form-control'
            value={name}
            onChange={handleChange('name')}
          />
        </div>

        <div className='form-group'>
          <label className='text-muted'>Description</label>
          <textarea
            type='text'
            className='form-control'
            value={description}
            onChange={handleChange('description')}
          />
        </div>

        <div className='form-group'>
          <label className='text-muted'>Price</label>
          <input
            type='number'
            className='form-control'
            value={price}
            onChange={handleChange('price')}
          />
        </div>

        <div className='form-group'>
          <label className='text-muted'>Category</label>
          <select className='form-control' onChange={handleChange('category')}>
            <option>Please Select</option>
            {categories &&
              categories.map((c, i) => (
                <option key={i} value={c._id}>
                  {c.name}
                </option>
              ))}
          </select>
        </div>

        <div className='form-group'>
          <label className='text-muted'>Shipping</label>
          <select className='form-control' onChange={handleChange('shipping')}>
            <option>Please Select</option>
            <option value='0'>no</option>
            <option value='1'>yes</option>
          </select>
        </div>

        <div className='form-group'>
          <label className='text-muted'>quantity</label>
          <input
            type='number'
            className='form-control'
            value={quantity}
            onChange={handleChange('quantity')}
          />
        </div>

        <button className='btn btn-outline-primary'>Create Product</button>
      </form>
    );
  };

  const showError = () => (
    <div
      className='alert alert-danger'
      style={{ display: error ? '' : 'none' }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className='alert alert-info'
      style={{ display: createdProduct ? '' : 'none' }}
    >
      <h2>{`${createdProduct}`} is created</h2>
    </div>
  );

  const showLoading = () =>
    loading && (
      <div className='alert alert-succss'>
        <h2>loading....</h2>
      </div>
    );

  return (
    <div>
      <Layout
        title='Add a new Product'
        description={`G'day ${user.name}, ready to add a new product?`}
      />

      <div className='row'>
        <div className='col-md-8 offset-md-2'>
          {showLoading()}
          {showSuccess()}
          {showError()}
          {newPostForm()}
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
