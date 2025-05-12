import React from 'react';
import Information from '../components/layout/Information';
import Carousel from 'react-bootstrap/Carousel';
import '../css/carousel.css';
import 'bootstrap/dist/css/bootstrap.css';
const Home = () => {
  return (
    <div style={{margin: '100px 10px 10px 10px', textAlign: 'center'}}>
      <h1 rel="preload" style={{textAlign: 'center'}}>Welcome to Lone Wolf Baked Goods</h1>
      <Information/>
      <h2>DESCRIBE THE CAROUSEL</h2>
      <center>
        <Carousel>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/icons-logos/logo.png"
                alt="store front"
              />
            </div> 
            <Carousel.Caption><h1 style={{color: 'black', fontWeight: 'bolder'}}>Buonos Pizza Gilbert</h1></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/icons-logos/logo.png"
                alt="store front"
              />
            </div> 
            <Carousel.Caption><h1 style={{color: 'black', fontWeight: 'bolder'}}>Daily Slice Specials</h1></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/icons-logos/logo.png"
                alt="house made dough balls"
              />
            </div>
            <Carousel.Caption><h1 style={{color: 'black', fontWeight: 'bolder'}}>Fresh dough made in house daily</h1></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/icons-logos/logo.png"
                alt="experienced chefs in action"
              />
            </div>
            <Carousel.Caption><h1 style={{color: 'black', fontWeight: 'bolder'}}>Experienced Chefs</h1></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/icons-logos/logo.png"
                alt="New York style"
              />
            </div>
            <Carousel.Caption><h1 style={{color: 'black', fontWeight: 'bolder'}}>New York Style</h1></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div className='wrapper'>
              <img
                rel="preload"
                loading="lazy"
                className="d-block w-100"
                src="/images/icons-logos/logo.png"
                alt="vintage 1989"
              />
            </div>
            <Carousel.Caption><h1 style={{color: 'black', fontWeight: 'bolder'}}>Quality Since 1989</h1></Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </center>
      <h2 style={{textAlign: 'center'}}>Our Promise</h2> 
      <p className='x' style={{textAlign: 'center'}}>Classic baked goods made with the imagination of family traditions!</p>
      <p style={{textAlign: 'center'}}><a href="/menu" className="active btn btn-primary">View our full menu here!</a></p> 
      <h2 style={{textAlign: 'center', marginTop: '10px'}}>Lone Wolf Baked Goods Specialties</h2>
      <p className='x' style={{textAlign: 'center'}}>We refuse to compromise. We use the freshest and finest ingredients. Our baked goods are made fresh for every order!</p> 
      <p style={{textAlign: 'center'}}><a href="/specials" className="active btn btn-primary" >View our specialty options here!</a></p>  
    </div>
  );
};
export default Home;