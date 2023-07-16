import Image from "next/image";
import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
/* Felipito's comment--> Añadi las card que utilice para platos recomendados */
import Card from "./components/Card_recomendacion/Cards";
/* estamos trabajando en la fuente, asi que por el momento da error */
import H1 from "./components/material/H1";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.banner_home_container}>
        <h1>BIENVENIDO A NUESTRA RUKA</h1>
      </div>
      <section className={styles.Recomendacion_container}>
        <header className={styles.Recomendacion_texto}>
          <h2>PLATOS RECOMENDADOS</h2>
        </header>
        <section className={styles.cardContainer}>
          <Card
            imageUrl="/image/Chinook.jpg"
            title="Chinook cremoso"
            description="Chinook fresco de la zona con un rico cremoso a base de mote fresco, para chuparse los dedos."
          />
          <Card
            imageUrl="/image/ensalada.jpg"
            title="Ensalada de estacion"
            description="Ensalada con frutillas de la estacion, con un rico sabor para mezclar y disfrutar."
          />
          <Card
            imageUrl="/image/lomodecerdo.jpg"
            title="Lomo a la murtilla"
            description="Lomo de cerdo con una reduccion de murtilla en vino. Exquisito."
          />
          <Card
            imageUrl="/image/tortadehigo.jpg"
            title="Torta de higo"
            description="Torta hecha en casa con todo el amor de nuestra ruka, a base de higos frescos tipicos de la zona."
          />
        </section>
        <div className={styles.text_horario}>
          Horarios de atencion Martes a Domingos de 9:00 a 20:00 hrs.
        </div>
      </section>
      {/* Finish recomendacion de la ruka */}
      <div className={styles.vector_home_container}>
        <div className={styles.vector_up}>
          <img src="/image/vector_wave_up.svg"></img>
        </div>
        <div className={styles.vector_down}>
          <img src="/image/vector_wave_down.svg"></img>
        </div>
      </div>
      {/* Salones y nosotros  */}
      <section className={styles.container_main}>
        <div className={styles.container_salones_nosotros}>
          <div className={styles.container_salones}>
            <div className={styles.carrusel_container}>
              <h2>Carrusel</h2>
            </div>
            <div className={styles.info_salones_container}>
              informacion
              <div className={styles.text_salones_container}>
                <h3>Salones</h3>
                <p>
                  Anim sit elit et velit minim id. Deserunt elit excepteur sunt
                  laborum eu ut magna elit dolore enim ex quis. Quis incididunt
                  ut voluptate qui Lorem eiusmod reprehenderit. Lorem minim enim
                  labore sunt reprehenderit est in commodo id laboris.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.img_nosotros}>
            <div className={styles.container_img_patron}>
              <Image
                src="/image/foto_doñaElba.png"
                alt="imagen-nosotros"
                width="583"
                height="554"
              />
              <div className={styles.vector_patron_container}>
                <img src="/image/patron_mp_pequeño.svg"></img>
              </div>
            </div>
            <div className={styles.parrafo_nosotros}>
              <div className={styles.content_text_nosotros}>
                <h1>INCHIÑ TAÑI MONGEN</h1>

                <h2>NUESTRA HISTORIA</h2>
                <p>
                  Somos Ruka Weshakellu, que en Mapuzungun significa, “la casa
                  donde hay de todo”. Nacimos como una empresa familiar dedicada
                  a la gastronomía Mapuche con fusión contemporánea
                </p>
              </div>
              <button className={styles.button_nosotros}>
                <span className={styles.transition}></span>
                <span className={styles.gradient}></span>
                <Link className={styles.label} href="/nosotros">
                  Saber más
                </Link>
              </button>
            </div>
          </div>
        </div>
      </section>
      <hr></hr>

      <section id="contacto" className={styles.contacto}>
        <div className={styles.fondo_contacto}>
          <div className={styles.info_contacto_container}>
            <Image
              id={styles.simboloarana}
              src="/image/simbolo_araña_blanco.svg"
              alt="Simbolo Araña"
              width="80"
              height="100"
            />
            <h1>Contacto</h1>
            <h1>¿Tienes alguna duda o consulta?</h1>
            <h3>Teléfono :+56956061841</h3>
            <h3>Correo : rukaweshakellu@gmail.com</h3>
            <div>
              <Image
                className={styles.logo_instagram}
                src="/image/instagram.png"
                alt="logo instagram"
                width="30"
                height="30"
              />
              <Link
                href="https://www.instagram.com/ruka.weshakellu/?hl=es"
                alt="Instagram"
                target="_blank"
              >
                {" "}
                @ruka.weshakellu
              </Link>
            </div>
            <div>
              <Image
                className={styles.logo_facebook}
                src="/image/facebook.png"
                alt="logo facebook"
                width="30"
                height="30"
              />

              <Link
                href="https://web.facebook.com/profile.php?id=100057548330284"
                alt="Facebook"
                target="_blank"
              >
                {" "}
                Ruka Weshakellu
              </Link>
            </div>
          </div>

          <div className={styles.mapa_info_container}>
            <h1>Ubicación</h1>
            <h5>Allipen Km 13 Freire, 4940000 Araucanía</h5>
            <div id={styles.mapa_contacto_container}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.880891319178!2d-72.47086342462585!3d-38.995214671703295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e90caec397b5%3A0x2925957e94050d22!2sRuka%20Weshakellu!5e0!3m2!1ses!2scl!4v1686781870263!5m2!1ses!2scl"
                className={styles.mapa_contacto}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
