import React, { useState, useEffect } from "react";
import Data from '../../Data/Record.json';
import { useLocation } from "react-router-dom";
import "./styles.css";
import { Grid, Typography, Box, Button} from "@mui/material";
import CartModule from "../../CartModule/CartModule";
import Cart from "../Cart";
const ProductDetails = () => {
  const [post, setPost] = useState({});
  const [showCart, setShowCart] = useState(false);
  let location = useLocation();
  const productId = location.state.id;
  console.log(productId);

  useEffect(() => {
    const product = Data.find((p) => p.id === productId);
    if (product) {
      setPost(product);
    }
  }, [productId]);
  console.log(post);

  const handleCart = (product) => {
    CartModule.addToCart(product);
    setShowCart(true);
  };
  const handleCartClose = () => {
    setShowCart(false);
  };

  return (
    <div className="product">
      <>
        <Grid container>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <h2>product id is{location.state.id}</h2>
              <Typography variant="h4">{post.title}</Typography>
              <Typography variant="body">{post.body}</Typography>

              <br />
              <Button variant="contained" onClick={() => handleCart(post)}>
                Add to Cart
              </Button>
            </Box>
          </Grid>
        </Grid>
        {showCart ? <Cart open={showCart} close={handleCartClose} /> : null}
          
      </>
   
    </div>
  );
};

export default ProductDetails;
