import Image from 'next/image'
import Link from 'next/link'
import style from './page.module.css'
/* estamos trabajando en la fuente, asi que por el momento da error */
import H1 from './components/material/H1'

export default function Home() {
  return (
    <main className={style.main}>
      <section className={style.container_nosotros}>
        <div className={style.img_nosotros}>
          <Image src="/image/doña_elba_y_cinta.png" alt="imagen-nosotros" height="654" width="583"/>
          <div className={style.parrafo_nosotros}>
            <H1>INCHIÑ TAÑI MONGEN</H1> 
           
            

            <h2>NUESTRA HISTORIA</h2>
            <p>Somos Ruka Weshakellu, que en Mapuzungun significa, “la casa donde hay de todo”. Nacimos como una empresa familiar dedicada a la gastronomía Mapuche con fusión contemporánea</p>
            <Link href="/nosotros"><h3 className={style.saber_mas}>Saber más</h3></Link>
          </div>   
        </div>
      </section>

      <section className={style.contacto}>

  <div>
    <Image className={style.decoracion1contacto} src="/image/decoracion.png" alt="Simbolo 1" width="200" height="1137" style={{ opacity: 0.3 }}/>
  </div>
  <div className={style.columna_contacto}>
    <div id={style.columnaarriba}>
      <div className={style.imagen_contacto}>
        <Image id={style.simboloarana} src="/image/simboloarana.png" alt="Simbolo Araña" width="150" height="186"/>
      </div>
      <div className={style.titulos_contacto}>
        <h1>Contacto</h1>
      </div>
    </div>
    <div className={style.datoscliente_ubicacion}>
      <div id={style.datoscliente}>
        <h1>¿Tienes alguna duda o consulta?</h1>
        <h3>Teléfono :+56956061841</h3>
        <h3>Correo : rukaweshakellu@gmail.com</h3>
        <h3>Instagram:
          <Link href="https://www.instagram.com/ruka.weshakellu/?hl=es" alt="Instagram" target="_blank"> @ruka.weshakellu</Link>
        </h3>
        <h3>Facebook:
          <Link href="https://web.facebook.com/profile.php?id=100057548330284" alt="Facebook" target="_blank"> Ruka Weshakellu</Link>
        </h3>
        <h1>Ubicación</h1>
        <h3><Link href="https://www.google.com/maps/place/Ruka+Weshakellu/@-38.9952147,-72.4708634,17z/data=!3m1!4b1!4m6!3m5!1s0x9614e90caec397b5:0x2925957e94050d22!8m2!3d-38.9952147!4d-72.4682885!16s%2Fg%2F11h0ldmmn1?hl=es&entry=ttu" alt="Google Maps" target="_blank">Allipen Km 13, Freire, Chile</Link></h3>
      </div>
      <div id={style.mapa_contacto}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3100.880891319178!2d-72.47086342462585!3d-38.995214671703295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614e90caec397b5%3A0x2925957e94050d22!2sRuka%20Weshakellu!5e0!3m2!1ses!2scl!4v1686781870263!5m2!1ses!2scl" width="500vh" height="350vh" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
    </div>
  </div>
  <div>
    <Image className={style.decoracion2contacto} src="/image/decoracion.png" alt="Simbolo 2" width="200" height="1137" style={{ opacity: 0.3 }}/>
  </div>
</section>


    </main>
  )
}
