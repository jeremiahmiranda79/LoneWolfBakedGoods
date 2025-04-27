import React from 'react';
import '../css/menu.css';
import CategoryBar from './layout/CategoryBar';
import Cookies from '../components/categories/Cookies';
import Bars from '../components/categories/Bars';
import SpecialtyCookies from '../components/categories/SpecialtyCookies';
import SpecialtyItems from '../components/categories/SpecialtyItems';

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