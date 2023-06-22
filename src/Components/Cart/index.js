import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CartModule from "../../CartModule/CartModule";
import { ListItem, ListItemText, List, DialogContentText } from "@mui/material";

const Cart = (props) => {
  const handleClose = () => {
    props.close();
  };
  const handleOpen =()=>{
    
  }

  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    let cartList = CartModule.getCart();
    setCartItems(cartList);
  }, []);

  return (
    <>
      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>My Cart</DialogTitle>
        <DialogContent>
          <List>
            {cartItems.map((item, index) => {
              return (
                <ListItem key={index}>
                  <ListItemText primary={item.title} secondary={item.body} />
                </ListItem>
              );
            })}
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained"onClick={handleOpen} >Buy Now</Button>
        </DialogActions>
      </Dialog>
      </>
    );
  };
  
  export default Cart;
  