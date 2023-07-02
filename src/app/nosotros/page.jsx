import React from 'react'
import Image from 'next/image'
import style from './nosotros.module.css'


export default function Nosotros(){
    return(
        <div className={style.nosotros}>
  <div className={style.decoracion_nosotros}>
    <Image id={style.nosotros_patronizquierdo} src="/image/Decoracionazul.svg" alt="decoraciónizquierda" width="200" height="2176" style={{ opacity: 0.3 }} />
  </div>
  <div className={style.centro_nosotros}>
    <h1>Inchiñ tañi mongen</h1>
    <h2>Nuestra Historia</h2>
    <div>
      <div className={style.imgnos}>
        <div className={style.img_section_nosotros}>
          <Image src="/image/celebracion_nosotros.jpg" alt="image-1" className="slider-in" height="250" width="250"/>
        </div>
        <div className={style.img_section_nosotros}>
          <Image src="/image/nosotros_fogon.jpg"  alt="image-2" className="slider-in" height="250" width="250"/>
        </div>
        <div className={style.img_section_nosotros}>
          <Image src="/image/piedra_nosotros.jpg " alt="image-5 " className="slider-in" height="250" width="250"/>
        </div>
      </div>
    </div>
    <p className={style.parrafo_nosotros}>Ruka Weshakellu, que en Mapuzugun significa, la casa donde hay de todo, nace el año 2018 como una empresa familiar dedicada a la gastronomía Mapuche con fusión contemporánea, centro de eventos, productos gourmet y artesanías, emplazada en el corazón
      de la comunidad indígena Cacique Juan Huenchumil, en la zona rural de Freire, a solo 20 minutos del aeropuerto de la Araucanía.
      <br /><br /> Hemos construido en torno a la identidad Mapuche una armonía espacial generando un ambiente familiar, con una inmersión en un entorno rural que permite generar una pausa a la rutina, propicia la internalización positiva de elementos
      de la cultura Mapuche y ofrece al visitante un servicio con mayor valor percibido, al incorporar el uso apropiado de elementos representativos iconográficos, lingüísticos y arquitectónicos que invitan a vivir una experiencia y formarse de
      primera fuente lo que es la cultura Mapuche.
      <br /><br /> Contamos con alianzas de proveedores locales, permitiendo que nuestros productos tengan una base de elaboración orgánica, dinamizando la economía local y apoyando el desarrollo desde el territorio.</p>
    <div className={style.video_nosotros}>
      <iframe width={700} height={400} src="https://www.youtube.com/embed/NRIuseWJZdU" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
    </div>
  </div>
  <div className={style.decoracion_nosotros}>
    <img id={style.nosotros_patronderecho} src="/image/Decoracionazul.svg" alt="decoraciónizquierda" width="200" height="2176" style={{ opacity: 0.3 }} />
  </div>
</div>

    )
}