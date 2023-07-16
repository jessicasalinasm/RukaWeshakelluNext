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
            <form action="" className={style.reserva_inputs_container}>
              <div id="inputs_form_reserva" className={style.nombre}>
                <label htmlFor="name">Nombre(*)</label>
                <p>
                  <input
                    className={style.input_text_default}
                    placeholder="Nombre"
                    type="text"
                  />
                </p>
              </div>
              <div className={style.apellido}>
                <label htmlFor="Apellidos">Apellidos(*)</label>
                <p>
                  <input
                    className={style.input_text_default}
                    placeholder="Apellidos"
                    type="text"
                  />
                </p>
              </div>
              <div className={style.correo}>
                <label htmlFor="correo">Correo(*)</label>
                <p>
                  <input
                    className={style.input_text_default}
                    placeholder="Correo"
                    type="email"
                    name=""
                    id=""
                  />
                </p>
              </div>
              <div className={style.telefono}>
                <label htmlFor="teléfono">Teléfono(*)</label>
                <p>
                  <input
                    className={style.input_text_default}
                    placeholder="Teléfono"
                    type="tel"
                    name="phone"
                    id="phone"
                  />
                </p>
              </div>
              <div className={style.area_informacion}>
                <div className={style.text_select_form}>
                  <div className={style.fecha}>
                    <label className={style.block} htmlFor="fecha">
                      Fecha de reserva
                    </label>
                    <p>
                      <input type="date" name="" id="" />
                    </p>
                  </div>
                  <div className={style.cantidad}>
                    <label className={style.block} htmlFor="cantidad">
                      cantidad de personas
                    </label>
                    <p>
                      <select className={style.select_personas_container_form}>
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
                        <option value="">15 o más personas</option>
                      </select>
                    </p>
                  </div>
                  <div className={style.tipo_salon}>
                    <label className={style.block} htmlFor="tipo">
                      Tipo salón
                    </label>
                    <p>
                      <select className={style.select_salon_container_form}>
                        <option value="">Salón principal</option>
                        <option value="">Salón fogón</option>
                      </select>
                    </p>
                  </div>
                </div>
                <div className={style.inputs_optionals}>
                  <label htmlFor="opcional">Información adicional</label>
                  <p className={style.blockOne}>
                    <textarea
                      placeholder="Información adicional que quieras informarnos"
                      className={style.textarea_reserva}
                      name="opcional"
                      id=""
                      cols="60"
                      rows="30"
                    ></textarea>
                  </p>
                  <div className={style.reservar_form_boton}>
                    <button type="submit" /* onClick={SubmitEvent} */>
                      Reservar
                    </button>
                  </div>
                  <h6 className={style.info_reserva_title}>
                    Toda reserva <span>debe</span> ser confirmada por la
                    administración
                  </h6>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className={style.direccion_reserva_form}>
        <div className={style.info_seccion_form}>
          <div className={style.direccion_contenedor_form}>
            <h2>
              <Image
                className={style.logo_direccion}
                src="/image/ubicacion.png"
                alt="logo facebook"
                width="30"
                height="30"
              />
              {"  "}
              Direccion
            </h2>

            <h3>Nos ubicamos junto a la carretera</h3>
            <h3>Allipen Km 13 Freire, 4940000 Araucanía</h3>
          </div>
          <div className={style.telefono_contenedor_form}>
            <h2>
              <Image
                className={style.logo_telefono}
                src="/image/telefono-inteligente.png"
                alt="logo facebook"
                width="30"
                height="30"
              />
              {"  "}Teléfonos
            </h2>
            <h3>+56 956061841 - +56 956061841</h3>
          </div>
        </div>
        <div className={style.mapa_seccion_form}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.880891319178!2d-72.47086342462585!3d-38.995214671703295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e90caec397b5%3A0x2925957e94050d22!2sRuka%20Weshakellu!5e0!3m2!1ses!2scl!4v1686781870263!5m2!1ses!2scl"
            className={style.mapa_reserva}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </main>
  );
}
