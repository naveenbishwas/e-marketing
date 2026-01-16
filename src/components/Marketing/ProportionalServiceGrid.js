'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
    {
        id: 'powermowers',
        label: 'POWERMOWERS',
        color: '#0b194bff',
        gradient: 'linear-gradient(135deg, #0b194bff 0%, #728defff 100%)',
        content: {
            title: "eCommerce Growth",
            description: "Scaled from $50k to $160k monthly sales with 30x ROAS",
            groups: [
                { title: "THE CHALLENGE", items: ["Stuck at $50,000/month sales", "Needed strategic scaling", "ROAS optimization required"] },
                { title: "THE RESULTS", items: ["$160k Monthly Sales", "30x ROAS on Google Ads", "40% Revenue Growth MoM"] }
            ]
        }
    },
    {
        id: 'dronacharya',
        label: 'DRONACHARYA',
        color: '#0b194bff',
        gradient: 'linear-gradient(135deg, #0b194bff 0%, #728defff 100%)',
        content: {
            title: "High-Ticket Lead Gen",
            description: "Generated Rs. 6 Lakhs from Rs. 2 Lakhs spend with 3x ROAS",
            groups: [
                { title: "THE CHALLENGE", items: ["High-ticket items (₹15k-50k)", "Trust building required", "Qualified lead generation"] },
                { title: "THE RESULTS", items: ["3x ROAS Achieved", "High-Intent Leads", "Premium Brand Positioning"] }
            ]
        }
    },
    {
        id: 'hubhawks',
        label: 'HUBHAWKS',
        color: '#0b194bff',
        gradient: 'linear-gradient(135deg, #0b194bff 0%, #728defff 100%)',
        content: {
            title: "Service Aggregator",
            description: "Reduced CPL by 90% from Rs. 250 to Rs. 30-50",
            groups: [
                { title: "THE CHALLENGE", items: ["High Cost Per Lead", "Irrelevant inquiries", "Budget inefficiency"] },
                { title: "THE RESULTS", items: ["90% CPL Reduction", "₹30-50 Average CPL", "Zero Quality Drop"] }
            ]
        }
    },
    {
        id: 'cupid',
        label: 'CUPID',
        color: '#0b194bff',
        gradient: 'linear-gradient(135deg, #0b194bff 0%, #728defff 100%)',
        content: {
            title: "Fashion & Apparel",
            description: "₹1.72 Cr sales in 12 months, scaled from ₹15k/month",
            groups: [
                { title: "THE CHALLENGE", items: ["₹15k-20k monthly sales", "Saturated market", "Needed differentiation"] },
                { title: "THE RESULTS", items: ["₹1.72 Cr Annual Sales", "55% Returning Rate", "3.5x ROAS"] }
            ]
        }
    },
    {
        id: 'uberlyfe',
        label: 'UBERLYFE',
        color: '#0b194bff',
        gradient: 'linear-gradient(135deg, #0b194bff 0%, #728defff 100%)',
        content: {
            title: "Home Furnishing",
            description: "₹2.17 Cr revenue in 6 months with 11.27 ROAS",
            groups: [
                { title: "THE CHALLENGE", items: ["High-ticket furniture", "Ad fatigue issues", "Seasonal challenges"] },
                { title: "THE RESULTS", items: ["₹2.17 Cr in 6 Months", "11.27 ROAS", "71% Sales Growth"] }
            ]
        }
    },

];

const getVariants = (activeId) => {
    const centerX = 200;
    const centerY = 200;

    const topLeft = { x: 30, y: 30 };
    const topRight = { x: 370, y: 30 };
    const bottomLeft = { x: 30, y: 370 };
    const bottomRight = { x: 370, y: 370 };

    if (activeId === 'powermowers') return {
        powermowers: { x: centerX, y: centerY, scale: 1, rotate: 0, zIndex: 20 },
        dronacharya: { ...topRight, scale: 0.75, rotate: 8, zIndex: 1 },
        hubhawks: { ...bottomLeft, scale: 0.75, rotate: -10, zIndex: 1 },
        cupid: { ...bottomRight, scale: 0.75, rotate: 12, zIndex: 1 },
        uberlyfe: { ...topLeft, scale: 0.75, rotate: -8, zIndex: 1 },
    };

    if (activeId === 'dronacharya') return {
        powermowers: { ...topLeft, scale: 0.75, rotate: -8, zIndex: 1 },
        dronacharya: { x: centerX, y: centerY, scale: 1, rotate: 0, zIndex: 20 },
        hubhawks: { ...topRight, scale: 0.75, rotate: 10, zIndex: 1 },
        cupid: { ...bottomLeft, scale: 0.75, rotate: -12, zIndex: 1 },
        uberlyfe: { ...bottomRight, scale: 0.75, rotate: 8, zIndex: 1 },
    };

    if (activeId === 'hubhawks') return {
        powermowers: { ...bottomRight, scale: 0.75, rotate: 12, zIndex: 1 },
        dronacharya: { ...bottomLeft, scale: 0.75, rotate: -8, zIndex: 1 },
        hubhawks: { x: centerX, y: centerY, scale: 1, rotate: 0, zIndex: 20 },
        cupid: { ...topRight, scale: 0.75, rotate: 10, zIndex: 1 },
        uberlyfe: { ...topLeft, scale: 0.75, rotate: -10, zIndex: 1 },
    };

    if (activeId === 'cupid') return {
        powermowers: { ...topRight, scale: 0.75, rotate: 10, zIndex: 1 },
        dronacharya: { ...topLeft, scale: 0.75, rotate: -12, zIndex: 1 },
        hubhawks: { ...bottomRight, scale: 0.75, rotate: 8, zIndex: 1 },
        cupid: { x: centerX, y: centerY, scale: 1, rotate: 0, zIndex: 20 },
        uberlyfe: { ...bottomLeft, scale: 0.75, rotate: -8, zIndex: 1 },
    };

    if (activeId === 'uberlyfe') return {
        powermowers: { ...bottomLeft, scale: 0.75, rotate: -10, zIndex: 1 },
        dronacharya: { ...bottomRight, scale: 0.75, rotate: 8, zIndex: 1 },
        hubhawks: { ...topLeft, scale: 0.75, rotate: -12, zIndex: 1 },
        cupid: { ...topRight, scale: 0.75, rotate: 10, zIndex: 1 },
        uberlyfe: { x: centerX, y: centerY, scale: 1, rotate: 0, zIndex: 20 },
    };

    return {};
};

const ProportionalServiceGrid = () => {
    const [activeId, setActiveId] = useState('powermowers');
    const activeService = services.find(s => s.id === activeId);
    const currentVariants = getVariants(activeId);

    return (
        <section style={{
            display: 'flex',
            minHeight: '100dvh',
            background: 'linear-gradient(to bottom, #ffffff 0%, #f8f9ff 100%)',
            padding: '80px 60px',
            gap: '80px',
            alignItems: 'center'
        }}>
            {/* Left Column: Tumbling Grid */}
            <div style={{
                flex: '0 0 48%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div style={{
                    position: 'relative',
                    width: '550px',
                    height: '550px'
                }}>
                    {services.map((service) => {
                        const variant = currentVariants[service.id] || { x: 0, y: 0, scale: 0.7, rotate: 0, zIndex: 1 };
                        const isActive = activeId === service.id;

                        return (
                            <motion.div
                                key={service.id}
                                style={{
                                    position: 'absolute',
                                    width: '200px',
                                    height: '200px',
                                    cursor: 'pointer',
                                    transformOrigin: 'center center'
                                }}
                                animate={{
                                    x: variant.x,
                                    y: variant.y,
                                    scale: variant.scale,
                                    rotate: variant.rotate,
                                    zIndex: variant.zIndex
                                }}
                                transition={{
                                    duration: 1,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                                onClick={() => setActiveId(service.id)}
                                whileHover={{ scale: variant.scale * 1.05 }}
                            >
                                <div style={{
                                    position: 'relative',
                                    width: '100%',
                                    height: '100%',
                                    filter: isActive ? 'drop-shadow(0 20px 40px rgba(0,0,0,0.15))' : 'drop-shadow(0 4px 8px rgba(0,0,0,0.08))'
                                }}>
                                    <svg
                                        viewBox="0 0 250 250"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                        style={{ width: '100%', height: '100%' }}
                                    >
                                        <defs>
                                            <linearGradient id={`gradient-${service.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                <stop offset="0%" stopColor={isActive ? service.color : '#ffffff'} />
                                                <stop offset="100%" stopColor={isActive ? service.color : '#ffffff'} stopOpacity={isActive ? 0.8 : 1} />
                                            </linearGradient>
                                        </defs>
                                        <motion.path
                                            d="M25 250 V125 C25 69.77 69.77 25 125 25 C180.23 25 225 69.77 225 125 V250 H25 Z"
                                            fill={isActive ? `url(#gradient-${service.id})` : '#ffffff'}
                                            stroke={isActive ? 'none' : '#e0e0e0'}
                                            strokeWidth="2"
                                            animate={{
                                                fill: isActive ? `url(#gradient-${service.id})` : '#ffffff'
                                            }}
                                            transition={{ duration: 0.5 }}
                                        />
                                    </svg>
                                </div>
                                <motion.span
                                    style={{
                                        position: 'absolute',
                                        bottom: '42px',
                                        left: '50%',
                                        transform: 'translateX(-50%)',
                                        fontSize: isActive ? '15px' : '12px',
                                        fontWeight: '700',
                                        letterSpacing: '1px',
                                        textAlign: 'center',
                                        pointerEvents: 'none',
                                        whiteSpace: 'nowrap'
                                    }}
                                    animate={{
                                        color: isActive ? '#ffffff' : '#666',
                                        fontSize: isActive ? '15px' : '12px'
                                    }}
                                    transition={{ duration: 0.4 }}
                                >
                                    {service.label}
                                </motion.span>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Right Column: Content */}
            <div style={{
                flex: '1',
                display: 'flex',
                alignItems: 'center',
                paddingLeft: '20px'
            }}>
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeService.id}
                        style={{
                            width: '100%',
                            maxWidth: '580px'
                        }}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <motion.div
                            style={{
                                display: 'inline-block',
                                padding: '8px 20px',
                                borderRadius: '50px',
                                background: activeService.gradient,
                                marginBottom: '24px'
                            }}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.1 }}
                        >
                            <span style={{
                                color: '#ffffff',
                                fontSize: '12px',
                                fontWeight: '700',
                                letterSpacing: '1.5px',
                                textTransform: 'uppercase'
                            }}>
                                {activeService.label}
                            </span>
                        </motion.div>

                        <h2 style={{
                            fontSize: '56px',
                            fontWeight: '700',
                            marginBottom: '16px',
                            background: activeService.gradient,
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            letterSpacing: '-1px',
                            lineHeight: '1.1'
                        }}>{activeService.content.title}</h2>

                        <p style={{
                            fontSize: '18px',
                            color: '#666',
                            marginBottom: '48px',
                            lineHeight: '1.6',
                            fontWeight: '400'
                        }}>{activeService.content.description}</p>

                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '40px'
                        }}>
                            {activeService.content.groups.map((group, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 + (index * 0.1) }}
                                >
                                    <h4 style={{
                                        fontSize: '11px',
                                        fontWeight: '700',
                                        letterSpacing: '2px',
                                        marginBottom: '18px',
                                        color: '#999',
                                        textTransform: 'uppercase'
                                    }}>{group.title}</h4>
                                    <ul style={{
                                        listStyle: 'none',
                                        padding: 0,
                                        margin: 0
                                    }}>
                                        {group.items.map((item, i) => (
                                            <li key={i} style={{
                                                fontSize: '16px',
                                                lineHeight: '1.8',
                                                color: '#333',
                                                marginBottom: '8px',
                                                fontWeight: '400',
                                                paddingLeft: '16px',
                                                position: 'relative'
                                            }}>
                                                <span style={{
                                                    position: 'absolute',
                                                    left: '0',
                                                    top: '10px',
                                                    width: '4px',
                                                    height: '4px',
                                                    borderRadius: '50%',
                                                    background: activeService.gradient
                                                }} />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
};

export default ProportionalServiceGrid;