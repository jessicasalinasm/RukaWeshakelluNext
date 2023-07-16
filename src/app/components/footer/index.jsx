import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={style.pie_pagina}>
      <div className={style.grupo_1}>
        <div className={style.box_footer} id={style.primeracolumna}>
          <div className={style.icons_footer}>
            <Image
              src="/image/rukalogo.png"
              alt="Logo de Ruka Weshakellu"
              width={200}
              height={100}
            />

            <div className={style.redes_sociales}>
              <div>
                <Link
                  href="https://www.instagram.com/ruka.weshakellu/?hl=es"
                  alt="Instagram"
                  target="_blank"
                >
                  <img
                    className={style.icono_instagram}
                    src="/image/instagram_icon.png"
                    alt="icono whatsapp"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
              <div>
                <Link
                  href="https://web.facebook.com/profile.php?id=100057548330284"
                  alt="Facebook"
                  target="_blank"
                >
                  <img
                    className={style.icono_facebook}
                    src="/image/facebook_icon.png"
                    alt="icono facebook"
                    width={30}
                    height={30}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* <div className={style.box_footer} id={style.segundacolumna}>
          <div className={style.links_footer_container}>
            <div className={style.link_nosotros}>
              <Link href="/nosotros">
                <h3 className={style.text_link}>Nosotros</h3>
              </Link>
            </div>
            <div className={style.link_menu}>
              <Link href="/menu">
                <h3 className={style.text_link}>Menú</h3>
              </Link>

              <h2>Comida casera</h2>
              <h2>Sandwich de la casas</h2>
              <h2>Aperitivos</h2>
              <h2>Vinos otoño/invierno</h2>
              <h2>Postres</h2>
            </div>

            <div className={style.link_productos}>
              <Link href="/Categorias">
                <h3 className={style.text_link}>Productos</h3>
              </Link>
              <h2>Artesanias</h2>
              <h2>Agroelaborados</h2>
            </div>
            <div className={style.link_reservas}>
              <Link href="/reserva">
                <h3 className={style.text_link}>Reservas</h3>
              </Link>
              <h2>Nuestros Salones</h2>
              <h2>Nuestros Eventos</h2>
            </div>
          </div>
        </div>

        <div className={style.box_footer} id={style.terceracolumna}>
          <div className={style.linksfooter}>
            <h3>Ubicación</h3>
            <p>Allipen Km 13, Freire, Chile</p>
            <div className={style.links_maps}>
              <Link
                className={style.link_map}
                href="https://www.google.com/maps/dir/-38.9640749,-72.4968445/Ruka+Weshakellu+-+Allipen+Km+13+Freire,+4940000+Araucan%C3%ADa/@-39.0009477,-72.5182666,13.01z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9614e90caec397b5:0x2925957e94050d22!2m2!1d-72.4682885!2d-38.9952147!3e3?hl=es&entry=ttu"
                target="_blank"
              >
                Google Maps
              </Link>
              <Link
                className={style.link_waze}
                href="https://www.waze.com/es/live-map/directions/cl/araucania/araucania/ruka-weshakellu?to=place.ChIJtZfDrgzpFJYRIg0FlH6VJSk"
                target="_blank"
              >
                Waze
              </Link>
            </div>
          </div>
        </div> */}
         <div className={style.box_footer} id={style.segundacolumna}>

{/*<Link href="/app">


  <h3>
    <b>Contacto</b>
</h3>
</Link>*/}
<Link href="/nosotros">
  <h3>
    <b>Nosotros</b>
  </h3>
</Link>
<Link href="/Categorias">
  <h3>
    <b>Productos</b>
  </h3>
</Link>
<Link href="/menu">
  <h3>Menú</h3>
</Link>
</div>
<div className={style.box_footer} id={style.terceracolumna}>
<Link href="/reserva"><h3>Reserva</h3></Link>
<h3>Nuestros Salones</h3>
</div>
{/*<div className={style.box_footer} id={style.cuartacolumna}>
<Link href="/menu">
  <h3>Menú</h3>
</Link>*/}

{/* <Link href="/menu/Carta#seccion-1">
  <p>Comida Casera</p>
</Link>
<br />
<Link href="/menu/Carta#seccion-2">
  <p>Sandwich de la Casa</p>
</Link>
<br />
<Link href="/menu/Carta#seccion-3">
  <p>Aperitivos</p>
</Link>
<br />
<Link href="/menu/Carta#seccion-4">
  <p>Vinos Otoño/Invierno</p>
</Link>
<br />
<Link href="/menu/Carta#seccion-5">
  <p>Cafeteria/Pasteleria</p>
</Link> */}

{/*</div>*/}
<div className={style.box_footer} id={style.quintacolumna}>
<div>
  <h3>Ubicación</h3>

  <p>Allipen Km 13, </p>
  <br />
  <p>Freire, Chile</p>

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
