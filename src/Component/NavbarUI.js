import React from 'react';
import "../App.css"
import AppBar from "@material-ui/core/AppBar";
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Navbar() {
    return (
        <div>
            <nav className="navbar">
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" >
                            WoodM4
                    </Typography>
                        <Button color="inherit">Login</Button>
                    </Toolbar>
                </AppBar>
            </nav>

        </div>
    )
}

export default Navbar
