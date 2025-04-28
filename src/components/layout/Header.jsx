import React from 'react';
import '../../css/header.css';

const Header = () => {
  return (
    <div>
      <nav id="navbar">
        <input type="checkbox" id="sidebar-active"/>
        <a className="home-link-1" href="/"><img src="/images/icons-logos/logo-hoz-1.png" alt="Lone Wolf Baked Goods logo"/></a>
        <label htmlFor="sidebar-active" className="open-sidebar-button">
          <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
        </label>
        <label id="overlay" htmlFor="sidebar-active"></label>
        <div className="links-container" id="top">
          <label htmlFor="sidebar-active" className="close-sidebar-button">
            <svg xmlns="http://www.w3.org/2000/svg" height="32" viewBox="0 -960 960 960" width="32"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
          </label>
          <a className="home-link" href="/"><img src="/images/icons-logos/logo-hoz-1.png" alt="Lone Wolf Baked Goods logo"/></a> 
          <a href="/">Home</a> 
          <a href="/menu">Menu</a> 
          <a href="/delivery">Delivery</a>
          <a href="/about">About</a>
        </div>
      </nav>
    </div>
  );
};

export default Header;