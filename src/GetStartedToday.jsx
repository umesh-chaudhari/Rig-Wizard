import React from 'react';
import { Container, Typography, Box, Button, Paper } from '@mui/material';
import { motion } from 'framer-motion';
// import GetStartedImage from 'public/images/pcbuild.webp'; // Add your image path

const GetStartedToday = () => {
    return (
        <Box
            sx={{
                margin: "2rem 0 2rem 0",
                position: 'relative',
                width: '80%%',
                height: '80vh',
                background: "linear-gradient(rgba(0, 0, 0, 1), rgba(0, 0, 0, .5)), url('/public/images/pcbuild.webp');",
                backgroundSize: 'cover',
                objectFit: "cover",
                backgroundPosition: 'center',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff',
                textAlign: 'center',
                padding: '2rem',
            }}
        >
            <Paper
                elevation={3}
                sx={{
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    padding: '2rem',
                }}
            >
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <Typography variant="h4" gutterBottom>
                        Get Started Today!
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        Begin building your custom PC with ease.
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        sx={{ marginTop: '1rem' }}
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    >
                        Start Building Now
                    </Button>
                </motion.div>
            </Paper>
        </Box>
    );
};

export default GetStartedToday;
