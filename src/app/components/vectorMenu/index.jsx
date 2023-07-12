import React from "react";
import Style from "./vectormenu.module.css";
import Image from "next/image";

export default function VectorMenu() {
  return (
    <div className={Style.vectorContenedor}>
      <Image
        src={"/image/lineas_divisoras.svg"}
        alt="Lineas"
        width={1440}
        height={40}
      />
    </div>
  );
}
