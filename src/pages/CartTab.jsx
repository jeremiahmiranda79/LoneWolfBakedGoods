import React from 'react';
import {useSelector} from 'react-redux' 
import CartItem from '../components/layout/CartItem';
import {Button} from 'react-bootstrap';
const CartTab = () => {
  const carts = useSelector(store => store.cart.items);
  const subTotal = useSelector(store => store.cart.subTotal);
  let taxAZ = 0.056;
  let shippingStandard = 5.5;
  let tax = 0;
  let processingFee = 1.25;
  let total = 0;
  const calculateTax = (_subTotal, _taxAZ) => {
    tax = _subTotal * _taxAZ;
    return tax;
  }
  calculateTax(subTotal, taxAZ);
  const calculateTotal = (_total, _tax, _shipping, _processingFee) => {
    total = _total + _tax + _shipping + _processingFee;
    return total;
  }
  calculateTotal(subTotal, tax, shippingStandard, processingFee);
  return (
    <div>
      <h1 style={{margin: '100px 10px 10px 10px', textAlign: 'center'}}>Shopping Cart</h1>
      <div style={{margin: '10px 10px 10px 10px', textAlign: 'center'}}>
        {carts.map((item, key) => 
          <CartItem key={key} data={item}/>
        )}
      </div>
      <div style={{margin: '10px 10px 10px 10px', textAlign: 'center'}}>
        <h4>Sub Total: ${subTotal.toFixed(2)}</h4>
        <h4>Shipping: ${shippingStandard.toFixed(2)}</h4>
        <h4>Tax: ${tax.toFixed(2)}</h4>
        <h4>Processing Fee: ${processingFee.toFixed(2)}</h4>
        <hr />
        <h4>Total: ${total.toFixed(2)}</h4>
        <Button style={{margin: '10px 10px 10px 10px', textAlign: 'center'}}>CLOSE </Button>
        <Button> CHECKOUT</Button>
      </div>
    </div>
  )
}
export default CartTab;