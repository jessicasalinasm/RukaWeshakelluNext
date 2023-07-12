import React from "react";
import style from "./reserva.module.css";

export default function page() {
  return (
    <main className={style.reserva_container}>
      <div className={style.banner_reserva}></div>
      <section className={style.reserva_container_content}>
        <h1 className={style.reserva_content_titulo}>
          Reserva en <span>Ruka Weshallu</span>
        </h1>
        <p className={style.reserva__content_parrafo}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          dolores, quibusdam repellendus iusto optio aliquid. Nam totam ullam
          repellendus, necessitatibus hic laudantium amet eaque atque non
          ratione laborum, ad aperiam.Nam totam ullam repellendus,
          necessitatibus hic laudantium amet eaque atque non ratione laborum, ad
          aperiam. ad aperiam.Nam totam ullam repellendus, necessitatibus hic
          laudantium amet eaque atque non ratione laborum, ad aperiam.
        </p>
        <hr />
        <div className={style.reserva_form}>
          <div className={style.reserva_form_container}>
            <h1 className={style.reserva_form_title}>Formulario de reserva</h1>
            <form action="" className={style.reserva_inputs_container}>
              <p>
                <label htmlFor="name">Nombre</label>
                <input type="text" />
              </p>
              <p>
                <label htmlFor="Apellidos">Apellidos</label>
                <input type="text" />
              </p>
              <p>
                <label htmlFor="teléfono">Teléfono</label>
                <input type="number" name="" id="" />
              </p>
              <p>
                <label htmlFor="correo">Correo</label>
                <input type="email" name="" id="" />
              </p>
              <p className={style.block}>
                <label htmlFor="fecha">Fecha de reserva</label>
                <input type="date" name="" id="" />
              </p>
              <p className={style.block}>
                <label htmlFor="cantidad">cantidad de personas</label>
                <input type="checkbox" name="" id="" />
              </p>
              <p className={style.block}>
                <label htmlFor="tipo">Tipo salón</label>
                <input type="tel" name="" id="" />
              </p>
              <p className={style.blockOne}>
                <label htmlFor="opcional">Información adicional</label>
                <textarea name="opcional" id="" cols="30" rows="10"></textarea>
              </p>
              <p className={style.blockOne}>
                <button type="submit">Reservar</button>
              </p>
            </form>
          </div>
        </div>

        <h6>Toda reserva debe ser confirmada por la administración</h6>

        <div>
          <div>aqui va la información de dirección</div>
          <h6>Aqui va el mapa</h6>
        </div>
      </section>
    </main>
  );
}
