import React from "react";
import { Home } from "../pages/Home";
import { Clima } from "../pages/Clima";
import { Login } from "../pages/Login";
import { Biblioteca } from "../pages/Biblioteca";
import { VerLibro } from "../pages/VerLibro";
import { Buscador } from "../pages/Buscador";
import { Register } from "../pages/Register";
import { CreateBook } from "../pages/CreateBook";
import { Routes, Route } from "react-router-dom";
import { ListaDeTareas } from "../pages/ListaDeTareas";
import { SelectorDeEmojis } from "../pages/SelectorDeEmojis";
import { Maps } from "./maps/Maps";

export const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='lista-tareas' element={<ListaDeTareas />} />
      <Route path='clima' element={<Clima />} />
      <Route path='emojis' element={<SelectorDeEmojis />} />
      <Route path='books' element={<Biblioteca />} />
      <Route path='search' element={<Buscador />} />
      <Route path='create-book' element={<CreateBook />} />
      <Route path='view-book/:bookId' element={<VerLibro />} />
      <Route path='login' element={<Login />} />
      <Route path='register' element={<Register />} />
      <Route path='maps' element={<Maps />} />
    </Routes>
  );
};
