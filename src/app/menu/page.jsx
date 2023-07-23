import React from "react";
import Style from "./menu.module.css";
import MenuHome from "../components/cardMenu";

export default function page() {
  return (
    <main className={Style.fondoMenu}>
      <div className={Style.bannerMenu}></div>
      <section className={Style.menuContenedor}>
        <div className={Style.container_content}>
          <MenuHome />
        </div>
      </section>
    </main>
  );
}
