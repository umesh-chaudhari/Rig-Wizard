import React from 'react';
import {
    AppBar,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Drawer,
    List,
    ListItemText,
    Box,
    ListItemButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setDrawerOpen(open);
    };

    const drawer = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List>
                {['Home', 'How It Works', 'About Us', 'Contact', 'Get Started'].map((text) => (
                  <ListItemButton key={text}>
                      <ListItemText primary={text}/>
                  </ListItemButton>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="sticky" color="primary">
            <Toolbar color="primary" >
                <IconButton
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    onClick={toggleDrawer(true)}
                    sx={{ display: { xs: 'block', sm: 'none' } }}
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    RigWizard
                </Typography>
                <Box sx={{ display: { xs: 'none', sm: 'block' }, padding: "10px" }}>
                    {['Home', 'How It Works', 'About Us', 'Contact', 'Get Started'].map((text) => (
                        <Button key={text} color="primary" size="large" sx={{margin: "0 0 0 0.5 rem"}}>
                            {text}
                        </Button>
                    ))}
                </Box>
            </Toolbar>
            <Drawer
                anchor="left"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                {drawer}
            </Drawer>
        </AppBar>
    );
};

export default Navbar;
