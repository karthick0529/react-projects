// CartPage.js
import React, { useContext, useState, useEffect } from 'react';
import { CartContext, CartListContext, DataContext } from '../App'; // Ensure correct path
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';

function CartPage() {
    const navigate = useNavigate();
    const [totalCartAmount, setTotalCartAmount] = useState(0);
    const cart_page_list = useContext(CartListContext);
    const [cartList, setCartList] = cart_page_list;
    const cart = useContext(CartContext);
    const [cartItems, setCartItems] = cart;
    const initialData = useContext(DataContext);
    const [mainData, setMainData] = initialData;
    const [open, setOpen] = useState(false);

    const handleCheckOut = () => {
        setOpen(true);
        setCartList([]);
        setCartItems(0);
        mainData.forEach((ele) => {
            ele.inCart = false;
        });
        setMainData([...mainData]);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
        navigate('/');
    };

    const grid_style = {
        display: 'flex',
        justifyContent: 'space-around',
        textAlign: 'center'
    };

    const handlePrice = () => {
        let ans = 0;
        cartList.forEach((ele) => {
            const total = ele.price * ele.defaultValue;
            const discountAmount = parseFloat(((total * ele.discountPercentage) / 100).toFixed(2));
            const netAmount = total - discountAmount;
            ans += netAmount;
        });
        setTotalCartAmount(parseInt(ans.toFixed(2)));
    };

    const handleOnclickRemove = (id) => {
        setCartItems(cartItems - 1);
        setMainData(
            mainData.map((ele) => {
                if (ele.id === id) {
                    return { ...ele, inCart: false };
                } else {
                    return ele;
                }
            })
        );
        const afterDelete = cartList.filter((ele) => ele.id !== id);
        setCartList(afterDelete);
    };

    const handleAddItem = (id, defaultValue) => {
        const updatedCartList = cartList.map((ele) => {
            if (ele.id === id && defaultValue < ele.stock) {
                ele.defaultValue++;
            }
            return ele;
        });
        setCartList([...updatedCartList]);
        handlePrice();
    };

    const handleRemoveItem = (id, defaultValue) => {
        const updatedCartList = cartList.map((ele) => {
            if (ele.id === id && defaultValue > 1) {
                ele.defaultValue--;
            }
            return ele;
        });
        setCartList([...updatedCartList]);
        handlePrice();
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
                        const netAmount = total - discountAmount;
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
                                        <Button size="small" onClick={() => navigate(`/mobiledetails/${ele.id}`)}>Description</Button>
                                        <p style={{ margin: '5px', textAlign: 'justify' }}>{ele.description}</p>
                                    </Grid>
                                    <Grid item xs={12} md={6} style={{ alignContent: 'center', alignItems: 'center' }}>
                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', padding: '5px 10px' }}>
                                            <div>
                                                <IconButton aria-label="decrement" onClick={() => handleRemoveItem(ele.id, ele.defaultValue)} color="error" disabled={ele.defaultValue === 1}>
                                                    <RemoveIcon />
                                                </IconButton>
                                                {ele.defaultValue}
                                                <IconButton aria-label="increment" onClick={() => handleAddItem(ele.id, ele.defaultValue)} color="success" disabled={ele.defaultValue === ele.stock}>
                                                    <AddIcon />
                                                </IconButton>
                                            </div>
                                            <div>
                                                {total}
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', padding: '5px 10px' }}>
                                            <div>
                                                Discounted Amount {ele.discountPercentage}% -
                                            </div>
                                            <div style={{ textDecoration: 'line-through' }}>
                                                {discountAmount}
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', alignContent: 'center', alignItems: 'center', padding: '5px 10px' }}>
                                            <div>
                                                Net Amount -
                                            </div>
                                            <div style={{ textDecoration: 'solid', fontWeight: 'bold' }}>
                                                {netAmount}
                                            </div>
                                        </Grid>
                                        <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center' }}>
                                            <Button variant="outlined" color="error" onClick={() => handleOnclickRemove(ele.id)} endIcon={<DeleteIcon />}>Remove</Button>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </div>
                        );
                    })}
                </div>
            ) : (
                <Grid container spacing={2} style={{ display: 'flex', justifyContent: 'center', textAlign: 'center' }}>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom component="div">Your Cart is Empty!</Typography>
                        <Button variant="contained" size="large" color="success" onClick={() => navigate('/')} endIcon={<ShoppingCartCheckoutIcon />}>Go to Shopping Page</Button>
                    </Grid>
                </Grid>
            )}
            <Grid container style={grid_style}>
                <Grid item xs={12}>
                    <h2>Total Amount: {totalCartAmount}</h2>
                </Grid>
                <Grid item xs={12}>
                    <Button variant="contained" size="large" color="success" disabled={cartItems === 0} onClick={handleCheckOut} endIcon={<ShoppingCartCheckoutIcon />}>Click for CheckOut!</Button>
                    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                        <Alert onClose={handleClose} severity="success" variant="filled" sx={{ width: '100%' }}>
                            Successfully CheckedOut! You will be redirected to Homepage.
                        </Alert>
                    </Snackbar>
                </Grid>
            </Grid>
        </>
    );
}

export default CartPage;
