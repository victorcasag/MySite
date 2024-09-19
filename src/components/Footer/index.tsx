import styles from "./Footer.module.scss";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`${styles.footerContent} container`}>
                <div className={styles.footerLeft}>
                    <p>&copy; 2023 Victor Casagrande</p>
                </div>
                <div className={styles.footerRight}>
                    <nav>
                        <a href="/">Home</a>
                        <a href="#About">Sobre</a>
                        <a href="#Skills">Habilidades</a>
                        <a href="#Projects">Projetos</a>
                        <a href="#Contact">Contato</a>
                    </nav>
                    <div className={styles.socialIcons}>
                        <a href="https://www.facebook.com/victorb1ghouse/" aria-label="Facebook">
                            <i className={`fab fa-facebook ${styles.icon}`}></i>
                        </a>
                        <a href="https://www.linkedin.com/in/victor-farias-casagrande/" aria-label="LinkedIn">
                            <i className={`fab fa-linkedin ${styles.icon}`}></i>
                        </a>
                        <a href="https://www.instagram.com/victorcasag" aria-label="Instagram">
                            <i className={`fab fa-instagram ${styles.icon}`}></i>
                        </a>
                        <a href="mailto:victorcasag@hotmail.com" aria-label="Email">
                            <i className={`fas fa-envelope ${styles.icon}`}></i>
                        </a>
                        <a href="https://wa.me/5548998636629" aria-label="WhatsApp">
                            <i className={`fab fa-whatsapp ${styles.icon}`}></i>
                        </a>
                        <a href="https://github.com/victorcasag" aria-label="GitHub">
                            <i className={`fab fa-github ${styles.icon}`}></i>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}