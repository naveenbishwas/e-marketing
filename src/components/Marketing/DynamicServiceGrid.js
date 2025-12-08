'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './DynamicServiceGrid.module.css';

const services = [
    {
        id: 'web',
        label: 'WEB',
        color: '#23234d',
        content: {
            title: "Web Development",
            col1: {
                title: "Core Services",
                items: ["Custom Next.js Sites", "Shopify Headless", "WebGL Experiences", "Technical SEO"]
            },
            col2: {
                title: "Capabilities",
                items: ["Full Stack Development", "Site Speed Optimization", "Platform Migrations", "API Integrations"]
            }
        }
    },
    {
        id: 'creative',
        label: 'CREATIVE',
        color: '#23234d',
        content: {
            title: "Creative Strategy",
            col1: {
                title: "Design",
                items: ["Brand Identity", "UI/UX Design", "Design Systems", "Packaging Design"]
            },
            col2: {
                title: "Content",
                items: ["Motion Graphics", "3D Animation", "Video Production", "Art Direction"]
            }
        }
    },
    {
        id: 'paid',
        label: 'PAID MEDIA',
        color: '#23234d',
        content: {
            title: "Paid Media",
            col1: {
                title: "Channels",
                items: ["Meta (FB/IG) Ads", "Google Search & Shopping", "TikTok Ads", "LinkedIn B2B"]
            },
            col2: {
                title: "Strategy",
                items: ["Audience Segmentation", "Creative Testing", "Conversion API Setup", "Retargeting Funnels"]
            }
        }
    },
    {
        id: 'retention',
        label: 'RETENTION',
        color: '#23234d',
        content: {
            title: "Retention Marketing",
            col1: {
                title: "Email & SMS",
                items: ["Klaviyo Automation", "SMS Bump Campaigns", "Lifecycle Flows", "List Growth"]
            },
            col2: {
                title: "Loyalty",
                items: ["Loyalty Programs", "Subscription Modeling", "Churn Prevention", "Customer Segmentation"]
            }
        }
    }
];

const DynamicServiceGrid = () => {
    const [activeId, setActiveId] = useState('web');

    const activeService = services.find(s => s.id === activeId);

    return (
        <section className={styles.section}>
            {/* Left Column: Static Grid with Local Flips */}
            <div className={styles.leftColumn}>
                <div className={styles.gridContainer}>
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`${styles.cardContainer} ${activeId === service.id ? styles.active : ''}`}
                            onClick={() => setActiveId(service.id)}
                        >
                            <div className={styles.cardInner}>
                                {/* Front: Outline (Inactive) */}
                                <div className={styles.cardFront}>
                                    <div className={styles.svgContainer}>
                                        <svg
                                            viewBox="0 0 250 250"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ width: '100%', height: '100%' }}
                                        >
                                            <path
                                                d="M25 250 V125 C25 69.77 69.77 25 125 25 C180.23 25 225 69.77 225 125 V250 H25 Z"
                                                stroke="white"
                                                strokeWidth="2"
                                            />
                                        </svg>
                                    </div>
                                    <span className={styles.label}>{service.label}</span>
                                </div>

                                {/* Back: Solid Fill (Active) */}
                                <div className={styles.cardBack}>
                                    <div className={styles.svgContainer}>
                                        <svg
                                            viewBox="0 0 250 250"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            style={{ width: '100%', height: '100%' }}
                                        >
                                            <path
                                                d="M25 250 V125 C25 69.77 69.77 25 125 25 C180.23 25 225 69.77 225 125 V250 H25 Z"
                                                fill={service.color}
                                            />
                                        </svg>
                                    </div>
                                    <span className={styles.label}>{service.label}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Right Column: Content */}
            <div className={styles.rightColumn}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService.id}
                        className={styles.contentWrapper}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                    >
                        <h2 className={styles.contentTitle}>{activeService.content.title}</h2>

                        <div className={styles.columnsContainer}>
                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>{activeService.content.col1.title}</h4>
                                <ul className={styles.contentList}>
                                    {activeService.content.col1.items.map((item, index) => (
                                        <li key={index} className={styles.contentItem} style={{ '--accent-color': activeService.color }}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className={styles.column}>
                                <h4 className={styles.columnTitle}>{activeService.content.col2.title}</h4>
                                <ul className={styles.contentList}>
                                    {activeService.content.col2.items.map((item, index) => (
                                        <li key={index} className={styles.contentItem} style={{ '--accent-color': activeService.color }}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default DynamicServiceGrid;
