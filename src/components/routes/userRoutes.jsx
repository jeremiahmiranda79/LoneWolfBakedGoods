import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../../pages/Home';
import Menu from '../../pages/Menu';
import Details from '../../pages/Details';
// import CartItem from '../../pages/CartItem';
import CartTab from '../../pages/CartTab';
const userRoutes = () => {
  return (
    <>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/menu/:slug' element={<Details/>}/>
      <Route path='/cartTab' element={<CartTab/>}/>
    </>
  );
};
export default userRoutes;