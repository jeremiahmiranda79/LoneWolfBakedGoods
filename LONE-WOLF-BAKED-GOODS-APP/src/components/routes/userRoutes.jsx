import React from 'react';
import {Route} from 'react-router-dom';
import Home from '../Home';
import Menu from '../Menu';

const userRoutes = () => {
  return (
    <>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
    </>
  );
};

export default userRoutes;