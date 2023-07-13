import Style from "./cardMenu.module.css";
import Image from "next/image";
import VectorMenu from "../vectorMenu";
import Link from "next/link";

export default function MenuHome() {
  const menu = [
    {
      Imagen: "/image/comidacasera.jpg",
      titulo: "Comida Casera",
      descripcion:
        "Officia ea aute esse quis officia aliqua. Enim Lorem mollit est quis sit occaecat dolor qui mollit Lorem. Aute ex non commodo velit anim ea sunt laboris ullamco est.",
      subTitulo: "Officia ea aute esse quis officia aliqua. Enim Lorem mollit ",
      enlace: "menu/Carta#seccion-1",
    },
    {
      Imagen: "/image/hamburguesa_casera.jpg",
      titulo: "Sandwich de la casa",
      descripcion:
        "Officia ea aute esse quis officia aliqua. Enim Lorem mollit est quis sit occaecat dolor qui mollit Lorem. Aute ex non commodo velit anim ea sunt laboris ullamco est.",
      subTitulo: "Officia ea aute esse quis officia aliqua. Enim Lorem mollit ",
      enlace: "menu/Carta#seccion-2",
    },
    {
      Imagen: "/image/aperol_spritz.jpg",
      titulo: "Aperitivos",
      descripcion:
        "Officia ea aute esse quis officia aliqua. Enim Lorem mollit est quis sit occaecat dolor qui mollit Lorem. Aute ex non commodo velit anim ea sunt laboris ullamco est.",
      subTitulo: "Officia ea aute esse quis officia aliqua. Enim Lorem mollit ",
      enlace: "menu/Carta#seccion-3",
    },
    {
      Imagen: "/image/vino-toro_de_piedra.jpg",
      titulo: "Vinos Otoño / Invierno",
      descripcion:
        "Officia ea aute esse quis officia aliqua. Enim Lorem mollit est quis sit occaecat dolor qui mollit Lorem. Aute ex non commodo velit anim ea sunt laboris ullamco est.",
      subTitulo: "Officia ea aute esse quis officia aliqua. Enim Lorem mollit ",
      enlace: "menu/Carta#seccion-4",
    },
    {
      Imagen: "/image/torta de harina tostada.jpg",
      titulo: "Cafeteria / Pasteleria",
      descripcion:
        "Officia ea aute esse quis officia aliqua. Enim Lorem mollit est quis sit occaecat dolor qui mollit Lorem. Aute ex non commodo velit anim ea sunt laboris ullamco est.",
      subTitulo: "Officia ea aute esse quis officia aliqua. Enim Lorem mollit ",
      enlace: "menu/Carta#seccion-5",
    },
  ];

  return (
    <>
      <div className={Style.tarjeta}>
        {menu.map((producto, i) => (
          <>
            <div className={Style.card}>
              <div className={Style.cardFondo}>
                <Image
                  className={Style.Image}
                  src={producto.Imagen}
                  alt={producto.titulo}
                  width={623}
                  height={639}
                  /*  style={{ alignItems: "center" }} */
                />
                <div key={i} className={Style.textoCard}>
                  <h2>{producto.titulo}</h2>
                  <p>{producto.descripcion}</p>
                  <h6>{producto.subTitulo}</h6>
                  <Link href={producto.enlace} className={Style.btn}>
                    <div className={Style.textbtn}>Ver en la carta</div>
                  </Link>
                </div>
              </div>
            </div>
            <div className={Style.lineaDivisora}>
              <VectorMenu />
            </div>
          </>
        ))}
      </div>
    </>
  );
}
