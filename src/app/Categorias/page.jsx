import React from "react";
import Link from "next/link";
import style from "./productos.module.css";
import Image from "next/image";
import CardDestacados from "../components/CardDestacados";
/* import Nombre from './[nombre]/page' */

export default function Productos() {
  return (
    <main className={style.contenedor}>
      <div className={style.banner}>
        <h1>Productos Weshakellu</h1>
        <h3>Descubre nuestros productos hechos a mano</h3>
      </div>
      <h2 className={style.titulo_destacados}>Productos destacados</h2>

      <div className={style.contenedor_destacados}>
        <CardDestacados />
      </div>

      <hr className={style.linea_division} />

      <div className={style.container_categories}>
        <div className={style.categoria_artesania}>
          <Link href="Categorias/nombre">
            <h2>Artesanias</h2>
          </Link>
        </div>
        <div className={style.categoria_agroelaborados}>
          <h2>Agroelaborados</h2>
        </div>
      </div>

      <div className={style.container_info_compra}>
        <div className={style.fondo_info_compra}>
          <div className={style.container_text_compra}>
            <h4>¿Te interesa algún producto?</h4>
            <p>
              Amet deserunt consectetur ipsum nulla excepteur. Eu fugiat quis
              occaecat ea qui quis labore sit cillum ut. Et ad dolore
              consectetur officia occaecat eiusmod quis commodo consectetur esse
              ut do veniam. Consequat Lorem ipsum sint consequat anim incididunt
              exercitation eiusmod adipisicing ea dolor in. Esse est quis
              excepteur et commodo. Ullamco exercitation do incididunt dolor
              duis sunt.
            </p>
            <h6 className={style.text_sub_contacto}>
              Si te interesa comprar algún producto contactanos a través de
              whatsapp o correo electrónico:{" "}
            </h6>
            <div className={style.icono_container}>
              <div className={style.icono_container_whatsapp}>
                <Image
                  className={style.icono_whatsapp}
                  src="/image/whatsapp.png"
                  alt="icono whatsapp"
                  width={50}
                  height={50}
                />
                <h6>+569 98467598</h6>
              </div>
              <div className={style.icono_container_correo}>
                <Image
                  className={style.icono_correo}
                  src="/image/gmail.png"
                  alt="Icono correo"
                  width={50}
                  height={50}
                />
                <h6>rukaweshakellu@gmail.cl</h6>
              </div>
            </div>
          </div>

          <Image
            className={style.logo_info}
            src="/image/logo_circular.png"
            alt="Logo de Ruka Weshakellu"
            width={250}
            height={250}
          />
        </div>
      </div>
    </main>
  );
}
