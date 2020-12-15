import React from 'react';
import '../style.css';

const Layout = ({
  title = 'Title',
  description = 'Description',
  classname,
  children,
}) => {
  return (
    <>
      <div className='jumbotron'>
        <h2>{title}</h2>
        <p className='lead'>{description}</p>
      </div>
      <div className={classname}>{children}</div>
    </>
  );
};

export default Layout;
