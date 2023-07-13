import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./barraNavegacion.module.css";

export default function BarraNavegacion() {
  return (
    <header className={style.header_navbar}>
      <nav className={style.navbar}>
        <Image
          className={style.logo}
          src="/image/rukalogo.png"
          alt="Logo de Ruka Weshakellu"
          width={188}
          height={70}
        />
        <ul className={style.navbar_lista}>
          <li>
            <Link className={style.navbar_link} href="/">
              Inicio
            </Link>
          </li>
          <li>
            <Link className={style.navbar_link} href="/menu">
              Menú
            </Link>
          </li>
          <li>
            <Link className={style.navbar_link} href="/productos">
              Productos
            </Link>
          </li>
          <li>
            <Link className={style.navbar_link} href="/nosotros">
              Nosotros
            </Link>
          </li>
          <li>
            <Link className={style.navbar_link} href="#">
              Contacto
            </Link>
          </li>
          <button href="#" className={style.button_Reserva}>
            Reservar
          </button>
          {/* arreglar */}
        </ul>
      </nav>
    </header>
  );
}
