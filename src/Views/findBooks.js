import React,{useState} from "react"
import "../css/findBooks.css"
import axios from "axios";
import BookSearch from "./Components/BookSearchResults";
import {useNavigate} from "react-router-dom";
<<<<<<< HEAD
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { ThemeProvider } from "@mui/material/styles";
import theme from "../Themes/theme"
import CssBaseline from '@mui/material/CssBaseline';

=======
require('dotenv').config();
>>>>>>> 993219659f516446d228a81dd4f56fa6294856ff
function FindBooks(){
  const[bookName,setBookName]=useState("")
  const[bookAuthor,setBookAuthor]=useState("")
  const[bookData,setBookData]=useState([])
  const navigate = useNavigate();
  const apiKey = process.env.GOOGLE_API_KEY;
  const handleSearch = async(event)=>{
    event.preventDefault()
    try{
      const response = await axios.get(`GOOGLE_API_KEY`)
      setBookData(response.data.items)
      console.log(response.data)
    }catch (e) {
      console.log(e)
    }

  }

  const handleClick  = (value) => {
    if (value === "wantToRead"){
        navigate('/WantToRead')
    }
  }

  return(
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <div className="findbooks">
          <div className="background">
            <h1>Open Books</h1>
            <form onSubmit={handleSearch}>
              <input type="text" placeholder="Book Name" onChange={(event=>setBookName(event.target.value))} />
              <input type="text" placeholder="Author" onChange={(event=>setBookAuthor(event.target.value))} />
              <button type="submit">Search</button>
            </form>
            <Box >
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <img src="/book.png" alt="book" onClick={()=>handleClick("wantToRead")} style={{ width: '90%', height: '90%', marginTop: '10px' }}/>
                  <Typography variant = "h4">Want To Read</Typography>
                </Grid>
                <Grid item xs={4}>
                  <img src="/stacked_books.png" alt="book" onClick={()=>handleClick("wantToRead")} style={{ width: '90%', height: '90%', marginTop: '10px' }}/>
                  <Typography variant = "h4">Read</Typography>
                </Grid>
                <Grid item xs={4}>
                  <img src="/book.png" alt="book" onClick={()=>handleClick("wantToRead")} style={{ width: '90%', height: '90%', marginTop: '10px' }}/>
                  <Typography variant = "h4">Reading</Typography>
                </Grid>
              </Grid>
            </Box>
          </div>
        </div>

        <div style={{marginTop:'20px'}}>
          <BookSearch bookData={bookData}></BookSearch>
        </div>

      </CssBaseline>
    </ThemeProvider>
  );
}

export default FindBooks
