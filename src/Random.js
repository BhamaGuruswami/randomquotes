import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import React,{useState,useEffect} from 'react';
import {Button,Grid} from '@mui/material/';
import './App.css'
 

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
    }
    // justifyContent: 'flex-start', fontWeight: 'bold',spacing:29
  return (
    <Box sx={{fontSize:{
        lg: 30,
        md: 20,
        sm: 15,
        xs: 10
      }}}>
        {/* <h1>Random Quote</h1> */}
      <Typography variant="h1" gutterBottom>
      {quote}      </Typography>
      <Typography  sx={{fontWeight:"lighter"}} variant="h5" gutterBottom>
      {author}      </Typography>
      <Grid sx={{fontSize:{
        lg: 30,
        md: 20,
        sm: 15,
        xs: 10
      }}}>

      <Button  sx={{l:5,position: 'relative',left: 500}} variant="contained" color="success" onClick={fetchquote}>
    Change
</Button>
</Grid>


    </Box>
  );
}
