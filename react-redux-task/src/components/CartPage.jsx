import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { resetCartList, removeItem } from '../redux/cartListSlice';
import { resetCart } from '../redux/cartSlice';
import { resetData } from '../redux/dataSlice';
import { Grid, Typography, Button, Snackbar, Alert, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';


function CartPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart);
  const cartList = useSelector((state) => state.cartList);
  const mainData = useSelector((state) => state.data);

  const [totalCartAmount, setTotalCartAmount] = useState(0);
  const [open, setOpen] = useState(false);

  const handleCheckOut = () => {
    setOpen(true);
    dispatch(resetCartList());
    dispatch(resetCart());
    dispatch(resetData());
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
    navigate('/');
  };

  const handlePrice = () => {
    let ans = 0;
    cartList.forEach((ele) => {
      const total = ele.price * ele.defaultValue;
      const discountAmount = parseFloat(((total * ele.discountPercentage) / 100).toFixed(2));
      const NetAmount = total - discountAmount;
      ans += NetAmount;
    });
    setTotalCartAmount(parseFloat(ans.toFixed(2)));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeItem(id));
    handlePrice();
  };

  const handleAddItem = (id,defaultValue) =>{
    console.log(id,defaultValue)
       cartList.map((ele)=>{
        if(ele.id == id && defaultValue < ele.stock){
            ele.defaultValue++
        }
       })
       setCartList(cartList)
       handlePrice()
}

const handleDecreaseItem = (id, defaultValue) => {
  cartList.map((ele) => {
    if (ele.id == id && defaultValue > 1) {
      ele.defaultValue--;
    }
  });
  setCartList(cartList);
  handlePrice();
  return cartList; // Add this line to correctly update the cartList
};

  useEffect(() => {
    handlePrice();
  }, [cartList]);

  return (
    <>
      {cartItems > 0 ? (
        <div>
          {cartList.map((ele) => {
            const total = ele.price * ele.defaultValue;
            const discountAmount = parseFloat(((total * ele.discountPercentage) / 100).toFixed(2));
            const NetAmount = total - discountAmount;
            return (
              <div key={ele.id}>
                <Grid container spacing={2} style={{ borderBottom: '2px solid black', marginBottom: '15px', paddingBottom: '15px' }}>
                  <Grid item xs={12} md={2} style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={ele.thumbnail} alt={ele.title} height="150" />
                  </Grid>
                  <Grid item xs={12} md={4} style={{ display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', alignItems: 'center' }}>
                    <h3 style={{ marginBottom: '3px' }}>
                      <b>{ele.brand} - {ele.title}</b>
                    </h3>
                    <p style={{ margin: '5px', textAlign: 'justify' }}>{ele.description}</p>
                  </Grid>
                  <Grid item xs={12} md={6} style={{ alignContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', padding: '5px 10px' }}>
                      <div>
                        <IconButton aria-label="decrement" onClick={() => handleDecreaseItem(ele.id, ele.defaultValue)} color='error' disabled={ele.defaultValue === 1}>
                          <RemoveIcon />
                        </IconButton>
                        {ele.defaultValue}
                        <IconButton aria-label="increment" onClick={() => handleAddItem(ele.id, ele.defaultValue)} color='success' disabled={ele.defaultValue === ele.stock}>
                          <AddIcon />
                        </IconButton>
                      </div>
                      <div>{total}</div>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', padding: '5px 10px' }}>
                      <div>Discounted Amount {ele.discountPercentage}% -</div>
                      <div style={{ textDecoration: 'line-through' }}>{discountAmount}</div>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', padding: '5px 10px' }}>
                      <div>Net Amount -</div>
                      <div style={{ textDecoration: 'solid', fontWeight: 'bold' }}>{NetAmount}</div>
                    </Grid>
                    <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                      <Button variant="contained" color="error" onClick={() => handleRemoveItem(ele.id)} endIcon={<DeleteIcon />}>Remove</Button>
                    </Grid>
                  </Grid>
                </Grid>
              </div>
            );
          })}
          <Grid container spacing={2} style={{ borderBottom: '2px solid black', marginBottom: '15px', paddingBottom: '15px' }}>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <Typography variant='h4'>Cart Summary</Typography>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', padding: '0 25px' }}>
              <div>Total Cart Items</div>
              <div>{cartItems}</div>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', padding: '0 25px' }}>
              <div>Total Cart Amount</div>
              <div>{totalCartAmount}</div>
            </Grid>
            <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
              <Button variant='contained' color='success' size='large' onClick={handleCheckOut} endIcon={<ShoppingCartCheckoutIcon />}>Check Out</Button>
              <Snackbar open={open} autoHideDuration={5000} onClose={handleClose} anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>Order Successfully Placed!</Alert>
              </Snackbar>
            </Grid>
          </Grid>
        </div>
      ) : (
        <Typography variant='h5'>No Cart Items. Please add some items.</Typography>
      )}
    </>
  );
}

export default CartPage;
