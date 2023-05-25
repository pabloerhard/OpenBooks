import React from 'react'
const WantToRead = ({book}) => {


  return(
    <div className="card m-3" style={{width:"10rem", background:"#D9D2C2"}}>
      <img className="card-img-top" style={{aspectRatio:"3/2" ,objectFit:"contain"}}
           src={book.bookImage} alt="image"/>
      <div className="card-body">
        <h6 className="text-black">Current Page: {book.currentPage}</h6>
        <h6 className="text-black">Page Count: {book.numberPages} </h6>
      </div>
    </div>
  );
}

export default WantToRead