import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
    return (
        <Box
            sx={{
                backgroundColor: '#222',
                color: '#fff',
                padding: '20px 0',
                textAlign: 'center',
                marginTop: '40px',
            }}
        >
            {/* Name */}
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
                © {new Date().getFullYear()} DEVELOPED BY Krish
            </Typography>
            <Typography>
                For practising Material UI
            </Typography>

            {/* Social Media Links */}
            <Box>
                <IconButton
                    component="a"
                    href="https://www.youtube.com/" // Replace with your actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#FF0000' }}
                >
                    <YouTubeIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://www.linkedin.com/" // Replace with your actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#0A66C2' }}
                >
                    <LinkedInIcon />
                </IconButton>
                <IconButton
                    component="a"
                    href="https://www.instagram.com/" // Replace with your actual link
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#E4405F' }}
                >
                    <InstagramIcon />
                </IconButton>
            </Box>
        </Box>
    );
};

export default Footer;
