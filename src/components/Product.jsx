import React from 'react'
import styles from './Product.module.css';
import logo from '../assets/logo2.png';

function Product() {
  return (
    <div name="Producto">
      <section className={styles.section}>
          <h2>PRODUCTO</h2>
          <div className={styles.img}>
            <img src={logo} alt='producto'></img>
          </div>
          <div className={styles.cr}>
            <h2>Características</h2>
          </div>
          <div className={styles.box}>
            <div className={styles.box2}>
            <h3>TINACP LIAJJ, El tinaco ecológico.</h3>
              <p>Material: Polietileno de alta densidad (PEAD)<br />Capacidad: 1000 litros.<br /> Dimensiones: 120 cm de diámetro x 200 cm de altura.<br /> Tapa abatible con sistema de sellado hermético</p>
            
              <h3>Beneficios</h3>
              <p>Ahorro de agua: Recolección de agua de lluvia para<br /> su uso posterior. <br />Seguridad: Elimina la necesidad de subir a los techos. <br />Ecología: Reduce el consumo de agua potable<br /> de la red pública. <br />Economía: Ahorro en la factura del agua.</p>
            
            
            
            </div>
            <div className={styles.box2}>
            <h3>Aplicación para controlar el tinaco:</h3>
              <p>Abrir y cerrar la tapa. <br />Monitorizar el nivel de agua. <br />Recibir notificaciones sobre el estado del agua</p>
           
            
            <h3>Conclusiones</h3>
              <p>El proyecto TINACO LIAJJ tiene un gran potencial<br /> para mejorar <br />la calidad de vida de las personas y contribuir a <br />la preservación del medio ambiente. Se espera que <br />el proyecto <br />sea un éxito y que se pueda implementar a<br /> gran escala en el futuro.</p>
            
            
            </div>
          </div>
        </section>
    </div>
  )
}

export default Product