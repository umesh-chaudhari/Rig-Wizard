import {Box, Button, Container, Divider, Typography} from "@mui/material";
import {
    motion,
    useAnimationFrame,
    useMotionValue,
    useScroll,
    useSpring,
    useTransform,
    useVelocity
} from "framer-motion";
import {ArrowRightAlt} from "@mui/icons-material";
import {useRef} from "react";
import { wrap } from "@motionone/utils";
import HowItWorks from "./HowItWorks.jsx";
import GetStartedToday from "./GetStartedToday.jsx";

function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    /**
     * This is a magic wrapping for the length of the text - you
     * have to replace for wrapping that works for you or dynamically
     * calculate
     */
    const x = useTransform(baseX, (v) => `${wrap(-20, 0, v)}%`);

    const directionFactor = useRef(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        /**
         * This is what changes the direction of the scroll once we
         * switch scrolling directions.
         */
        if (velocityFactor.get() < 0) {
            directionFactor.current = -1;
        } else if (velocityFactor.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * velocityFactor.get();

        baseX.set(baseX.get() + moveBy);
    });

    /**
     * The number of times to repeat the child text should be dynamically calculated
     * based on the size of the text and viewport. Likewise, the x motion value is
     * currently wrapped between -20 and -45% - this 25% is derived from the fact
     * we have four children (100% / 4). This would also want to derive from the
     * dynamically generated number of children.
     */
    return (
        <div className="parallax">
            <motion.div className="scroller" style={{ x }}>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
                <span>{children} </span>
            </motion.div>
        </div>
    );
}

const Starter = () => {
    const text = "Dream it.Build it.Optimize it".split(".")

    return (
        <>
            <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh"
                 sx={{margin: "0 2rem 0 2rem", flexDirection: "column"}}>
                <Typography variant="h1"
                            sx={{fontWeight: "400", textAlign: "center", fontSize: "120px", letterSpacing: "-4px", typography: {sm: "h2", xs: "h3", lg: "h1", md: "h4"}}}>Welcome to RigWizard</Typography>
                {/*<ParallaxText baseVelocity={5}>Build and dream it</ParallaxText>*/}
                <Typography variant="h4" align="center"
                            sx={{fontWeight: "200", marginTop: "0rem", marginBottom: "1rem", fontSize: "50px",}}>The only
                    platform to build your pc</Typography>
                <Box display="block">

                    {text.map((el, i) => (
                        <motion.h1 initial={{opacity: 0}} animate={{opacity: 1}} transition={{
                            ease: "easeOut",
                            duration: 1,
                            repeatType: "loop",
                            delay: i / 2
                        }} key={i} style={{display: "inline"}}>
                            {el}{". "}
                        </motion.h1>
                    ))}
                </Box>
                <motion.div
                    initial={{scale: 1}}
                    whileInView={{scale: 1.1, transition: {duration: 0.5}}}
                    className="animatable"
                    whileHover={{
                        scale: 1.2,
                        transition: {duration: 0.4}
                    }}
                    whileTap={{scale: 0.9}}
                >
                <Button variant="contained" size="large" endIcon={<ArrowRightAlt/>} sx={{marginTop: "2rem"}}>Lets Start</Button>
                </motion.div>
            </Box>
            <Box display="flex" justifyContent="center">
            <Divider sx={{bgcolor: "#317589", margin: "0 0 4rem 0", width: "92%"}}></Divider>
            </Box>
            <Box display="flex" justifyContent="center">
            <HowItWorks/>
            </Box>
            <GetStartedToday/>
        </>
    );
};

export default Starter;