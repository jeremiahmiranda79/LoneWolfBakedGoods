import React from 'react';
import {Link} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {addToCart} from '../../stores/cart';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
const ProductCart = (props) => {
  const carts = useSelector(store => store.cart.items);
  const {id, name, price, images, description, slug} = props.data;
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(addToCart({
      productId: id,
      quantity: 1,
      subTotal: price,
    }));
  };
  return (
    <div>
      <Col key={id}>
        <Card className='h-100'>
          <Link to={slug}>
            <Card.Img variant="top" src={images} alt={name}/>
          </Link>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Title>${price.toFixed(2)}</Card.Title>
            <Card.Text style={{marginBottom: '5px'}}>{description}</Card.Text>
            <Button onClick={handleAddToCart}>
              <img src='/images/icons-logos/iconCart.png' alt="add to cart" style={{height:25, width:25}}/> Add To Cart
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};
export default ProductCart;