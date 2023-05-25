import React,{useState,useEffect} from 'react';
import '../css/wantToReadCss.css'
import { useAuthUser } from 'react-auth-kit';
import axios from 'axios'
import WantToReadCard from "./Components/WantToReadCard";
const WantToReadList = () => {
  const auth = useAuthUser()
  const [bookIds,setBookIds] = useState([])
  const [books,setBooks] = useState([])

  const getBookIds = async () =>{
    try{
      const response = await axios.post('http://localhost:4000/app/getUserBooks',{
        user:auth().username
      })

      setBookIds(response.data)
    }catch (e) {
      console.log(e)
    }
  }

  const updateData = async() =>{
    let index = 0
    const newBooks = []
    for(index;index <bookIds.books.length;index++){

      const res = await axios.post('http://localhost:4000/book/viewbooks',{
        _id:bookIds.books[index]
      })
      if (res.data !== null){newBooks.push(res.data)

      }
    }
    console.log(newBooks)
    setBooks(newBooks)
  }

  useEffect(()=>{
    console.log(auth().username)
    try{
      if (bookIds && bookIds.books && Array.isArray(bookIds.books)) {
        updateData()
      }
    }catch (e) {
      console.log(e)
    }

  },[bookIds]);

  useEffect(() => {
    getBookIds();
  }, []);

  return(
    <div>
      <div style={{background:"#6BB77B"}}>
        <div className="container">
          <h1 className="text-white">Book List</h1>
        </div>
        <div>
        </div>
      </div>

      <div className="d-flex text-black" >
        {books.filter(book => book.book !== null).map((book) => (
          <WantToReadCard book={book.book}/>
        ))}
      </div>

    </div>


  );
}

export default WantToReadList