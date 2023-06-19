import React,{useState} from "react"
import "../css/findBooks.css"
import axios from "axios";
import CardBook from "./CardBook";
import {useNavigate} from "react-router-dom";
require('dotenv').config();
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
    <div className="findbooks">
      <div className="up">
        <h1>Open Books</h1>
        <form onSubmit={handleSearch}>
          <input type="text" placeholder="Book Name" onChange={(event=>setBookName(event.target.value))} />
          <input type="text" placeholder="Author" onChange={(event=>setBookAuthor(event.target.value))} />
          <button type="submit">Search</button>

        </form>

        <div className="" style={{marginTop:"90px"}} >
            <img className="rounded float-left" src="/book.png" alt="book" style={{maxWidth: "20%", height: "auto",cursor:"pointer"}}
            onClick={()=>handleClick("wantToRead")}/>
        </div>

      </div>
      <div className="down">
        <h1>Search Result</h1>
        <div className="d-flex flex-row flex-md-wrap">
          {bookData
            .filter((item) => item.volumeInfo.pageCount > 0)
            .map((item)=>{
            return(
              <CardBook books={item}/>
            );
          })}
        </div>


      </div>
    </div>


  );
}

export default FindBooks
