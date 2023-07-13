import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import style from './barraNavegacion.module.css'

export default function BarraNavegacion() {
  return (
    <header className={style.header_navbar}>
        <nav className={style.navbar}>
            <Image className={style.logo} src="/image/rukalogo.png" alt="Logo de Ruka Weshakellu" width={170} height={70} /> 
            <ul className={style.navbar_lista}>
                <li><Link className={style.navbar_link} href="/">Inicio</Link></li>
                <li><Link className={style.navbar_link} href="/menu">Menú</Link></li>
                <li><Link className={style.navbar_link} href="/Categorias">Productos</Link></li>
                <li><Link className={style.navbar_link} href="/nosotros">Nosotros</Link></li>
                <li><Link className={style.navbar_link} href="#">Contacto</Link></li>
                <button className={style.button_Reserva}>  
                  <span className={style.transition}></span>
                  <span className={style.gradient}></span>
                  <Link className={style.label} href="/reserva">Reserva</Link>
                </button>
            </ul>
        </nav>
  </header>
  )
}