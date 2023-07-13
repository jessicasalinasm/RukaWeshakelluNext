import React from "react";
import Style from "./menu.module.css";
import MenuHome from "../components/cardMenu";
import Image from "next/image";

export default function page() {
  return (
    <main className={Style.fondoMenu}>
      <section className={Style.menuContenedor}>
        <div className={Style.bannerMenu}></div>
        <div>
          <MenuHome />
        </div>
      </section>
    </main>
  );
}
