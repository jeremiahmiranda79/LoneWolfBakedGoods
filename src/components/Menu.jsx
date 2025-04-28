import React from 'react';
import Cookies from '../components/categories/Cookies';
import Bars from '../components/categories/Bars';
import SpecialtyCookies from '../components/categories/SpecialtyCookies';
import SpecialtyItems from '../components/categories/SpecialtyItems';
import CategoryBar from './layout/CategoryBar';
import '../css/menu.css';

const Menu = () => {
  return (
    <>
      <CategoryBar/>
      <div className='MenuPage'>
        <Cookies/>
        <Bars/>
        <SpecialtyCookies/>
        <SpecialtyItems/>
      </div>
    </>
  );
}

export default Menu;