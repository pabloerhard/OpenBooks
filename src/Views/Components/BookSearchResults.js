import React from 'react';
import CardBook from '../CardBook';

const BookSearch = ({bookData}) => {

  if (!Array.isArray(bookData)) {
    return null;
  }

  return (
    <div>
      <h1>Search Result</h1>
      <div className="d-flex flex-row flex-md-wrap">
        {bookData
          .filter((item) => item.volumeInfo.pageCount > 0)
          .map((item) => {
            return <CardBook books={item} />;
          })}
      </div>
    </div>
  );
};

export default BookSearch;
