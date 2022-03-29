import * as React from 'react';
import { Link } from "react-router-dom";
import { AppBar, Box, Toolbar, Typography, IconButton, SwipeableDrawer, List, ListItem, ListItemIcon, ListItemText, Menu, MenuItem } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MoreVert from '@mui/icons-material/MoreVert';

export default function Navbar() {
    const anchor = 'left';
    const [anchorEl, setAnchorEl] = React.useState(null);

    const darkTheme = createTheme({
        palette: {
        mode: 'dark',
        },
    });

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift') ) {
        return;
        }

        setState({ ...state, [anchor]: open });
    };

    const linksPage = [
        { path: '/', text: 'Home', icon: <InboxIcon /> },
        { path: '/home', text: 'Home', icon: <InboxIcon /> },
        { path: 'auth/signin', text: 'SignIn', icon: <InboxIcon /> },
        { path: 'auth/signup', text: 'SignUp', icon: <InboxIcon /> },
        { path: 'home/administrator', text: 'Home Admin', icon: <InboxIcon /> }
    ];

    const linksOptions = [
        { path: '/', text: 'Inicio', icon: <InboxIcon /> },
        { path: '/auth/signin', text: 'Ingresar', icon: <InboxIcon /> },
        { path: '/auth/signup', text: 'Registrarse', icon: <InboxIcon /> }
    ];

    const DrawerItems = function() {
        return (
        linksPage.map((link, index) => (
            <ListItem button key={link.text + index} component={Link} to={link.path}>
            <ListItemIcon>{link.icon}</ListItemIcon>
            <ListItemText primary={link.text}>{link.text}</ListItemText>
            </ListItem>
        ))
        );
    };

    const OptionsItems = function() {
        return (
        linksOptions.map((link) => (
            <MenuItem onClick={handleClose} key={link.text} component={Link} to={link.path}>{link.text}</MenuItem>
        ))
        );
    };

    const MenuOptions = function() {
        return (
        <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        >
            <OptionsItems />
        </Menu>
        );
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <ThemeProvider theme={darkTheme}>
                <AppBar position="sticky" color="primary">
                    <Toolbar>
                        <IconButton size="large" edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleDrawer(anchor, true)}>
                            <MenuIcon />
                        </IconButton>

                        <SwipeableDrawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)} onOpen={toggleDrawer(anchor, true)}>
                            <Box sx={{ width: 245 }} role="presentation" onClick={toggleDrawer(anchor, false)} onKeyDown={toggleDrawer(anchor, false)}>
                                <List>
                                <DrawerItems />
                                </List>
                            </Box>
                        </SwipeableDrawer>

                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            LF - React
                        </Typography>

                        <IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleMenu} color="inherit">
                            <MoreVert />
                        </IconButton>
                        <MenuOptions />
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </Box>
    );
}