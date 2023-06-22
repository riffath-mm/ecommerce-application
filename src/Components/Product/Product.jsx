// import React, { useEffect, useState } from 'react'
// import { styled } from '@mui/material/styles';
import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
// import CardData from "../data/Data.json";
import CardData from '../../Data/Record.json';
import "./styles.css";

import { useNavigate } from "react-router-dom";
// import { Button } from "@mui/material";
const Product = (props) => {
  // const [product, setProduct] = useState({});
  let navigate = useNavigate();

  const handleProductClick = (id) => {
    // useEffect(() => {
    //   console.log(props);
    //   setProduct(props.result);
    // }, []);

    navigate("/product", { state: { id } });
  };

  return (
    <>
      <Card className="main-product">
        {CardData.map((data, index) => {
          return (
            <div key={index} className="card">
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    p
                  </Avatar>
                }
                action={<IconButton aria-label="settings"></IconButton>}
                subheader={""}
              />
              <CardMedia
                component="img"
                height={194}
                image={'https://source.unsplash.com/random?house,cars&${new Date().getTime()'}
                alt="Paella dish"
              />
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {data.id}
                </Typography>
              </CardContent>

              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {data.title}
                </Typography>
              </CardContent>
              <CardContent>
                <Typography variant="body2" color="text.secondary">
                  {data.body}
                </Typography>
              </CardContent>

              <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                  <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                  <ShareIcon />
                </IconButton>
                <IconButton
                  to="/product"
                  onClick={() => handleProductClick(data.id)}
                >
                  View
                </IconButton>
                
              </CardActions>
            </div>
          );
        })}
         
      </Card>
     
    </>
  );
};
export default Product;
