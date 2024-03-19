import React from 'react'
import styles from './Home.module.css';
import tinaco from '../assets/tinaco.png';
import NavBar from '../components/NavBar'
import About from '../components/About';
import Product from "../components/Product";
import Footer from "../components/Footer";


function Home({correoUsuario}) {

  return (
    <div name="Inicio">
        <NavBar  correoUsuario={correoUsuario}></NavBar>
        <section className={styles.sectionFondo}>
          <div className={styles.box}>
            <div className={styles.box2}>
              <h1>Sella la esperanza, abre el agua! Juntos,recaudamos vida con cada gota.</h1>
            </div>
            <div className={styles.box2}>
              <img src={tinaco} alt='tinaco'></img>
            </div>
          </div>
        </section>

        <section className={styles.section}>
        {/*<h2 className='text-center'>Bienvenido {correoUsuario} <br/> </h2>*/}
          <h2>¿Quieres un tinaco nuevo y eficaz?</h2>
          <div className={styles.article}>
            <p>Entonces estas en el lugar correcto. Nosotros tenemos lo que necesitas, si quieres un tinaco que recolecte agua en tiempo de lluvia esta es tu mejor  opción, aparte de que puedes abrir y cerrar la tapa para mejor facilidad.</p>
          </div>
        </section>

        <section className={styles.section}>
          <h2>¿Estas pensando en lavar tu tinaco?</h2>
          <div className={styles.article}>
            <p>Con TINACO LIAJJ ya no es necesario esto ya que cuenta con un filtrador de agua, eso significa que tu agua estará limpia y podrás checar el PH desde nuestra aplicación así como cerrar y abrir la tapa.</p>
          </div>
          </section >
          <section className={styles.section}>
          <h2>¿Crees que puede ser mejor?</h2>
          <div className={styles.article}>
            <p>Claro que puede ser mejor, aparte de eso, ya no tendrás que luchar contra los mosquitos; podrás tener tu hogar seguro y  libre de enfermedades.</p>
          </div>
          </section>
          <About></About>
          <Product></Product>
          <Footer></Footer>
    </div>

    
  )
}

export default Home
