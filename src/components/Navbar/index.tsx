import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useState } from "react";
import styles from './Navbar.module.scss';
import { Helmet } from "react-helmet";
import { useTranslation } from 'react-i18next';

export default function Navbar() {
    const { t } = useTranslation();
    const { i18n } = useTranslation();

    console.log(i18n); // Verifique o que está exposto aqui

    const changeLanguage = (lang: string) => {
        if (i18n.changeLanguage) {
            i18n.changeLanguage(lang);
        } else {
            console.error("i18n.changeLanguage is not available.");
        }
    };
    const [showMobile, setShowMobile] = useState(false);
    return (
        <>
            <Helmet>
                <title>Victor Casagrande</title>
                <meta name="description" content="Victor Casagrande's Portfolio" />
            </Helmet>
            <nav className={classNames("navbar navbar-expand-lg", styles.navbar)}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded={showMobile} aria-label="Toggle navigation"
                        onClick={() => setShowMobile(!showMobile)}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${showMobile ? 'show' : ''}`} id="navbarNav">
                        <ul className={`navbar-nav ms-auto mb-2 mb-lg-0 ${styles.navLinks}`}>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">{t("Navbar.home")}</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="#About">{t("Navbar.about")}</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#Skills">{t("Navbar.skills")}</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#Projects">{t("Navbar.projects")}</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#Contact">{t("Navbar.contact")}</Link></li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    {t("Navbar.languages")}
                                </Link>
                                <ul className={`${styles.dropdownMenu} dropdown-menu`}>
                                    <li>
                                        <button className={`${styles.dropdownItem} dropdown-item`} onClick={() => changeLanguage('pt')}>
                                            {t("Navbar.portuguese")}
                                        </button>
                                    </li>
                                    <li>
                                        <button className={`${styles.dropdownItem} dropdown-item`} onClick={() => changeLanguage('en')}>
                                            {t("Navbar.english")}
                                        </button>
                                    </li>
                                    <li>
                                        <button className={`${styles.dropdownItem} dropdown-item`} onClick={() => changeLanguage('es')}>
                                            {t("Navbar.spanish")}
                                        </button>
                                    </li>
                                    <li>
                                        <button className={`${styles.dropdownItem} dropdown-item`} onClick={() => changeLanguage('it')}>
                                            {t("Navbar.italian")}
                                        </button>
                                    </li>
                                </ul>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
