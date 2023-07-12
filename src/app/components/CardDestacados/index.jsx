import React from "react";
import style from "./cardDestacados.module.css";
import Image from "next/image";

export default function CardDestacados() {
  const cardData = [
    {
      title: "Tarjeta 1",
      description: "Descripción de la tarjeta 1",
      image: "/image/piedra_nosotros.jpg",
    },
    {
      title: "Tarjeta 2",
      description: "Descripción de la tarjeta 2",
      image: "/image/joyaMapuche.jpg",
    },
    {
      title: "Tarjeta 3",
      description: "Descripción de la tarjeta 3",
      image: "/image/joyaMapuche.jpg",
    },
    {
      title: "Tarjeta 4",
      description: "Descripción de la tarjeta 4",
      image: "/image/joyaMapuche.jpg",
    },
    // Agregar más objetos de datos según sea necesario
  ];
  return (
    <>
      <div className={style.container_cards}>
        {cardData.map((producto, i) => (
          <>
            <div className={style.container_cardD}>
              <Image
                className={style.img_cardD}
                width={270}
                height={250}
                src={producto.image}
                alt={producto.title}
              />
              <div key={i} className={style.text_cardD}>
                <h2>{producto.title}</h2>
                <p>{producto.description}</p>
              </div>
            </div>
          </>
        ))}
      </div>
    </>
  );
}
