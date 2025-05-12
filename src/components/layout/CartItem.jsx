import React, {useState, useEffect} from 'react'; 
import {COOKIES} from '../../constants/cookies';
import {useDispatch } from 'react-redux';
import {changeQuantity} from '../../stores/cart';
import Button from 'react-bootstrap/Button';
const CartItem = (props) => {
  const {productId, quantity} = props.data;
  const [detail, setDetail] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const findDetail = COOKIES.filter(product => product.id === productId)[0];
    setDetail(findDetail);
  }, [productId]);
  const handleMinusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity - 1,
      subTotal: -detail.price,
    }));
  };
  const handlePlusQuantity = () => {
    dispatch(changeQuantity({
      productId: productId,
      quantity: quantity + 1,
      subTotal: detail.price,
    }));  
  };
  const fixedPrice = detail.price * quantity;
  return (
    <div>
      <img src={detail.images} alt={detail.name} style={{height: '100px', width: '175px'}}/>
      <h3>{detail.name}</h3>
      <h4>${fixedPrice.toFixed(2)}</h4>
      <div style={{marginBottom: "10px"}}>
        <Button style={{marginRight: '10px', marginLeft: '10px'}} onClick={handleMinusQuantity}>-</Button>
        <span>{quantity}</span>
        <Button style={{marginRight: '10px', marginLeft: '10px'}} onClick={handlePlusQuantity}>+</Button>
        <hr />
      </div>
    </div>
  );
};
export default CartItem;