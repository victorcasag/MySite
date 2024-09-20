import React, { useState } from 'react';
import styles from './Contact.module.scss';

export default function Contact() {
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
                alert('Mensagem enviada com sucesso!');
                setFormData({ name: '', email: '', message: '' });
            } else {
                alert('Falha ao enviar mensagem. Tente novamente.');
            }
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            alert('Erro ao enviar mensagem. Tente novamente.');
        }
    };

    return (
        <section id="Contact" className={styles.contact}>
            <div className={`${styles.contactContent} container`}>
                <h2>Contato</h2>
                <p>Entre em contato comigo para discutir oportunidades de colaboração ou projetos interessantes.</p>
                <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formGroup}>
                        <label htmlFor="name">Nome:</label>
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
                        <label htmlFor="email">Email:</label>
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
                        <label htmlFor="message">Mensagem:</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className={styles.submitButton}>Enviar</button>
                </form>
                <div className={styles.contactButtons}>
                    <a 
                        href="https://wa.me/5548998636629" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className={styles.whatsappButton}
                    >
                        Contato via WhatsApp
                    </a>
                </div>
            </div>
        </section>
    );
}
