'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './ProportionalServiceGrid.module.css';

const services = [
    {
        id: 'web',
        label: 'WEB',
        color: '#23234d',
        content: {
            title: "Web Development",
            groups: [
                { title: "UI/UX DESIGN", items: ["Websites", "Landing Pages", "Ecom Strategy", "Copywriting", "Design Systems"] },
                { title: "DEVELOPMENT", items: ["Full Stack Development", "Site Speed Optimization", "Platform Migrations", "App Integrations", "QA Testing"] }
            ]
        }
    },
    {
        id: 'creative',
        label: 'CREATIVE',
        color: '#23234d',
        content: {
            title: "Creative Strategy",
            groups: [
                { title: "BRANDING", items: ["Brand Identity", "Visual Strategy", "Brand Guidelines", "Logo Design", "Typography"] },
                { title: "CONTENT", items: ["Motion Graphics", "3D Animation", "Video Production", "Photography", "Social Assets"] }
            ]
        }
    },
    {
        id: 'paid',
        label: 'PAID MEDIA',
        color: '#23234d',
        content: {
            title: "Paid Media",
            groups: [
                { title: "CHANNELS", items: ["Meta (FB/IG) Ads", "Google Search", "TikTok Ads", "LinkedIn B2B", "YouTube Ads"] },
                { title: "STRATEGY", items: ["Audience Segmentation", "Creative Testing", "Conversion API", "Retargeting", "ROAS Optimization"] }
            ]
        }
    },
    {
        id: 'retention',
        label: 'RETENTION',
        color: '#23234d',
        content: {
            title: "Retention Marketing",
            groups: [
                { title: "EMAIL & SMS", items: ["Klaviyo Automation", "SMS Campaigns", "Lifecycle Flows", "List Growth", "Template Design"] },
                { title: "LOYALTY", items: ["Loyalty Programs", "Subscription Modeling", "Churn Prevention", "Segmentation", "LTV Optimization"] }
            ]
        }
    }
];

// Define layout positions
// Grid size is approx 500x500. 
// Base positions: TL(0,0), TR(260,0), BL(0,260), BR(260,260)
// Active Focus Position: TL(0,0) but larger.

const getVariants = (activeId) => {
    // Helper to define the state of each card based on which one is active

    // Configuration for when 'web' is active
    if (activeId === 'web') return {
        web: { x: 0, y: 0, scale: 1.4, rotate: 0, zIndex: 20 },
        creative: { x: 320, y: 20, scale: 0.7, rotate: 15, zIndex: 1 },
        paid: { x: 20, y: 320, scale: 0.7, rotate: -10, zIndex: 1 },
        retention: { x: 300, y: 300, scale: 0.7, rotate: -5, zIndex: 1 },
    };

    // Configuration for when 'creative' is active
    if (activeId === 'creative') return {
        web: { x: 20, y: 320, scale: 0.7, rotate: -15, zIndex: 1 },
        creative: { x: 0, y: 0, scale: 1.4, rotate: 0, zIndex: 20 }, // Moves to focus
        paid: { x: 300, y: 300, scale: 0.7, rotate: 10, zIndex: 1 },
        retention: { x: 320, y: 20, scale: 0.7, rotate: 5, zIndex: 1 }, // Swaps to TR-ish
    };

    // Configuration for when 'paid' is active
    if (activeId === 'paid') return {
        web: { x: 320, y: 20, scale: 0.7, rotate: 10, zIndex: 1 },
        creative: { x: 300, y: 300, scale: 0.7, rotate: -5, zIndex: 1 },
        paid: { x: 0, y: 0, scale: 1.4, rotate: 0, zIndex: 20 }, // Moves to focus
        retention: { x: 20, y: 320, scale: 0.7, rotate: 15, zIndex: 1 },
    };

    // Configuration for when 'retention' is active
    if (activeId === 'retention') return {
        web: { x: 300, y: 300, scale: 0.7, rotate: -10, zIndex: 1 },
        creative: { x: 20, y: 320, scale: 0.7, rotate: 5, zIndex: 1 },
        paid: { x: 320, y: 20, scale: 0.7, rotate: -15, zIndex: 1 },
        retention: { x: 0, y: 0, scale: 1.4, rotate: 0, zIndex: 20 }, // Moves to focus
    };

    return {};
};

const ProportionalServiceGrid = () => {
    const [activeId, setActiveId] = useState('web');
    const activeService = services.find(s => s.id === activeId);
    const currentVariants = getVariants(activeId);

    return (
        <section className={styles.section}>
            {/* Left Column: Tumbling Grid */}
            <div className={styles.leftColumn}>
                <div className={styles.gridContainer}>
                    {services.map((service) => {
                        const variant = currentVariants[service.id];
                        return (
                            <motion.div
                                key={service.id}
                                className={styles.cardWrapper}
                                animate={{
                                    x: variant.x,
                                    y: variant.y,
                                    scale: variant.scale,
                                    rotate: variant.rotate,
                                    zIndex: variant.zIndex
                                }}
                                transition={{
                                    duration: 1.5,
                                    ease: [0.16, 1, 0.3, 1] // Smooth, heavy ease
                                }}
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
                                            stroke="#23234e"
                                            strokeWidth="3"
                                        />

                                        {/* Animated Fill */}
                                        <motion.path
                                            d="M25 250 V125 C25 69.77 69.77 25 125 25 C180.23 25 225 69.77 225 125 V250 H25 Z"
                                            fill={service.color}
                                            initial={{ opacity: 0 }}
                                            animate={{
                                                opacity: activeId === service.id ? 1 : 0
                                            }}
                                            transition={{ duration: 0.8 }}
                                        />
                                    </svg>
                                </div>
                                <motion.span
                                    className={styles.label}
                                    animate={{
                                        scale: activeId === service.id ? 1.2 : 0.9,
                                        color: activeId === service.id ? '#ffffff' : '#000000'
                                    }}
                                >
                                    {service.label}
                                </motion.span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Right Column: Content */}
            <div className={styles.rightColumn}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService.id}
                        className={styles.contentWrapper}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -50 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
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

export default ProportionalServiceGrid;
