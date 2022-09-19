//import React,{useState,useEffect} from 'react';
import './App.css';
import Random from './Random'
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import Box from '@mui/material/Box';


function App() {
//   const [quote,setQuote]= useState("");
// const [author,setAuthor]= useState("");
// // https://type.fit/api/quotes

// useEffect(() =>{
//   fetch("https://type.fit/api/quotes")
//   .then(res => res.json())
//   .then(
//     (quote)=>{
//       var rNum = Math.floor(Math.random() * 150 )
//       setQuote(quote[rNum].text);
//       setAuthor(quote[rNum].author);
//       console.log(quote)

//     }
//   )

// },[])
// let fetchquote =()=>{
//   fetch("https://type.fit/api/quotes")
//   .then(res => res.json())
//   .then(
//     (quote)=>{
//       var rNum = Math.floor(Math.random() * 150 )
//       setQuote(quote[rNum].text);
//       setAuthor(quote[rNum].author);

//     }
//   )

// }
  return (
    // <Box sx={{ width: '100%', maxWidth: 500 }}>

    <div className="App">
   {/* <Box sx={{ width: '100%', maxWidth: 500 }}>
      <h3>Welcome to the random quote page</h3>
      <Typography variant="h1" gutterBottom>
      {quote}
            </Typography>
     <Typography variant="body2"  display="block" gutterBottom>
     {author}      </Typography>
 */}
      {/* <div className="quote">
        <h1></h1>
        <small></small>
      </div><br/> */}
      {/* <div className='button'>
      <button className='btn' onClick={fetchquote}>Generate New quote</button>

      </div> */}
      {/* <Button variant="contained" color="success" onClick={fetchquote}>
    Success
</Button>
 </Box> */}
    
<Random/>
      </div>
          // </Box>

  );
}

export default App;
