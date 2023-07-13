import React from "react";
import Image from "next/image";
import Style from "./carta.module.css";

function Carta() {
  const secciones = [
    { id: 1, titulo: "Comida Casera", Image: "/image/carta1.png" },
    { id: 2, titulo: "Sandwich de la Casa", Image: "/image/carta2.png" },
    { id: 3, titulo: "Aperitivos", Image: "/image/carta3.png" },
    { id: 4, titulo: "Vinos Otoño / Invierno", Image: "/image/carta4.png" },
    { id: 5, titulo: "Cafeteria / Pasteleria", Image: "/image/carta5.png" },
  ];

  return (
    <div>
      {secciones.map((seccion) => (
        <section key={seccion.id} id={`seccion-${seccion.id}`}>
          <h2 className={Style.Titulos}>{seccion.titulo}</h2>

          <Image
            className={Style.Carta}
            src={seccion.Image}
            alt={seccion.titulo}
            width={850}
            height={1000}
          />
        </section>
      ))}
    </div>
  );
}

export default Carta;
