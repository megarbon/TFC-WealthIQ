import React, { useEffect } from 'react';
import Library from './library';
import booksData from './library2.json';
import { Metadata } from "next";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

export const metadata: Metadata = {
  title: "Books",
  description:
    "Books about investing",
};

const books = () => {
  return (
    <DefaultLayout>
       <Breadcrumb pageName="Books" />
      <div className="text-center">
      <header className="bg-[#1C2434] p-5 text-white text-4xl">
        <h1>Book Library</h1>
      </header>
      <Library data={booksData} />
    </div>
    </DefaultLayout>
    
  );
}

export default books;
