"use client"
import React, { useEffect, useState } from 'react';
import booksData from './library.json';

import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

interface Book {
  title: string;
  author: {
    name: string;
    otherBooks: string[];
  };
  genre: string;
  pages: number;
  year: number;
  ISBN: string;
  synopsis: string;
  cover: string;
}

interface LibraryData {
  library: { book: Book }[];
}

const Books: React.FC = () => {
  const [filter, setFilter] = useState({ genre: '', author: '', year: '', yearOrder: '',});
  const [filteredBooks, setFilteredBooks] = useState<{ book: Book }[]>(booksData.library);

  useEffect(() => {
    const filtered = booksData.library.filter(item => {
      return (
        (filter.genre === '' || item.book.genre.toLowerCase().includes(filter.genre.toLowerCase())) &&
        (filter.author === '' || item.book.author.name.toLowerCase().includes(filter.author.toLowerCase())) &&
        (filter.year === '' || item.book.year.toString() === filter.year)
      );
    });

    // Ordenar los libros por año si se ha seleccionado un orden
    if (filter.yearOrder === 'asc') {
      filtered.sort((a, b) => a.book.year - b.book.year);
    } else if (filter.yearOrder === 'desc') {
      filtered.sort((a, b) => b.book.year - a.book.year);
    }

    setFilteredBooks(filtered);
  }, [filter]);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Books" />
      <div className="text-center">
        <header className="bg-[#1C2434] p-5 text-white text-4xl">
          <h1>Book Library</h1>
        </header>
        <div className="flex-row gap-4 justify-center p-10">
          <div className="mt-4 gap-4">
            <input
              type="text"
              name="genre"
              placeholder="Género"
              value={filter.genre}
              onChange={handleFilterChange}
              className="border p-2 rounded"
            />
            <input
              type="text"
              name="author"
              placeholder="Autor"
              value={filter.author}
              onChange={handleFilterChange}
              className="border p-2 rounded "
            />
            <input
              type="text"
              name="year"
              placeholder="Año"
              value={filter.year}
              onChange={handleFilterChange}
              className="border p-2 rounded "
            />
            <select
              name="yearOrder"
              value={filter.yearOrder}
              onChange={handleFilterChange}
              className="border p-2 rounded "
            >
              <option value="">Orden de filtrado</option>
              <option value="asc">Más antiguos primero</option>
              <option value="desc">Más nuevos primero</option>
            </select>
          </div>
        </div>
        <div className="flex flex-wrap gap-20 p-20 justify-center">
  {filteredBooks.map((item, index) => (
    <div key={index} className="bg-white border border-gray-300 rounded-lg shadow-md w-80 h-150 overflow-hidden flex flex-col">
      <img src={item.book.cover} alt={item.book.title} className="w-full h-100 object-cover" />
      <div className="p-5 text-black flex-grow flex flex-col justify-between overflow-y-auto">
        <div>
          <h2 className="font-bold text-xl mb-2">{item.book.title}</h2>
          <p><strong>Autor:</strong> {item.book.author.name}</p>
          <p><strong>Género:</strong> {item.book.genre}</p>
          <p><strong>Páginas:</strong> {item.book.pages}</p>
          <p><strong>Año:</strong> {item.book.year}</p>
          <p><strong>ISBN:</strong> {item.book.ISBN}</p>
        </div>
        <div className="mt-4">
          <p><strong>Sinopsis:</strong> {item.book.synopsis}</p>
          <p><strong>Otros libros del autor:</strong> {item.book.author.otherBooks.join(', ')}</p>
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </DefaultLayout>
  );
}

export default Books;
