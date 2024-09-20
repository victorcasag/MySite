import React from 'react';
import styles from './About.module.scss';

export default function About() {
    return (
        <div id="About" className={`${styles.resume} container`}>
            <h1 className={styles.titleResume}>Um Breve Resumo</h1>
            <p className={styles.resumeText}>
                Sou formado em Ciências da Computação e atualmente estou cursando uma
                pós-graduação em Desenvolvimento Fullstack para Cloud na UNESC. Durante três anos na Torrecid do Brasil, trabalhei em DevOps,
                otimizando processos e garantindo a eficiência de redes e servidores em todas as filiais das Américas. Participei do
                desenvolvimento de software, liderando projetos desde a concepção até a implementação, utilizando tecnologias como Visual
                Basic.Net, PL/SQL, C# e GIT. Também adquiri conhecimentos em Progress e na documentação de programas no Angeloni, aprimorando
                minha capacidade de criar soluções robustas e bem documentadas.
            </p>
        </div>
    );
}
