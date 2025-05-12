import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import {COOKIES} from '../constants/cookies'
// import { BARS } from '../constants/bars';

import {useDispatch} from 'react-redux';
import {addToCart} from '../stores/cart';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Detail = () => {
  const {slug} = useParams();
  const [detail, setDetail] = useState([]);
  const [quantity, setQuantity] = useState([1]);

  const dispatch = useDispatch();

  useEffect(() => {
    const findDetail = COOKIES.filter(product => product.slug === slug);
    if (findDetail.length > 0) {
      setDetail(findDetail[0]);
    }
    else {
      window.location.href = '/';
    }
  }, [slug])

  const handleMinusQuantity = () => {
    setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
  }

  const handlePlusQuantity = () => {
    const number = Number(quantity);
    setQuantity(number + 1);
  }

  const handleAddToCart = () => {
    console.log('hit add cart!!!!')

    dispatch(addToCart({
      productId: detail.id,
      quantity: quantity
    }));

    console.log('quantity: ' + quantity)
  }

  return (
    <div style={{margin: '100px 10px 10px 10px', textAlign: 'center'}}>
      <br />
      <h2>PRODUCT DETAIL</h2>
      <br />
      <Row xs={1} md={1} lg={1} className="g-4 d-flex justify-content-center">
        <Col>
          <Card className='h-100'>
            <Card.Img variant="top" src={"/" + detail.images} style={{marginLeft: "25%", marginRight: "25%", width: "50%", paddingTop: "20px"}} alt={detail.name}/>
            <Card.Body>
              <Card.Title>${detail.price}</Card.Title>
              <Button variant="primary" size="lg" onClick={handleMinusQuantity}> - </Button>
              <span style={{marginRight: '10px', marginLeft: '10px'}}>{quantity}</span>
              <Button variant="primary" size="lg" onClick={handlePlusQuantity}> + </Button>
              <br /><br />
              <Button variant="primary" size="lg" onClick={handleAddToCart}>Add To Cart</Button>
              <br /><br />
              <Card.Text style={{marginBottom: '5px'}}>{detail.description}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <br />
    </div>
  );
};
export default Detail;