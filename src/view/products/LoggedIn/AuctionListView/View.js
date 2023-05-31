import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../store/reducers';

import jwt_decode from "jwt-decode"


import {
  Backdrop,
  Box,
  CircularProgress,
  Container,

} from '@mui/material';

import { useQuery } from "react-query";
import { loadAuctions } from '../../../../data/api/api'
//import { useAllProducts } from '../../../../data';
import Header from './Header';
import Results from './Results';
import Page from '../../../../components/Page';
import { saveClaimsAction, saveTokenAction } from '../../../../features/auth/authSlice';
import { loginAxios } from '../../../../services/authService'
//import datas from '../../../../datas.json'
//import { ProductType } from 'models/product-type';
//import { getProductsAxios } from '../../../../services/ProductService'

function ProductListView () {
  const classes = useStyles();
  const { data = { results: [] }} = useQuery("results", loadAuctions);
  const [open, setOpen] = React.useState(false);


  console.log(data)
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  //console.log(token);
  const savedClaims = JSON.parse(localStorage.getItem('claims'));
  
  useEffect(() => {
    if (token && !savedClaims) {
      const claims = jwt_decode(token);
      dispatch(saveClaimsAction(claims));
      localStorage.setItem('claims', JSON.stringify(claims));
    }
  }, [token, savedClaims, dispatch]);
  
  //console.log(savedClaims);
  //console.log(savedClaims?.user_id);
 
  //const results = useAllProducts();

  //const results = data.results;

  //let filteredResults = results.filter((results)=> results?.owner_id === savedClaims.user_id);
  let results = data.results.filter((result) => result?.owner_id === savedClaims?.user_id);
  //console.log(results)

  const handleClose = () => {
    setOpen(false);
  };
  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <Page className={classes.root} title="Auction List">
      <Container maxWidth={false}>
        <Header />
      
 
    {data.results && (
          <Box mt={3}>
            <Results results={results} />
          </Box>
        )}
   
      <Backdrop
          className=""
          open={open}
          onClick={handleClose}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
   
    
       
      </Container>
    </Page>
  );
};


const useStyles = (theme) =>  ({
  root: {},

})

export default ProductListView;
