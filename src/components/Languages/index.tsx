import styles from "./Languages.module.scss";
import { useTranslation } from "react-i18next";

export default function Languages() {
    const { t } = useTranslation();
    return (
        <article className={styles.languageItem}>
            <div className={styles.languagesBody}>
                <h1 className={styles.languagesTitle}>{t("Languages.title")}</h1> 
                
                <div className={styles.language}>
                    <img src={require('../../assets/flags/brazil.png')} alt="Bandeira do Brasil" className={styles.flagIcon} />
                    <h3 className={styles.languageTitle}>{t("Languages.nativePortuguese.title")}</h3>
                    <div className={styles.progressBar}>
                        <div className={`${styles.progress} ${styles.native}`} />
                    </div>
                </div>

                <div className={styles.language}>
                    <img src={require('../../assets/flags/usa.png')} alt="Bandeira dos EUA" className={styles.flagIcon} />
                    <h3 className={styles.languageTitle}>{t("Languages.fluentEnglish.title")}</h3>
                    <div className={styles.progressBar}>
                        <div className={`${styles.progress} ${styles.fluent}`} />
                    </div>
                </div>
                <div className={styles.language}>
                    <img src={require('../../assets/flags/spain.png')} alt="Bandeira da Espanha" className={styles.flagIcon} />
                    <h3 className={styles.languageTitle}>{t("Languages.advancedSpanish.title")}</h3>
                    <div className={styles.progressBar}>
                        <div className={`${styles.progress} ${styles.advanced}`} />
                    </div>
                </div>
                <div className={styles.language}>
                    <img src={require('../../assets/flags/italy.png')} alt="Bandeira da Itália" className={styles.flagIcon} />
                    <h3 className={styles.languageTitle}>{t("Languages.basicItalian.title")}</h3>
                    <div className={styles.progressBar}>
                        <div className={`${styles.progress} ${styles.basic}`} />
                    </div>
                </div>

            </div>
        </article>
    );
}
