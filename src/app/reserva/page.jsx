import React from "react";
import style from "./reserva.module.css";
import Image from "next/image";

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
            <form className={style.reserva_inputs_container}>
              <div className={style.block}>
                <label htmlFor="name">Nombre</label>
                <p>
                  <input
                    type="text"
                    name="nombre"
                    id="nombre"
                    placeholder="Nombre"
                    autofocus
                  />
                </p>
              </div>

              <div className={style.block}>
                <label htmlFor="Apellidos">Apellidos</label>
                <p>
                  <input
                    type="text"
                    name="apellido"
                    id="apellido"
                    placeholder="Apellido"
                    autofocus
                  />
                </p>
              </div>

              <div className={style.block}>
                <label htmlFor="teléfono">Teléfono</label>
                <p>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    placeholder="+569 00000000"
                  />
                </p>
              </div>

              <div className={style.block}>
                <label htmlFor="correo">Correo</label>
                <p>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="correo@gmail.com"
                  />
                </p>
              </div>
            </form>

            <div className={style.container_reserva_options}>
              <div className={style.container_reserva_list}>
                <div className={style.blockOne}>
                  <label htmlFor="fecha">Fecha de reserva</label>
                  <p>
                    <input
                      type="datetime-local"
                      id="fechahora"
                      name="fechahora"
                    />
                  </p>
                </div>
                <div className={style.blockOne}>
                  <label htmlFor="cantidad">cantidad de personas</label>
                  <p>
                    <select name="cantidad_personas" id="cantidad_personas">
                      <option value="">1 persona</option>
                      <option value="">2 personas</option>
                      <option value="">3 personas</option>
                      <option value="">4 personas</option>
                      <option value="">5 personas</option>
                      <option value="">6 personas</option>
                      <option value="">7 personas</option>
                      <option value="">8 personas</option>
                      <option value="">9 personas</option>
                      <option value="">10 personas</option>
                      <option value="">11 personas</option>
                      <option value="">12 personas</option>
                      <option value="">13 personas</option>
                      <option value="">14 personas</option>
                      <option value="">15 personas o más</option>
                    </select>
                  </p>
                </div>
                <div className={style.blockOne}>
                  <label htmlFor="tipo">Tipo salón</label>
                  <p>
                    <select name="tipo_salon" id="tipo_salon">
                      <option value="">1 persona</option>
                      <option value="">2 personas</option>
                    </select>
                  </p>
                </div>
              </div>

              <div className={style.blockOne}>
                <label htmlFor="opcional">Información adicional</label>
                <textarea
                  name="opcional"
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Información adicional que quiera indicarnos"
                  className={style.textarea_form}
                ></textarea>

                <p className={style.blockOne}>
                  <button className={style.button_Reserva}>Reservar</button>
                </p>
                <h6>
                  Toda reserva <span>debe</span> ser confirmada por la
                  administración
                </h6>
              </div>
            </div>
          </div>
        </div>

        <div className={style.info_reserva_container}>
          <div className={style.containersbox_reserva_info}>
            <div className={style.containersbox_direccion}>
              <div className={style.box_direccion_telefono}>
                <Image
                  src="/image/ubicacion.png"
                  alt="icono ubicacion"
                  width="30"
                  height="30"
                />
                <h1>Dirección</h1>
              </div>

              <h2>Nos ubicamos junto a la carretera:</h2>
              <h2>Allipen Km 13 Freire, 4940000 Araucania</h2>
            </div>
            <div className={style.containersbox_telefonos}>
              <div className={style.box_direccion_telefono}>
                <Image
                  src="/image/ubicacion.png"
                  alt="icono ubicacion"
                  width="30"
                  height="30"
                />
                <h1>Teléfonos</h1>
              </div>
              <h2>+56 956061841 - +56 956061841</h2>
            </div>
          </div>
          <div className={style.containersbox_reserva_mapa}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.880891319178!2d-72.47086342462585!3d-38.995214671703295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e90caec397b5%3A0x2925957e94050d22!2sRuka%20Weshakellu!5e0!3m2!1ses!2scl!4v1686781870263!5m2!1ses!2scl"
              className={style.mapa_contacto_reserva}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
