import React, { useEffect, useState } from 'react';
import { Card, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const tips = [
    "Choose your motherboard based on form factor: ATX, Micro-ATX, or Mini-ATX.",
    "Pay attention to the PCIe slots in your motherboard; they'll be crucial for future upgrades.",
    "Built-in ports are key—don’t overlook them when selecting your motherboard.",
    "More RAM slots mean more potential for future upgrades.",
    "Select your CPU first, then pick a motherboard with the appropriate socket, like LGA or AM4.",
    "When selecting RAM, consider both its speed and capacity.",
    "Opt for multiple sticks of RAM to boost overall performance.",
    "If aesthetics matter to you, go for RGB RAM.",
    "Review benchmarks for various GPUs before making your decision.",
    "Rather than dual GPUs, invest in one powerful graphics card that meets your needs.",
    "Allocate some budget for the CPU as well.",
    "Ensure your PC case can accommodate your chosen graphics card.",
    "Remember, the more powerful the GPU, the more power it will consume.",
    "Overclocking offers only a 5-10% performance boost—don’t rely on it.",
    "Research cores and threads when selecting your CPU."
]

const getRandomTip = () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    return tips[randomIndex];
};

const TipCard = styled(Card)({
    backgroundColor: '#d0f0c0',
    color: '#006400',
    padding: '10px',
    marginTop: '20px',
    border: '1px solid #006400',
    borderRadius: '8px'
});

const AnimatedTipCard = () => {
    const [randomTip, setRandomTip] = useState(tips[6]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setRandomTip(getRandomTip());
        }, 20000);

        return () => clearInterval(intervalId);
    }, []);


    return (

        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
        >
            <TipCard>
                <Typography variant="body1">
                    Tip: {randomTip}
                </Typography>
            </TipCard>
        </motion.div>
    );
};

export default AnimatedTipCard;
