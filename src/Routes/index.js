import React from "react";
import { Route, Routes } from "react-router-dom";
import Agency from "../Pages/Agency";
import Blogs from "../Pages/Blogs";
import Cases from "../Pages/Cases";
import Contact from "../Pages/Contact";
import Mainlayout from "../Pages/Mainlayout";

const index = () => {
  return (
    <Routes>
      <Route path="/" element={<Mainlayout />} />
      <Route path="/agency" element={<Agency />} />
      <Route path="/cases" element={<Cases />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};

export default index;
