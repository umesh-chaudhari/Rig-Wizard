import MenuIcon from "@mui/icons-material/Menu";
import {
    AppBar,
    Box,
    Button,
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemText,
    Toolbar,
    Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ setLoading }) => {
    const navigate = useNavigate();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }
        setDrawerOpen(open);
    };
    const handleNavigation = () => {
        setLoading(true);
        setTimeout(() => {
            navigate("/build");
            setLoading(false);
        }, 1000);
    };
    const drawer = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {["Home", "How It Works", "About Us", "Contact", "Get Started"].map(
                    (text) => (
                        <ListItemButton key={text}>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    ),
                )}
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky" color="primary" sx={{ bgcolor: "#000506" }}>
            <Toolbar color="primary">
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{ display: { xs: "block", sm: "none" } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    RigWizard
                </Typography>
                <Box sx={{ display: { xs: "none", sm: "block" }, padding: "10px" }}>
                    <Link to="/">
                        <Button color="primary" size="large" sx={{ margin: "0 0 0 1 rem" }}>
                            Home
                        </Button>
                    </Link>
                    <Button color="primary" size="large" sx={{ margin: "0 0 0 1 rem" }}>
                        How It Works
                    </Button>
                    <Button color="primary" size="large" sx={{ margin: "0 0 0 1 rem" }}>
                        About Us
                    </Button>
                    <Button color="primary" size="large" sx={{ margin: "0 0 0 1 rem" }}>
                        Contact
                    </Button>
                    <Button
                        color="primary"
                        size="large"
                        sx={{ margin: "0 0 0 1 rem" }}
                        onClick={handleNavigation}
                    >
                        Build
                    </Button>
                </Box>
            </Toolbar>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
