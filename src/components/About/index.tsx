import React from 'react';
import styles from './About.module.scss';
import { useTranslation } from "react-i18next";

export default function About() {
    const { t } = useTranslation();
    return (
        <div id="About" className={`${styles.resume} container`}>
            <h1 className={styles.titleResume}>{t("About.title")}</h1>
            <p className={styles.resumeText}>
               {t("About.content")}
            </p>
        </div>
    );
}
