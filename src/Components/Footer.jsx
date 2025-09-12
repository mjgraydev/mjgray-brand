import styles from '../Components/Footer.module.css';
import Logo from '../Assets/Final MG White.png';

function Footer () {
    return (
        <>

        <div className={styles.footer} >
        
            <img className={styles.logo} src={Logo} alt="Michael Gray Logo" />

            <p className={styles.copyright} >Michael Gray © 2025 All Rights Reserved</p>

            <p className={styles.credit} >Design & Developed by Michael Gray</p>

        </div>

        </>
    )
}

export default Footer;