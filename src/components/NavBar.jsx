import React, { useEffect, useState } from 'react'
import { Link } from 'react-scroll';
import styles from './NavBar.module.css';
import { AiOutlineMenu } from 'react-icons/ai';
import { AiOutlineClose } from 'react-icons/ai';

//=================
import {useScrollPosition} from '../hooks/scrollPosition';

import appFirebase from '../credenciales'
import {getAuth, signOut} from 'firebase/auth'
const auth = getAuth(appFirebase)

const NavBar = ({correoUsuario}) => {
    const[navBarOpen, setNavBarOpen] = useState(false);

    const [windowDimension, setWindowDimension] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const detectDimension = () => {
        setWindowDimension({
            width: window.innerWidth,
            height: window.innerHeight
        });
    };

    useEffect(() =>{
        window.addEventListener('resize', detectDimension)
        windowDimension.width > 800 && setNavBarOpen(false)
        return () =>{
            window.removeEventListener('resize', detectDimension)
        };
    }, [windowDimension]);

    const links = [
        {
            id: 1,
            link: "Inicio",
        },
        {
            id: 2,
            link: "Nosotros",
        },
        {
            id: 3,
            link: "Producto",
        },
    ];

    //===============scroll
    const scrollPosition = useScrollPosition ();

    return( //============
        <div className= {
            navBarOpen
                ? styles.navOpen 
                : scrollPosition > 0
                ? styles.navOnScroll
                : styles.navBar
            }
        >

        {!navBarOpen &&<p className={styles.logo}>LIAJJ | Ecoinnova</p>}
        {!navBarOpen && windowDimension.width < 800 ? (
            <AiOutlineMenu onClick={() => setNavBarOpen(!navBarOpen)} size={25} />
        ) : (windowDimension.width < 800 && (
            <AiOutlineClose onClick={() => setNavBarOpen(!navBarOpen)} size={25} />
        )
            )}

        {navBarOpen || 
        (windowDimension.width > 800 &&(
            <ul className={styles.linksContainer}>
            {links.map((x) => (
                <div>
                    <Link
                    onClick={() => setNavBarOpen(false)}
                    to={x.link}
                    smooth
                    duration={0}
                    className={styles.navLink}
                    >
                        {x.link}
                    </Link>
                    <div className={styles.border}></div>
                </div>
                
            ))}
            <div class="dropdown mt-3">
                <button class="btn btn-success dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
                    Cuenta
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item disabled" href="#">{correoUsuario}</a></li>
                    <li><hr class="dropdown-divider" /></li>
                    <li onClick={() =>signOut(auth)}><a class="dropdown-item" href="#">Cerrar Sesion</a></li>
                </ul>
            </div>
    
        </ul>
        ))}
    </div>
    );
};

export default NavBar