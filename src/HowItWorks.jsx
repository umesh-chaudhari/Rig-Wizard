import React from "react";
import {
  Box,
  Container,
  Grid,
  Paper,
  SvgIcon,
  Typography,
} from "@mui/material";
import { motion } from "framer-motion";
import {
  ArrowRightAltOutlined,
  BuildCircleOutlined,
  DeleteForever,
  Image,
  ShareOutlined,
  SpeedOutlined,
  Tab,
  VerifiedOutlined,
} from "@mui/icons-material";

const steps = [
  {
    title: "Choose Your Parts",
    description: "Explore our extensive database of PC components.",
    icon: "/images/rom.png", // Replace with your actual icon component
    icon2: VerifiedOutlined,
  },
  {
    title: "Check Compatibility",
    description: "Ensure all your selected parts work together seamlessly.",
    icon: "/images/puzzle.png", // Replace with your actual icon component
    icon2: BuildCircleOutlined,
  },
  {
    title: "Optimize Performance",
    description: "Avoid bottlenecks with our performance checker.",
    icon: "/images/optimization.png", // Replace with your actual icon component
    icon2: SpeedOutlined,
  },
  {
    title: "Share and Inspire",
    description: "Share your build and get inspired by others.",
    icon: "/images/creativity.png", // Replace with your actual icon component
    icon2: ShareOutlined,
  },
];
const HowItWorks = () => {
  return (
    <Container>
      <Typography variant="h3" align="center" gutterBottom>
        How It Works
      </Typography>
      <Grid container spacing={4} sx={{}}>
        {steps.map((step, index) => (
          <Grid item xs={12} md={3} key={index} style={{ height: "100%" }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.3 }}
            >
              <Paper elevation={3} style={{ padding: "1rem", height: "100%" }}>
                <Box display="flex" flexDirection="column" alignItems="center">
                  {/*<step.icon2 style={{ fontSize: 50, marginBottom: '1rem' }} />*/}
                  <motion.div whileHover={{ scale: 1.1 }}>
                    <Box
                      component="img"
                      src={step.icon}
                      sx={{ width: "50px", height: "50px", margin: "20px" }}
                    ></Box>
                  </motion.div>
                  <Typography variant="h6" align="center">
                    {step.title}
                  </Typography>
                  <Typography
                    align="center"
                    variant="p"
                    sx={{ margin: "0 0 2rem 0" }}
                  >
                    {step.description}
                  </Typography>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HowItWorks;
