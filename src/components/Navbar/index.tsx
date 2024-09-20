import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import { IMenu } from '../../types';
import styles from './Navbar.module.scss';
import { Helmet } from "react-helmet";

export default function Navbar() {
    const [showMobile, setShowMobile] = useState(false);
    const [menus, setMenus] = useState<IMenu[]>([]);

    useEffect(() => {
        import('./menus.json')
            .then(({ default: menus }) => {
                setMenus(menus);
            });
    }, []);

    return (
        <>
            <Helmet>
                <title>Victor Casagrande</title>
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
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item"><Link className="nav-link" to="#About">Sobre</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#Skills">Habilidades</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#Projects">Projetos</Link></li>
                            <li className="nav-item"><Link className="nav-link" to="#Contact">Contato</Link></li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown"
                                    aria-expanded="false">
                                    Idiomas
                                </Link>
                                <ul className={`${styles.dropdownMenu} dropdown-menu`}>
                                    <li><Link className={`${styles.dropdownItem} dropdown-item`} to="/">Português</Link></li>
                                    <li><Link className={`${styles.dropdownItem} dropdown-item`} to="/">Inglês</Link></li>
                                    <li><Link className={`${styles.dropdownItem} dropdown-item`} to="/">Espanhol</Link></li>
                                    <li><Link className={`${styles.dropdownItem} dropdown-item`} to="/">Italiano</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}
