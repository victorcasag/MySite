import { useState } from 'react';
import styles from './Contact.module.scss';
import { useTranslation } from "react-i18next";

export default function Contact() {
    const { t } = useTranslation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('https://formspree.io/f/mvgpjzqa', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }),
            });
    
            if (response.ok) {
                alert(t("Contact.form.success"));
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert(t("Contact.form.error"));
            }
        } catch (error) {
            console.error(t("Contact.form.error"));
            alert(t("Contact.form.error"));
        }
    };

    return (
        <section id="Contact" className={styles.contact}>
            <div className={`${styles.contactContent} container`}>
                <h2>{t("Contact.title")}</h2>
                <p>{t("Contact.description")}</p>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">{t("Contact.form.name")}</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="email">{t("Contact.form.email")}</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className={styles.formGroup}>
                        <label htmlFor="message">{t("Contact.form.message")}</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>{t("Contact.form.submit")}</button>
                </form>
                <div className={styles.contactButtons}>
                    <a 
                        href="https://wa.me/5548998636629" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.whatsappButton}
                    >
                        {t("Contact.form.whatsapp")}
                    </a>
                </div>
            </div>
        </section>
    );
}
