import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React,{useState,useEffect} from 'react';
import {Button,Grid} from '@mui/material/';

import {
    createMuiTheme,
    responsiveFontSizes,
  } from "@mui/material/";
  
  

export default function Types() {
    const [quote,setQuote]= useState("");
    const [author,setAuthor]= useState("");
    // https://type.fit/api/quotes
    
    useEffect(() =>{
      fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(
        (quote)=>{
          var rNum = Math.floor(Math.random() * 150 )
          setQuote(quote[rNum].text);
          setAuthor(quote[rNum].author);
          console.log(quote)
    
        }
      )
    
    },[])
    let fetchquote =()=>{
      fetch("https://type.fit/api/quotes")
      .then(res => res.json())
      .then(
        (quote)=>{
          var rNum = Math.floor(Math.random() * 150 )
          setQuote(quote[rNum].text);
          setAuthor(quote[rNum].author);
    
        }
      )
      let theme = createMuiTheme();
      theme = responsiveFontSizes(theme);
      
    }
    // justifyContent: 'flex-start', fontWeight: 'bold',spacing:29
  return (
    <Box sx={{fontWeight: 900,fontSize:{
        lg: 30,
        md: 20,
        sm: 15,
        xs: 10
      } }}>
      <Typography variant="h1" gutterBottom>
      {quote}      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      {author}      </Typography>
      <Grid>

      <Button  sx={{l:5}} variant="contained" color="success" onClick={fetchquote}>
    Success
</Button>
</Grid>


    </Box>
  );
}
