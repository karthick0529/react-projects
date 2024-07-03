import React, { useContext, useEffect } from 'react';
import { ProductContext } from '../Utils/DataContextComponents';
import store from '../redux/store'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {saveAllBlogs,decrease_cart, increase_cart, remove_cart } from '../redux/BlogSlice';

function Card() {
  const { user } = useContext(ProductContext);
  const dispatch=useDispatch();
  const blogs=useSelector((state)=>state.blogs)

  const handleDecrease = (id, quantity) => {
    if (quantity > 1) {
        dispatch(decrease_cart({id}));
    }
  };

  const handleIncrease = (id, quantity) => {
    if (quantity < 10) {
        dispatch(increase_cart({id}))
    }
  };

  const handleDelete = (id) => {
    dispatch(remove_cart({id}))
  };

  const totalCartQuantity = useSelector((state) =>
  state.blogs.reduce((total, product) => total + (product.quantity || 1), 0)
);
const totalPrice = useSelector((state) =>
state.blogs.reduce((total, product) => total + product.price * (product.quantity || 1), 0)
);
  useEffect(()=>{
    dispatch(saveAllBlogs(user.products));
  },[dispatch, user.products])

  return <>
    <div className='bg-dark text-center mb-5' style={{width:'100%',position:'sticky',top:'0',zIndex:'1',color:'white',boxShadow:'10px 10px 16px black'}}>
    <div className="row mt-4">
        <div className="col-6">
          <b>Total Cart Quantity:</b>
        </div>
        <div className="col-6 text-center">
          <b className='btn btn-outline-light'>{totalCartQuantity}</b>
        </div>
      </div>
      <div className="row mt-2 mb-4">
        <div className="col-6">
          <b>Total Price:</b>
        </div>
        <div className="col-6 text-center">
        <button className='btn btn-outline-primary'>{`$${totalPrice.toFixed(2)}`}</button>
        </div>
      </div>
    </div>
      {blogs.map((product) => {
        const carouselId = `carouselExample${product.id}`;
        const total = product.price * (product.quantity || 1);

        return (
          <div key={product.id} className="col-11 col-lg-4 mb-3 mx-auto my-5">
            <div className="card bg-light-subtle"  style={{boxShadow:'-10px -10px 20px grey,10px 10px 20px grey'}}>
              <div id={carouselId} className="carousel slide">
                <div className="carousel-inner">
                  {product.images.map((image, i) => (
                    <div
                      key={i}
                      className={`carousel-item${i === 0 ? ' active' : ''}`}
                    >
                      <img
                        src={image}
                        className="d-block w-100"
                        alt={`Product ${i + 1}`}
                      />
                    </div>
                  ))}
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="prev"
                  style={{ color: 'black', fontWeight: 'bolder' }}
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target={`#${carouselId}`}
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
              <div className="card-body">
                <h5 className="card-title text-center" style={{ fontSize: '1.5em' }}>
                  <b>{product.title}</b>
                </h5>
                <hr></hr>
                <p className="card-text text-center" style={{ fontWeight: 'bold' }}>
                  {product.description}
                </p>
                <p className="card-text text-center" style={{ color: 'red',fontWeight: 'bold' }}>
                  {`${product.discountPercentage} % Discount`}
                </p>
                <p className="card-text" style={{ fontWeight: 'bold' }}>
                  {`Brand: ${product.brand}`}
                </p>
                <p className="card-text" style={{ fontWeight: 'bold' }}>
                  {`Category: ${product.category}`}
                </p>

                <hr></hr>
                <div className="row">
                  <div className="col-6">
                    <label className="mb-3">
                      <b>Quantity:</b>
                    </label>
                  </div>
                  <div className="col-6">
                    <div className="input-group rounded-2" style={{ outline: '2px solid grey' }}>
                      <button type="button" className="input-group-text" onClick={() => handleDecrease(product.id, product.quantity || 1)}>
                        <b>-</b>
                      </button>
                      <div className="form-control text-center" style={{ outline: '2px solid grey' }}>
                        <b>{product.quantity || 1}</b>
                      </div>
                      <button type="button" className="input-group-text" onClick={() => handleIncrease(product.id, product.quantity || 1)}>
                        <b>+</b>
                      </button>
                    </div>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div className="col-6">
                    <b>Price:</b>
                  </div>
                  <div className="col-6 text-center">
                    <b>${total}</b>
                  </div>
                </div>
                <hr></hr>
                <div className="d-flex justify-content-center">
                  <button type="button" className="btn btn-danger" onClick={() => { handleDelete(product.id) }}>
                    <b>Remove Cart</b>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

    </>

}

export default Card;