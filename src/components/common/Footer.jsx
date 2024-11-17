import { Box, Container, Divider, IconButton, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
    return (
        <Box
            sx={{
                color: "white",
                padding: "20px 0",
                position: "relative",
                bottom: 0,
                width: "100%",
            }}
        >
            <Container maxWidth="lg">
                <Divider>
                    <IconButton
                        color="inherit"
                        href="https://www.facebook.com/umesh.chaudhari.9231712"
                        target="_blank"
                    >
                        <FacebookIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://twitter.com"
                        target="_blank"
                    >
                        <TwitterIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://instagram.com"
                        target="_blank"
                    >
                        <InstagramIcon />
                    </IconButton>
                    <IconButton
                        color="inherit"
                        href="https://www.linkedin.com/in/umesh-chaudhari-a61a44253/"
                        target="_blank"
                    >
                        <LinkedInIcon />
                    </IconButton>
                </Divider>
                <Box mt={4}>
                    <Typography variant="body2" color="inherit" align="center">
                        © 2024 RigWizard. All rights reserved.
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;
