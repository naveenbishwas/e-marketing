'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './ServicesGrid.module.css';

const services = [
    { id: 'web', label: 'WEB', color: '#3b82f6' },      // Blue
    { id: 'creative', label: 'CREATIVE', color: '#a855f7' }, // Purple
    { id: 'paid', label: 'PAID MEDIA', color: '#f97316' },   // Orange
    { id: 'retention', label: 'RETENTION', color: '#ec4899' } // Pink
];

const ServicesGrid = () => {
    const [hovered, setHovered] = useState(null);

    return (
        <section className={styles.section}>
            <div className={styles.grid}>
                {services.map((service) => (
                    <div
                        key={service.id}
                        className={styles.card}
                        onMouseEnter={() => setHovered(service.id)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        <div className={styles.svgContainer}>
                            <svg
                                viewBox="0 0 400 400"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                style={{ width: '100%', height: '100%' }}
                            >
                                {/* Arch Path Definition */}
                                <defs>
                                    <clipPath id={`clip-${service.id}`}>
                                        <path d="M50 400 V200 C50 117.157 117.157 50 200 50 C282.843 50 350 117.157 350 200 V400 H50 Z" />
                                    </clipPath>
                                </defs>

                                {/* Background Outline (White) */}
                                <path
                                    d="M50 400 V200 C50 117.157 117.157 50 200 50 C282.843 50 350 117.157 350 200 V400 H50 Z"
                                    stroke="white"
                                    strokeWidth="2"
                                />

                                {/* Animated Fill */}
                                <g clipPath={`url(#clip-${service.id})`}>
                                    <motion.rect
                                        x="0"
                                        y="0"
                                        width="400"
                                        height="400"
                                        fill={service.color}
                                        initial={{ y: -400 }}
                                        animate={{ y: hovered === service.id ? 0 : -400 }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 20,
                                            mass: 1
                                        }}
                                    />
                                </g>
                            </svg>
                        </div>
                        <span className={styles.label}>{service.label}</span>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesGrid;
