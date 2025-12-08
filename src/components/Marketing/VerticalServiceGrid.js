'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './VerticalServiceGrid.module.css';

const services = [
    {
        id: 'web',
        label: 'WEB',
        color: '#3b82f6',
        position: { x: 0, y: 0 },
        content: {
            title: "Web Development",
            groups: [
                {
                    title: "UI/UX DESIGN",
                    items: ["Websites", "Landing Pages", "Ecom Strategy", "Copywriting", "Design Systems"]
                },
                {
                    title: "DEVELOPMENT",
                    items: ["Full Stack Development", "Site Speed Optimization", "Platform Migrations", "App Integrations", "QA and Stress-Testing"]
                }
            ]
        }
    },
    {
        id: 'creative',
        label: 'CREATIVE',
        color: '#a855f7',
        position: { x: '-50%', y: 0 },
        content: {
            title: "Creative Strategy",
            groups: [
                {
                    title: "BRANDING",
                    items: ["Brand Identity", "Visual Strategy", "Brand Guidelines", "Logo Design", "Typography Systems"]
                },
                {
                    title: "CONTENT PRODUCTION",
                    items: ["Motion Graphics", "3D Animation", "Video Production", "Photography", "Social Assets"]
                }
            ]
        }
    },
    {
        id: 'paid',
        label: 'PAID MEDIA',
        color: '#f97316',
        position: { x: 0, y: '-50%' },
        content: {
            title: "Paid Media",
            groups: [
                {
                    title: "CHANNELS",
                    items: ["Meta (FB/IG) Ads", "Google Search & Shopping", "TikTok Ads", "LinkedIn B2B", "YouTube Ads"]
                },
                {
                    title: "STRATEGY",
                    items: ["Audience Segmentation", "Creative Testing", "Conversion API Setup", "Retargeting Funnels", "ROAS Optimization"]
                }
            ]
        }
    },
    {
        id: 'retention',
        label: 'RETENTION',
        color: '#ec4899',
        position: { x: '-50%', y: '-50%' },
        content: {
            title: "Retention Marketing",
            groups: [
                {
                    title: "EMAIL & SMS",
                    items: ["Klaviyo Automation", "SMS Bump Campaigns", "Lifecycle Flows", "List Growth", "Template Design"]
                },
                {
                    title: "LOYALTY & GROWTH",
                    items: ["Loyalty Programs", "Subscription Modeling", "Churn Prevention", "Customer Segmentation", "LTV Optimization"]
                }
            ]
        }
    }
];

const VerticalServiceGrid = () => {
    const [activeId, setActiveId] = useState('web');

    const activeService = services.find(s => s.id === activeId);

    return (
        <section className={styles.section}>
            {/* Left Column: Shifting Grid */}
            <div className={styles.leftColumn}>
                <div className={styles.gridWindow}>
                    <motion.div
                        className={styles.gridContainer}
                        animate={{
                            x: activeService.position.x,
                            y: activeService.position.y
                        }}
                        transition={{
                            duration: 1.2,
                            ease: [0.16, 1, 0.3, 1] // Custom ease for smooth, heavy feel
                        }}
                    >
                        {services.map((service) => (
                            <div
                                key={service.id}
                                className={`${styles.cardContainer} ${activeId === service.id ? styles.active : ''}`}
                                onClick={() => setActiveId(service.id)}
                            >
                                <div className={styles.svgContainer}>
                                    <svg
                                        viewBox="0 0 250 250"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ width: '100%', height: '100%' }}
                                    >
                                        {/* Outline Path */}
                                        <path
                                            d="M25 250 V125 C25 69.77 69.77 25 125 25 C180.23 25 225 69.77 225 125 V250 H25 Z"
                                            stroke="white"
                                            strokeWidth="2"
                                        />

                                        {/* Animated Fill */}
                                        <motion.path
                                            d="M25 250 V125 C25 69.77 69.77 25 125 25 C180.23 25 225 69.77 225 125 V250 H25 Z"
                                            fill={service.color}
                                            initial={{ scale: 0, opacity: 0 }}
                                            animate={{
                                                scale: activeId === service.id ? 1.05 : 0,
                                                opacity: activeId === service.id ? 1 : 0
                                            }}
                                            transition={{ duration: 0.6, ease: "circOut" }}
                                            style={{ transformOrigin: 'center bottom' }}
                                        />
                                    </svg>
                                </div>
                                <span className={styles.label}>{service.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>

            {/* Right Column: Content */}
            <div className={styles.rightColumn}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService.id}
                        className={styles.contentWrapper}
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -40 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        <h2 className={styles.contentTitle}>{activeService.content.title}</h2>

                        <div className={styles.columnsContainer}>
                            {activeService.content.groups.map((group, index) => (
                                <div key={index} className={styles.column}>
                                    <div className={styles.group}>
                                        <h4 className={styles.groupTitle}>{group.title}</h4>
                                        <ul className={styles.contentList}>
                                            {group.items.map((item, i) => (
                                                <li key={i} className={styles.contentItem}>
                                                    {item}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default VerticalServiceGrid;
