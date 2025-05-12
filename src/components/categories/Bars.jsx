import React from 'react';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import {PRODUCT_CATEGORIES} from '../../constants/categories';
import {BARS} from '../../constants/bars';
import ProductCart from '../layout/ProductCart';
const Bars = () => {
  return (
    <Container id={PRODUCT_CATEGORIES[1].id} className='anchor'>
      <h1 className='Title' style={{marginTop: '10px', marginBottom: '10px'}}>{PRODUCT_CATEGORIES[1].name}</h1>
      <Row xs={1} md={2} lg={3} className="g-4 d-flex justify-content-center">
        {BARS.map((product, key) => (
          <ProductCart key={key} data={product}/>
        ))}
      </Row>
    </Container>
  );
};
export default Bars;