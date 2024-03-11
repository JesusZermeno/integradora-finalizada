import React from 'react'
import styles from './Footer.module.css';
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import logo from '../assets/logo2.png';


function Footer() {
  return (
    <div>
        <footer className={styles.piepagina}>
            <div className={styles.grupo1}>
                <div className={styles.box1}>
                    <figure>
                        <a href="#">
                            <img src={logo}  alt="LOGO" />
                        </a>
                    </figure>
                </div>
                <div className={styles.box1}>
                    <h2>SOBRE NOSOTROS</h2>
                    <p>Somos un grupo de 4 personas que conforman este proyecto <i>"Integradora"</i> </p>
                    <p>Y este proyecto se basa en cómo sería un ambiente laboral ya profesional, con el fin de que nos podamos comunicar de una manera amable y concisa.</p>
                </div>
                <div className={styles.box1}>
                    <h2>SIGUENOS</h2>
                    <div className={styles.redsocial}>
                        <a href="https://www.Facebook.com"><FaFacebook /></a>
                        <a href="https://www.Instagram.com"><FaInstagramSquare /></a>
                        <a href="https://www.Twitter.com"><FaTwitterSquare /></a>
                        <a href="https://www.Youtube.com"><FaYoutube /></a>
                    </div>
                </div>
            </div>
            <div class={styles.grupo2}>
                <small>&copy; 2024 <b>Tinaco LIAJJ</b> - Todos los Derechos Reservados. </small>
            </div>
        </footer>
    </div>
  )
}

export default Footer