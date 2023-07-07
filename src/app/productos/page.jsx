import React from 'react'
import style from './productos.module.css'
import Image from 'next/image'

export default function Productos() {
  return (
    
    <main className={style.contenedor}>
        <div className={style.banner}> {/* Aplica los estilos CSS si los tienes */}
          <h1>Nuestros productos</h1>
          <p>Descubre nuestras productos hecho a mano</p>
        </div>
        <h1 className={style.titulo_destacados}>Productos destacados</h1>
        <hr className='linea_division'/>
        <section className={style.container_artesanias}>
          <h2 className={style.titulo_artesanias}>Artesanias</h2>    
          <div className={style.container_cards}>
            <div className={style.card}>
                <Image className={style.img_card} src="/image/joyaMapuche.jpg"alt="foto de joyaMapuche" width={300} height={300}></Image>
              <div className={style.card_text}>
                <h2>MERMELADA DE DURAZNO</h2>
                <p>Pharetra sed sed ultricies nibh habitasse a malesuada fames fringilla. Mollis natoque vitae purus in purus quis velit </p>
              </div>
            </div>
            <div className={style.card}>
              <Image className={style.img_card} src="/image/joyaMapuche.jpg"alt="foto de joyaMapuche" width={300} height={300}></Image>
              <div className={style.card_text}>
                <h2>MERMELADA DE DURAZNO</h2>
                <p>Pharetra sed sed ultricies nibh habitasse a malesuada fames fringilla. Mollis natoque vitae purus in purus quis velit </p>
              </div>
            </div>
            <div className={style.card}>
              <Image className={style.img_card} src="/image/joyaMapuche.jpg"alt="foto de joyaMapuche" width={300} height={300}></Image>
              <div className={style.card_text}>
                <h2>MERMELADA DE DURAZNO</h2>
                <p>Pharetra sed sed ultricies nibh habitasse a malesuada fames fringilla. Mollis natoque vitae purus in purus quis velit </p>
              </div>
            </div>
            <div className={style.card}>
              <Image className={style.img_card} src="/image/joyaMapuche.jpg"alt="foto de joyaMapuche" width={300} height={300}></Image>
              <div className={style.card_text}>
                <h2>MERMELADA DE DURAZNO</h2>
                <p>Pharetra sed sed ultricies nibh habitasse a malesuada fames fringilla. Mollis natoque vitae purus in purus quis velit </p>
              </div>
            </div>
            <div className={style.card}>
              <Image className={style.img_card} src="/image/joyaMapuche.jpg"alt="foto de joyaMapuche" width={300} height={300}></Image>
              <div className={style.card_text}>
                <h2>MERMELADA DE DURAZNO</h2>
                <p>Pharetra sed sed ultricies nibh habitasse a malesuada fames fringilla. Mollis natoque vitae purus in purus quis velit </p>
              </div>
            </div>
            <div className={style.card}>
              <Image className={style.img_card} src="/image/joyaMapuche.jpg"alt="foto de joyaMapuche" width={300} height={300}></Image>
              <div className={style.card_text}>
                <h2>MERMELADA DE DURAZNO</h2>
                <p>Pharetra sed sed ultricies nibh habitasse a malesuada fames fringilla. Mollis natoque vitae purus in purus quis velit </p>
              </div>
            </div>
          </div>
        </section>
      </main>
  )
}
