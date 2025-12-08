'use client';
import { motion } from 'framer-motion';
import styles from './ClientLogoGrid.module.css';

const clients = [
    {
        id: 1,
        name: "TechFlow",
        logoFont: "sans-serif",
        desc: "Redesigned their entire cloud infrastructure dashboard, resulting in a 40% increase in user efficiency."
    },
    {
        id: 2,
        name: "Lumina",
        logoFont: "serif",
        desc: "Crafted a luxury brand identity and e-commerce experience that doubled their conversion rate."
    },
    {
        id: 3,
        name: "Vertex",
        logoFont: "monospace",
        desc: "Developed a high-performance trading platform with real-time data visualization."
    },
    {
        id: 4,
        name: "Echo",
        logoFont: "sans-serif",
        desc: "Implemented an AI-driven customer support system that reduced response times by 60%."
    },
    {
        id: 5,
        name: "Prism",
        logoFont: "serif",
        desc: "Created an immersive AR marketing campaign for their latest product launch."
    },
    {
        id: 6,
        name: "Orbit",
        logoFont: "sans-serif",
        desc: "Built a scalable SaaS platform for remote team collaboration used by 10k+ teams."
    }
];

const ClientLogoGrid = () => {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h2 className={styles.title}>Selected Works</h2>
                    <p className={styles.subtitle}>
                        We partner with ambitious brands to create digital experiences that make an impact.
                    </p>
                </div>

                <div className={styles.grid}>
                    {clients.map((client) => (
                        <motion.div
                            key={client.id}
                            className={styles.card}
                            initial="initial"
                            whileHover="hover"
                            animate="initial"
                        >
                            {/* Logo Container */}
                            <motion.div
                                className={styles.logoContainer}
                                variants={{
                                    initial: { y: 0, opacity: 1, scale: 1 },
                                    hover: { y: -50, opacity: 0.5, scale: 0.9 }
                                }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <span
                                    className={styles.logoText}
                                    style={{ fontFamily: client.logoFont }}
                                >
                                    {client.name}
                                </span>
                            </motion.div>

                            {/* Slide Up Panel */}
                            <motion.div
                                className={styles.slideUpPanel}
                                variants={{
                                    initial: { y: "100%" },
                                    hover: { y: 0 }
                                }}
                                transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            >
                                <h3 className={styles.clientName}>{client.name}</h3>
                                <p className={styles.clientDesc}>{client.desc}</p>
                                <div className={styles.arrow}>→</div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogoGrid;
