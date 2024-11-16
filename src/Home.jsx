import { ArrowRightAlt } from "@mui/icons-material";
import { Box, Button, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.jsx";
import GetStartedToday from "./GetStartedToday.jsx";
import HowItWorks from "./HowItWorks.jsx";

const Home = ({ setLoading }) => {
  const navigate = useNavigate();
  const text = "Dream it.Build it.Optimize it".split(".");
  const handleNavigation = () => {
    setLoading(true);
    setTimeout(() => {
      navigate("/build");
      setLoading(false);
    }, 1000); // Simulate loading time
  };
  return (
    <>
      <div className="gradient-background"></div>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
        sx={{ margin: "0 2rem 0 2rem", flexDirection: "column" }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: "400",
            textAlign: "center",
            fontSize: "120px",
            letterSpacing: "-4px",
            typography: { sm: "h2", xs: "h3", lg: "h1", md: "h4" },
          }}
        >
          Welcome to RigWizard
        </Typography>
        {/*<ParallaxText baseVelocity={5}>Build and dream it</ParallaxText>*/}
        <Typography
          variant="h4"
          align="center"
          sx={{
            fontWeight: "200",
            marginTop: "0rem",
            marginBottom: "1rem",
            fontSize: "50px",
          }}
        >
          The only platform to build your pc
        </Typography>
        <Box display="block">
          {text.map((el, i) => (
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                ease: "easeOut",
                duration: 1,
                repeatType: "loop",
                delay: i / 2,
              }}
              key={i}
              style={{ display: "inline" }}
            >
              {el}
              {". "}
            </motion.h1>
          ))}
        </Box>
        <motion.div
          initial={{ scale: 1 }}
          whileInView={{ scale: 1.1, transition: { duration: 0.5 } }}
          className="animatable"
          whileHover={{
            scale: 1.2,
            transition: { duration: 0.4 },
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            variant="contained"
            size="large"
            endIcon={<ArrowRightAlt />}
            onClick={handleNavigation}
            sx={{ marginTop: "2rem" }}
          >
            Lets Start
          </Button>
        </motion.div>
      </Box>
      <Box display="flex" justifyContent="center">
        <Divider
          sx={{ bgcolor: "#317589", margin: "0 0 4rem 0", width: "92%" }}
        ></Divider>
      </Box>
      <Box display="flex" justifyContent="center">
        <HowItWorks />
      </Box>
      <GetStartedToday />
      <Footer />
    </>
  );
};

export default Home;
