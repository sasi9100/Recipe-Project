import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const Header = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1, }}>
                <AppBar position="static" sx={{ backgroundColor: '#F97A00', }}>
                    <Toolbar>
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, fontFamily: 'Times New Roman' }}>
                            Recipes By Mom's Kitchen
                        </Typography>
                        {(
                            <div>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}

export default Header
