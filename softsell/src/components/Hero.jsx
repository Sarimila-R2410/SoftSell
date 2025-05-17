import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { Link as ScrollLink } from 'react-scroll';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <Box
      sx={{
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        py: 8,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient effect */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'radial-gradient(circle at 50% 50%, rgba(107, 78, 255, 0.1), rgba(0, 191, 165, 0.05))',
          zIndex: 0,
        }}
      />

      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          left: '10%',
          width: '200px',
          height: '200px',
          background: 'linear-gradient(45deg, rgba(107, 78, 255, 0.1), rgba(0, 191, 165, 0.1))',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          right: '10%',
          width: '250px',
          height: '250px',
          background: 'linear-gradient(45deg, rgba(0, 191, 165, 0.1), rgba(107, 78, 255, 0.1))',
          borderRadius: '50%',
          filter: 'blur(40px)',
          zIndex: 0,
        }}
      />

      <Container sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 2,
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
              transform: 'perspective(1000px) rotateX(0deg)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'perspective(1000px) rotateX(5deg)',
              },
              color: '#1a237e', // Dark blue color
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: '-5px',
                left: '-5px',
                right: '-5px',
                bottom: '-5px',
                border: '2px solid white',
                borderRadius: '8px',
                zIndex: -1,
                filter: 'blur(2px)',
              },
            }}
          >
            Sell Your Software Licenses
            <br />
            <Typography
              component="span"
              variant="h2"
              sx={{
                display: 'block',
                mt: 1,
                color: '#1a237e', // Dark blue color
                textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
                transform: 'perspective(1000px) rotateX(0deg)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'perspective(1000px) rotateX(-5deg)',
                },
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: '-5px',
                  left: '-5px',
                  right: '-5px',
                  bottom: '-5px',
                  border: '2px solid white',
                  borderRadius: '8px',
                  zIndex: -1,
                  filter: 'blur(2px)',
                },
              }}
            >
              Get Paid What They're Worth
            </Typography>
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              maxWidth: '800px',
              mx: 'auto',
              color: 'text.secondary',
              textShadow: '1px 1px 2px rgba(0, 0, 0, 0.05)',
              transform: 'perspective(1000px) rotateX(0deg)',
              transition: 'transform 0.3s ease-in-out',
              '&:hover': {
                transform: 'perspective(1000px) rotateX(2deg)',
              },
            }}
          >
            Got Software You're Not Using? Let's Turn That Into Pizza Money.
            <br />
            Fast, secure, and hassle-free.
          </Typography>

          {/* 3D Motion Design around CTA button */}
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                position: 'absolute',
                top: '-20px',
                left: '-20px',
                right: '-20px',
                bottom: '-20px',
                border: '2px solid rgba(107, 78, 255, 0.3)',
                borderRadius: '30px',
                zIndex: -1,
              }}
            />
            <motion.div
              animate={{
                rotate: [360, 0],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                position: 'absolute',
                top: '-30px',
                left: '-30px',
                right: '-30px',
                bottom: '-30px',
                border: '2px solid rgba(0, 191, 165, 0.3)',
                borderRadius: '40px',
                zIndex: -1,
              }}
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ScrollLink to="contact" smooth={true} duration={500}>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    fontSize: '1.1rem',
                    borderRadius: 2,
                    background: 'linear-gradient(45deg, #6B4EFF 30%, #00BFA5 90%)',
                    boxShadow: '0 4px 20px rgba(107, 78, 255, 0.3)',
                    '&:hover': {
                      background: 'linear-gradient(45deg, #4A3CDB 30%, #00897B 90%)',
                      boxShadow: '0 6px 25px rgba(107, 78, 255, 0.4)',
                    },
                  }}
                >
                  Sell My Licenses
                </Button>
              </ScrollLink>
            </motion.div>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Hero; 