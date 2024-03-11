import React from 'react'
import styles from './About.module.css';
import empresa from '../assets/empresa.png';
import { FaEye } from "react-icons/fa";
import { FaBullseye } from "react-icons/fa";

function About() {
  return (
    <div name="Nosotros">
      <section className={styles.section}>
          <h2>NOSOTROS</h2>
          <div className={styles.img}>
            <img  src={empresa} alt='empresa'></img>
          </div>
          <div className={styles.article}>
            <p>Nuestra empresa esta relacionada con cuidar el medio ambiente y poder dejar de contaminar mas el medio ambiente. La idea surgió por que últimamente nos estamos viendo afectados con el agua, eso podría ayudar a muchas familias.</p>
          </div>
        </section>

        
        <section className={styles.section}>

          <div className={styles.container2}>
            <div className={styles.box}>
              <div className={styles.icon}>
                <FaEye className={styles.fa}/>
              </div>
              <div className={styles.content}>
                <h2>VISIÓN</h2>
                <p>Ser reconocido a nivel mundial como la empresa líder en innovación, vanguardia y creatividad, inspirando y transformando la industria de la ecología a través de soluciones que redefinen los límites de lo posible.</p>
              </div>
            </div>
            <div className={styles.box}>
              <div className={styles.icon}>
                <FaBullseye className={styles.fa} />
              </div>
              <div className={styles.content}>
                <h2>MISIÓN</h2>
                <p>Nuestra misión es impulsar a todas las personas a cuidar el medio ambiente aparte de cuidar a nuestras familias. Teniendo en cuenta que nuestro producto puede recolectar agua de lluvia y mantener agua de la llave/lluvia limpia con nuestro filtrador y checando PH desde la aplicación.</p>
              </div>
            </div>
            
          </div>

        </section >
        
        
    </div>
  )
}

export default About