import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.pie_pagina}>
      <div className={style.grupo_1}>
        <div className={style.box_footer} id={style.primeracolumna}>
          <div className={style.logo_redsocial}>
            <figure>
              <Image
                src="/image/rukalogo.png"
                alt="Logo de Ruka Weshakellu"
                width={200}
                height={100}
              />
            </figure>
            <div className={style.redes_sociales}>
              <div>
                <Link
                  href="https://www.instagram.com/ruka.weshakellu/?hl=es"
                  alt="Instagram"
                  target="_blank"
                >
                  <Image
                    className={style.logo_instagram}
                    src="/image/instagram.png"
                    alt="logo instagram"
                    width="30"
                    height="30"
                  />
                </Link>
              </div>
              <div>
                <Link
                  href="https://web.facebook.com/profile.php?id=100057548330284"
                  alt="Facebook"
                  target="_blank"
                >
                  <Image
                    className={style.logo_facebook}
                    src="/image/facebook.png"
                    alt="logo facebook"
                    width="30"
                    height="30"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className={style.box_footer} id={style.segundacolumna}>
          <div className={style.box_nosotros}>
            <Link href="/nosotros">
              <h3>
                <b>Nosotros</b>
              </h3>
            </Link>
          </div>
          <div className={style.box_menu}>
            <Link href="/menu">
              <h3>
                <b>Menú</b>
              </h3>
            </Link>
          </div>
          <div className={style.box_salones}>
            <Link href="/#salones">
              <h3>
                <b>Salones</b>
              </h3>
            </Link>
            <h2>Salón general</h2>
            <h2>Salón fogón</h2>
          </div>
          <div className={style.box_categorias}>
            <Link href="/Categorias">
              <h3>
                <b>Productos</b>
              </h3>
            </Link>
            <h2>Artesanías</h2>
            <h2>Agroelaborados</h2>
          </div>
        </div>
        <div className={style.box_footer} id={style.quintacolumna}>
          <div>
            <h3>Ubicación</h3>
            <p>Allipen Km 13, Freire, Chile</p>
          </div>
          <br />

          <div className={style.linksfooter}>
            <Link
              href="https://www.google.com/maps/dir/-38.9640749,-72.4968445/Ruka+Weshakellu+-+Allipen+Km+13+Freire,+4940000+Araucan%C3%ADa/@-39.0009477,-72.5182666,13.01z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9614e90caec397b5:0x2925957e94050d22!2m2!1d-72.4682885!2d-38.9952147!3e3?hl=es&entry=ttu"
              target="_blank"
            >
              Google Maps
            </Link>
            <Link
              href="https://www.waze.com/es/live-map/directions/cl/araucania/araucania/ruka-weshakellu?to=place.ChIJtZfDrgzpFJYRIg0FlH6VJSk"
              target="_blank"
            >
              {" "}
              Waze
            </Link>
          </div>
        </div>
      </div>
      <div className={style.derechos_reservados_container}>
        <h4>® Derechos reservados Ruka Weshakellu 2023</h4>
      </div>
    </footer>
  );
}
