import React from 'react';
import {PRODUCT_CATEGORIES} from '../constants/categories';
import '../../css/category_bar.css';

const CategoryBar = () => {
  return (
    <div className="main-container">
      <div className="tab-nav-bar">
        <div className="tab-navigation">
          <ul className="tab-menu">
            <li className="tab-btn"><a href={"#" + 0} className="active">All</a></li>
            {PRODUCT_CATEGORIES.map((category) => (<li key={category.id} className="tab-btn"><a href= {'#' + category.id}>{category.name}</a></li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CategoryBar;