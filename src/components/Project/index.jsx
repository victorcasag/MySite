import React from "react";
import styles from "./Project.module.scss";

export default function Projects() {
    return (
        <section id="Projects" className={`${styles.projects} container Projects`}>
            <h1 className={styles.projectsTitle}>Projetos</h1>
            
            <article className={`${styles.project} ${styles.guardianKey}`}>
                <h2 className={styles.projectTitleGuardianKey}>Guardian Key</h2>
                <div className={styles.projectBody}>
                    <img
                        src={require('../../assets/images/guardianKey.png')}
                        alt="Guardian Key"
                        className={styles.projectImageGuardianKey}
                    />
                    <p className={styles.projectDescriptionGuardianKey}>
                        Este projeto é um aplicativo Android desenvolvido como trabalho final de TCC.
                        O objetivo do aplicativo é aumentar a segurança no acesso aos aplicativos de internet banking
                        por meio de autenticação baseada em token SMS. Após o login ou registro, o usuário deve selecionar
                        aplicativos de banco que, quando acessados, exigirão a resposta a uma pergunta secreta enviada por SMS.
                        A resposta correta libera o acesso ao aplicativo de banco por um tempo limitado. Em caso de resposta incorreta,
                        a localização exata do dispositivo é enviada por email ao usuário, proporcionando uma camada adicional
                        de segurança.
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonSeeProjectGuardianKey}>Ver projeto</button>
                </div>
            </article>

            <article className={`${styles.project} ${styles.produlink}`}>
                <h2 className={styles.projectTitleProdulink}>Produlink</h2>
                <div className={styles.projectBody}>
                    <img 
                        src={require('../../assets/images/produlink.webp')}
                        alt="Produlink" 
                        className={styles.projectImage}
                    />
                    <p className={styles.projectDescription}>
                    Este projeto é um sistema ERP desenvolvido para pequenos varejistas projetado para simplificar e aprimorar operações como gestão de produtos clientes e 
                    fornecedores além de auxiliar no processo de vendas O repositório contém o código-fonte do projeto principal Produlink e sua integração com a API RESTful 
                    Produlink-API para requisições ao banco de dados Recursos principais incluem cadastro de produtos permitindo adicionar informações detalhadas sobre produtos 
                    gestão de clientes com registro de informações como nome endereço e histórico de compras gestão de fornecedores com informações de contato e termos de pagamento 
                    e processo de vendas facilitando a criação de pedidos controle de estoque e geração de relatórios Tecnologias utilizadas incluem Front-end em Java Swing Back-end 
                    em Java com integração à Produlink-API uso de Docker como container e PostgreSQL como banco de dados Este projeto é ideal para desenvolvedores interessados em construir 
                    um sistema ERP personalizado para pequenos varejistas oferecendo a oportunidade de aprimorar habilidades de desenvolvimento de software trabalhar com tecnologias modernas 
                    e colaborar em um projeto de código aberto.
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonSeeCode}>Ver repositório</button>
                </div>
            </article>

            <article className={`${styles.project} ${styles.budgetManagement}`}>
                <h2 className={styles.projectTitleBudgetManagement}>Budget Management</h2>
                <div className={styles.projectBody}>
                    <img 
                        src={require('../../assets/images/logo.webp')}
                        alt="Budget Management" 
                        className={styles.projectImage}
                    />
                    <p className={styles.projectDescription}>
                    Este aplicativo em VB.NET (.NET 4.8) facilita a criação e gestão de orçamentos empresariais, os usuários podem criar orçamentos detalhados incluindo produtos, valores e dados de empresas específicos com os dados 
                    armazenados em um banco de dados SQL postgres. Ao finalizar o orçamento o sistema gera automaticamente um arquivo Excel com todos os detalhes e o envia diretamente para a impressora selecionada 
                    agilizando a entrega física.
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonSeeCode}>Ver repositório</button>
                </div>
            </article>
        </section>
    );
}
