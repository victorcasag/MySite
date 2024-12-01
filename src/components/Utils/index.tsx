import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function ScrollToTop() {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            let elem = document.getElementById(hash.replace('#', ''));
            if (elem) {
                elem.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        }
    }, [hash]); // Executa o efeito sempre que o hash mudar

    return null;
}

export default ScrollToTop;
