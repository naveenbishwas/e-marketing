'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './InteractiveServiceGrid.module.css';

const services = [
    {
        id: 'web',
        label: 'WEB',
        color: '#3b82f6',
        rotation: 0, // Top-Left (Base)
        content: {
            title: "Web Development",
            items: [
                "High-Performance Next.js Applications",
                "WebGL & 3D Interactions",
                "Headless CMS Integration",
                "Progressive Web Apps (PWA)"
            ]
        }
    },
    {
        id: 'creative',
        label: 'CREATIVE',
        color: '#a855f7',
        rotation: -90, // Top-Right -> Top-Left
        content: {
            title: "Creative Strategy",
            items: [
                "Brand Identity & Systems",
                "UI/UX Design",
                "Motion Graphics & Animation",
                "Art Direction"
            ]
        }
    },
    {
        id: 'paid',
        label: 'PAID MEDIA',
        color: '#f97316',
        rotation: 90, // Bottom-Left -> Top-Left
        content: {
            title: "Paid Media",
            items: [
                "Facebook & Instagram Ads",
                "Google PPC Campaigns",
                "LinkedIn B2B Targeting",
                "Conversion Rate Optimization"
            ]
        }
    },
    {
        id: 'retention',
        label: 'RETENTION',
        color: '#ec4899',
        rotation: -180, // Bottom-Right -> Top-Left
        content: {
            title: "Retention Marketing",
            items: [
                "Email Marketing Automation",
                "SMS Campaigns",
                "Customer Loyalty Programs",
                "Lifecycle Strategy"
            ]
        }
    }
];

const InteractiveServiceGrid = () => {
    const [activeId, setActiveId] = useState('web');

    const activeService = services.find(s => s.id === activeId);

    return (
        <section className={styles.section}>
            {/* Left Column: Rotating Grid */}
            <div className={styles.leftColumn}>
                <motion.div
                    className={styles.gridContainer}
                    animate={{ rotate: activeService.rotation }}
                    transition={{
                        type: "spring",
                        stiffness: 60,
                        damping: 15,
                        mass: 1.2
                    }}
                >
                    {services.map((service) => (
                        <div
                            key={service.id}
                            className={`${styles.panel} ${activeId === service.id ? styles.active : ''}`}
                            onClick={() => setActiveId(service.id)}
                        >
                            <div className={styles.svgContainer}>
                                <svg
                                    viewBox="0 0 250 250"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    style={{ width: '100%', height: '100%' }}
                                >
                                    {/* Arch Path: Adjusted for 250x250 quadrant */}
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
                                        transition={{ duration: 0.4, ease: "easeInOut" }}
                                        style={{ transformOrigin: 'center bottom' }}
                                    />
                                </svg>
                            </div>

                            {/* Counter-rotate label to keep it upright */}
                            <motion.span
                                className={styles.label}
                                animate={{ rotate: -activeService.rotation }}
                                transition={{ type: "spring", stiffness: 60, damping: 15 }}
                            >
                                {service.label}
                            </motion.span>
                        </div>
                    ))}
                </motion.div>
            </div>

            {/* Right Column: Content */}
            <div className={styles.rightColumn}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService.id}
                        className={styles.contentWrapper}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                    >
                        <h2 className={styles.contentTitle}>{activeService.content.title}</h2>
                        <ul className={styles.contentList}>
                            {activeService.content.items.map((item, index) => (
                                <li key={index} className={styles.contentItem}>{item}</li>
                            ))}
                        </ul>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default InteractiveServiceGrid;
