import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '../components/layout/Navbar'
import { CharactersProvider } from '../context/CharactersContext'
import { BuscarPersonajeScreen } from '../pages/BuscarPersonajeScreen'
import { HomeScreen } from '../pages/HomeScreen'
import { SeleccionarPersonajesScreen } from '../pages/SeleccionarPersonajesScreen'

export const AppRoute = () => {
  return (
   <BrowserRouter>
   <Navbar />
   <CharactersProvider>
      <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/buscar-personaje" element={<BuscarPersonajeScreen />} />
          <Route path="/seleccionar-personajes" element={<SeleccionarPersonajesScreen />} />
      </Routes>
    </CharactersProvider>
   </BrowserRouter>
  )
}
