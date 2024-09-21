import { useState, useEffect } from 'react';

const useRandomTip = (tips) => {
    const [randomTip, setRandomTip] = useState('');

    useEffect(() => {
        const getRandomTip = () => {
            const randomIndex = Math.floor(Math.random() * tips.length);
            return tips[randomIndex];
        };
        setRandomTip(getRandomTip());
    }, [tips]);

    return randomTip;
};

export default useRandomTip;
