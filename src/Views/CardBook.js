import React from "react"
import axios from 'axios'
import { useAuthUser } from 'react-auth-kit';

const CardBook = ({books})=> {
  const auth = useAuthUser()

  const handleClickWantToRead = async() =>{
    try{
      const authorsToString = books.volumeInfo.authors.join(', ')

      const response = await axios.post('http://localhost:4000/book/addbook',{
        bookId:books.id,
        bookName:books.volumeInfo.title,
        bookAuthor:authorsToString,
        bookImage:books.volumeInfo.imageLinks && books.volumeInfo.imageLinks.smallThumbnail,
        numberPages:books.volumeInfo.pageCount
      });
      console.log(auth().username)
      console.log(response.data._id)
      const res = await axios.post('http://localhost:4000/app/getId',{
        username:auth().username,
        bookId:response.data._id
      });
      console.log(res.data)

    }catch (e) {
      if (e.response && e.response.status === 500){
        alert('Error')
      }
      console.log(e)
    }
  }

  return(
    <div className="card m-3" style={{width:"10rem"}}>
          <img className="card-img-top p-3" style={{aspectRatio:"3/2" ,objectFit:"contain"}}
               src={books.volumeInfo.imageLinks && books.volumeInfo.imageLinks.smallThumbnail} alt="imageBook"/>
      <div className="card-body">
        <h6 className="text-black">{books.volumeInfo.authors.join(', ')}</h6>
        <h6 className="text-black">Page Count: {books.volumeInfo.pageCount}</h6>
        <button className="btn btn-primary mb-2" onClick={handleClickWantToRead}>Want To Read</button>
        <button className="btn btn-primary">Read</button>
      </div>
    </div>
  );
}

export default CardBook