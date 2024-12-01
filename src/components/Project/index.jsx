import styles from "./Project.module.scss";
import { useTranslation } from "react-i18next";

export default function Projects() {
    const { t } = useTranslation();
    return (
        <section id="Projects" className={`${styles.projects} container Projects`}>
            <h1 className={styles.projectsTitle}>{t("Projects.title")}</h1>
            
            <article className={`${styles.project} ${styles.guardianKey}`}>
                <h2 className={styles.projectTitleGuardianKey}>{t("Projects.guardianKey.title")}</h2>
                <div className={styles.projectBody}>
                    <img
                        src={require('../../assets/images/guardianKey.png')}
                        alt="Guardian Key"
                        className={styles.projectImageGuardianKey}
                    />
                    <p className={styles.projectDescriptionGuardianKey}>
                        {t("Projects.guardianKey.description")}
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonSeeProjectGuardianKey}>{t("Projects.guardianKey.button")}</button>
                    <span className={styles.buttonText}>{t("Projects.guardianKey.soon")}</span>
                </div>
            </article>

            <article className={`${styles.project} ${styles.produlink}`}>
                <h2 className={styles.projectTitleProdulink}>{t("Projects.produlink.title")}</h2>
                <div className={styles.projectBody}>
                    <img 
                        src={require('../../assets/images/produlink.webp')}
                        alt="Produlink" 
                        className={styles.projectImage}
                    />
                    <p className={styles.projectDescription}>
                        {t("Projects.produlink.description")}
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonSeeCode}
                        onClick={() => window.open('https://github.com/victorcasag/Produlink', '_blank')}
                        >
                        {t("Projects.produlink.button")}
                    </button>
                </div>
            </article>

            <article className={`${styles.project} ${styles.budgetManagement}`}>
                <h2 className={styles.projectTitleBudgetManagement}>{t("Projects.budgetManagement.title")}</h2>
                <div className={styles.projectBody}>
                    <img 
                        src={require('../../assets/images/logo.webp')}
                        alt="Budget Management" 
                        className={styles.projectImage}
                    />
                    <p className={styles.projectDescription}>
                        {t("Projects.budgetManagement.description")}
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <button className={styles.buttonSeeCode} 
                    onClick={() => window.open('https://github.com/victorcasag/BudgetManagment', '_blank')}>
                        {t("Projects.budgetManagement.button")}
                    </button>
                </div>
            </article>
        </section>
    );
}
