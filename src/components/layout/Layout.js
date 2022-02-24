import React from 'react';
import './Layout.css';


// components will all go inside the layout 
const Layout = ({ children }) => {
  return <div className='layout'>{children}</div>;
};

export default Layout;
