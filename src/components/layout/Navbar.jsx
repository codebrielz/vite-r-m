import React from 'react'
import { Link } from "react-router-dom";

const rutas = [
    {to:'/', title:'Home'},
    {to:'/buscar-personaje', title:'Buscar personaje'},
    {to:'/seleccionar-personajes', title:'Seleccionar personaje/s'},
]

export const Navbar = () => {
  return (
    <div className='navbar navbar-expand-lg bg-success'>
        <div className='container-fluid'>
            <Link className="navbar-brand text-light" to="/">RickAndMorty</Link>
            <div className='collapse navbar-collapse'>
                <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    {rutas.map(({to, title}, i)=>(
                    <li className='nav-item' key={i}>
                        <Link className='nav-link active text-light' to={to} >{title}</Link>
                    </li>
                    ))}
                </ul>
            </div>
        </div>
    </div>
  )
}
