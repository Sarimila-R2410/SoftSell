import React, { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Toolbar,
  Button,
  IconButton,
  useTheme,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { motion } from 'framer-motion';
import Logo3D from './Logo3D';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', to: 'hero' },
    { name: 'How It Works', to: 'how-it-works' },
    { name: 'Why Choose Us', to: 'why-choose-us' },
    { name: 'Testimonials', to: 'testimonials' },
    { name: 'Contact', to: 'contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };

  const drawer = (
    <Box
      sx={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
        backdropFilter: 'blur(10px)',
        height: '100%',
        pt: 2,
      }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem
            button
            key={item.name}
            onClick={() => scrollToSection(item.to)}
            sx={{
              '&:hover': {
                background: 'rgba(107, 78, 255, 0.1)',
              },
            }}
          >
            <ListItemText
              primary={item.name}
              sx={{
                textAlign: 'center',
                '& .MuiTypography-root': {
                  fontWeight: 600,
                  color: 'primary.main',
                },
              }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <AppBar
        position="fixed"
        sx={{
          background: scrolled
            ? 'rgba(255, 255, 255, 0.8)'
            : 'transparent',
          backdropFilter: 'blur(10px)',
          boxShadow: scrolled ? '0 4px 20px rgba(0, 0, 0, 0.1)' : 'none',
          transition: 'all 0.3s ease-in-out',
          borderBottom: scrolled
            ? '1px solid rgba(107, 78, 255, 0.1)'
            : 'none',
          width: '100%',
          left: 0,
          right: 0,
        }}
      >
        <Container maxWidth="lg" sx={{ px: { xs: 2, sm: 3 } }}>
          <Toolbar 
            sx={{ 
              justifyContent: 'space-between', 
              py: 1,
              minHeight: { xs: 64, sm: 70 },
              px: { xs: 0, sm: 2 },
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative' }}>
              <Logo3D />
              {/* Decorative elements below logo */}
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -10,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '120%',
                  height: '2px',
                  background: 'linear-gradient(90deg, transparent, #6B4EFF, transparent)',
                  opacity: 0.5,
                }}
              />
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -15,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '80%',
                  height: '1px',
                  background: 'linear-gradient(90deg, transparent, #00BFA5, transparent)',
                  opacity: 0.3,
                }}
              />
            </Box>

            {isMobile ? (
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  '&:hover': {
                    background: 'rgba(107, 78, 255, 0.1)',
                  },
                }}
              >
                <MenuIcon />
              </IconButton>
            ) : (
              <Box sx={{ display: 'flex', gap: 2, position: 'relative' }}>
                {/* Split design line */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '-20px',
                    right: '-20px',
                    height: '1px',
                    background: 'linear-gradient(90deg, transparent, rgba(107, 78, 255, 0.2), transparent)',
                    transform: 'translateY(-50%)',
                  }}
                />
                {navItems.map((item) => (
                  <motion.div
                    key={item.name}
                    whileHover={{ y: -2 }}
                    whileTap={{ y: 0 }}
                  >
                    <Button
                      onClick={() => scrollToSection(item.to)}
                      sx={{
                        color: 'primary.main',
                        fontWeight: 600,
                        position: 'relative',
                        '&::after': {
                          content: '""',
                          position: 'absolute',
                          bottom: 0,
                          left: '50%',
                          transform: 'translateX(-50%)',
                          width: 0,
                          height: '2px',
                          background: 'linear-gradient(90deg, #6B4EFF, #00BFA5)',
                          transition: 'width 0.3s ease-in-out',
                        },
                        '&:hover::after': {
                          width: '100%',
                        },
                      }}
                    >
                      {item.name}
                    </Button>
                  </motion.div>
                ))}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        variant="temporary"
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          '& .MuiDrawer-paper': {
            width: 240,
            background: 'transparent',
            border: 'none',
          },
        }}
      >
        {drawer}
      </Drawer>
    </motion.div>
  );
};

export default Navbar; 