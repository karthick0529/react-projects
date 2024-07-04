import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from '../redux/cartListSlice';
import { increment, decrement } from '../redux/cartSlice';
import { updateInCart } from '../redux/dataSlice';
import { Grid, Card, CardContent, CardMedia, Typography, Button, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import '../styles/Home.css'


function Home() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.data);

  const handleAddToCart = (item) => {
    dispatch(addItem({ ...item, defaultValue: 1 }));
    dispatch(increment());
    dispatch(updateInCart({ id: item.id, inCart: true }));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeItem(item.id));
    dispatch(decrement());
    dispatch(updateInCart({ id: item.id, inCart: false }));
  };

  return (
    <Grid container spacing={2}>
      {items.map((item) => (
        <Grid item xs={12} sm={6} md={4} key={item.id}>
          <Card>
            <CardMedia component="img" height="140" image={item.thumbnail} alt={item.title} />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {item.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
              <Typography variant="h6">
                Price: ${item.price}
              </Typography>
            </CardContent>
            <CardActions>
              {!item.inCart ? (
                <Button size="small" color="primary" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </Button>
              ) : (
                <Button size="small" color="secondary" onClick={() => handleRemoveFromCart(item)}>
                  Remove from Cart
                </Button>
              )}
            </CardActions>
          </Card>
        </Grid>
      ))}
      <Grid item xs={12}>
        <Link to="/cartpage">
          <Button variant="contained" color="primary">
            Go to Cart
          </Button>
        </Link>
      </Grid>
    </Grid>
  );
}

export default Home;
