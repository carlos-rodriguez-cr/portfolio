import React from 'react'
import { Routes, Route, BrowserRouter, NavLink} from "react-router-dom";
import { Contacto } from '../Contacto';
import { Curriculum } from '../Curriculum';
import { Inicio } from '../Inicio';
import { Footer } from '../layout/Footer';
import { HeaderNav } from '../layout/HeaderNav';
import { Portfolio } from '../Portfolio';
import { Servicios } from '../Servicios';

export const MisRutas = () => {
  return (
    <BrowserRouter>
        {/*Header y Navegacion */}
        <HeaderNav />

        {/* CONTENIDO CENTRAL */}
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/inicio" element={<Inicio />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/servicios" element={<Servicios />} />
            <Route path="/curriculum" element={<Curriculum />} />
            <Route path="/contacto" element={<Contacto />} />
        </Routes>

        <hr />
        {/*FOOTER */}
        <Footer />
    </BrowserRouter>
  )
}
