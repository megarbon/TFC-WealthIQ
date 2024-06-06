import React from 'react';

const Library = ({ data }) => {
  return (
    <div className="flex flex-wrap gap-20 p-20 justify-center">
    {data.library.map((item, index) => (
      <div key={index} className="bg-gray-200 border border-gray-300 rounded-lg shadow-md w-64 text-center">
        <img src={item.book.cover} alt={item.book.title} className="w-full h-auto" />
        <div className="p-5">
          <h2 className="font-bold">{item.book.title}</h2>
          <p><strong>Author:</strong> {item.book.author.name}</p>
          <p><strong>Genre:</strong> {item.book.genre}</p>
          <p><strong>Pages:</strong> {item.book.pages}</p>
          <p><strong>Year:</strong> {item.book.year}</p>
          <p><strong>ISBN:</strong> {item.book.ISBN}</p>
          <p><strong>Synopsis:</strong> {item.book.synopsis}</p>
          <p><strong>Other Books by Author:</strong> {item.book.author.otherBooks.join(', ')}</p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default Library;
