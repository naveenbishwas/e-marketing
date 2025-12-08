'use client';
import { useState } from 'react';
import styles from './LeadForm.module.css';

const LeadForm = () => {
    const [focused, setFocused] = useState({});

    const handleFocus = (name) => {
        setFocused(prev => ({ ...prev, [name]: true }));
    };

    const handleBlur = (name, value) => {
        if (!value) {
            setFocused(prev => ({ ...prev, [name]: false }));
        }
    };

    return (
        <section className={styles.leadForm} id="contact">
            <div className={styles.container}>
                <div className={styles.content}>
                    <h2 className={styles.heading}>Ready to scale?</h2>
                    <p className={styles.subheading}>Book a free strategy call with our experts. We'll analyze your current setup and propose a custom growth plan.</p>
                    <div className={styles.contactInfo}>
                        <div className={styles.infoItem}>
                            <span>📞</span> +1 (555) 123-4567
                        </div>
                        <div className={styles.infoItem}>
                            <span>✉️</span> hello@agency.com
                        </div>
                    </div>
                </div>

                <form className={styles.form}>
                    <div className={styles.row}>
                        <div className={`${styles.inputGroup} ${focused.name ? styles.active : ''}`}>
                            <label htmlFor="name">Full Name</label>
                            <input
                                type="text"
                                id="name"
                                onFocus={() => handleFocus('name')}
                                onBlur={(e) => handleBlur('name', e.target.value)}
                            />
                        </div>

                        <div className={`${styles.inputGroup} ${focused.company ? styles.active : ''}`}>
                            <label htmlFor="company">Company Name</label>
                            <input
                                type="text"
                                id="company"
                                onFocus={() => handleFocus('company')}
                                onBlur={(e) => handleBlur('company', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={`${styles.inputGroup} ${focused.email ? styles.active : ''}`}>
                            <label htmlFor="email">Work Email</label>
                            <input
                                type="email"
                                id="email"
                                onFocus={() => handleFocus('email')}
                                onBlur={(e) => handleBlur('email', e.target.value)}
                            />
                        </div>

                        <div className={`${styles.inputGroup} ${focused.phone ? styles.active : ''}`}>
                            <label htmlFor="phone">Phone Number</label>
                            <input
                                type="tel"
                                id="phone"
                                onFocus={() => handleFocus('phone')}
                                onBlur={(e) => handleBlur('phone', e.target.value)}
                            />
                        </div>
                    </div>

                    <div className={styles.row}>
                        <div className={`${styles.inputGroup} ${focused.service ? styles.active : ''}`}>
                            <label htmlFor="service">Service Interest</label>
                            <select
                                id="service"
                                onFocus={() => handleFocus('service')}
                                onBlur={(e) => handleBlur('service', e.target.value)}
                            >
                                <option value=""></option>
                                <option value="seo">SEO</option>
                                <option value="ppc">PPC</option>
                                <option value="content">Content</option>
                                <option value="full">Full Suite</option>
                            </select>
                        </div>

                        <div className={`${styles.inputGroup} ${focused.budget ? styles.active : ''}`}>
                            <label htmlFor="budget">Monthly Budget</label>
                            <select
                                id="budget"
                                onFocus={() => handleFocus('budget')}
                                onBlur={(e) => handleBlur('budget', e.target.value)}
                            >
                                <option value=""></option>
                                <option value="small">$2k - $5k</option>
                                <option value="medium">$5k - $10k</option>
                                <option value="large">$10k+</option>
                            </select>
                        </div>
                    </div>

                    <div className={`${styles.inputGroup} ${styles.textarea} ${focused.message ? styles.active : ''}`}>
                        <label htmlFor="message">Tell us about your goals</label>
                        <textarea
                            id="message"
                            onFocus={() => handleFocus('message')}
                            onBlur={(e) => handleBlur('message', e.target.value)}
                        ></textarea>
                    </div>

                    <button type="submit" className={styles.button}>
                        Get Your Free Plan
                    </button>
                </form>
            </div>
        </section>
    );
};

export default LeadForm;
