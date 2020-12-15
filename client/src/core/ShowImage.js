import React from 'react';

const ShowImage = ({ item, url }) => {
  return (
    <div className='product-img'>
      <img
        className='mb-3'
        src={`http://localhost:4000/api/${url}/photo/${item._id}`}
        alt={item.name}
        style={{ maxHeight: '100%', maxWidth: '100%' }}
      />
    </div>
  );
};

export default ShowImage;
