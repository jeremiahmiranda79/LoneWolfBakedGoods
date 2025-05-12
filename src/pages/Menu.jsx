import React from 'react';
import CategoryBar from '../components/layout/CategoryBar';
import Cookies from '../components/categories/Cookies';
// import Bars from '../components/categories/Bars';
// import SpecialtyCookies from '../components/categories/SpecialtyCookies';
// import SpecialtyItems from '../components/categories/SpecialtyItems';

import '../css/menu.css';
const Menu = () => {
  return (
    <>
      <CategoryBar/>
      <div className='MenuPage'>
        <Cookies/>
        {/* <Bars/> */}
        {/* <SpecialtyCookies/> */}
        {/* <SpecialtyItems/> */}
      </div>
    </>
  );
}
export default Menu;