import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SearchIcon from '@mui/icons-material/Search';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import PaymentsIcon from '@mui/icons-material/Payments';

const steps = [
  {
    icon: <SearchIcon sx={{ fontSize: 40 }} />,
    title: 'List Your Licenses',
    description: 'Enter your software license details and get an instant valuation. Our AI-powered system ensures accurate pricing.',
    color: '#6B4EFF',
  },
  {
    icon: <CompareArrowsIcon sx={{ fontSize: 40 }} />,
    title: 'Compare Offers',
    description: 'Review multiple offers from verified buyers. Choose the best deal that matches your requirements.',
    color: '#00BFA5',
  },
  {
    icon: <PaymentsIcon sx={{ fontSize: 40 }} />,
    title: 'Get Paid Instantly',
    description: 'Complete the transfer and receive payment within hours. Secure, fast, and hassle-free transactions.',
    color: '#FF6B6B',
  },
];

const HowItWorks = () => {
  return (
    <Box id="how-it-works" sx={{ py: 8, position: 'relative', overflow: 'hidden' }}>
      {/* Background gradient effect */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'radial-gradient(circle at 50% 50%, rgba(107, 78, 255, 0.1), rgba(0, 191, 165, 0.05))',
          zIndex: 0,
        }}
      />

      <Typography
        variant="h3"
        component="h2"
        align="center"
        gutterBottom
        sx={{
          mb: 6,
          position: 'relative',
          zIndex: 1,
          fontWeight: 700,
          background: 'linear-gradient(45deg, #6B4EFF 30%, #00BFA5 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
      >
        How It Works
      </Typography>

      <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
        {steps.map((step, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,255,255,0.7))',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  transition: 'all 0.3s ease-in-out',
                  border: '1px solid rgba(107, 78, 255, 0.1)',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)',
                    boxShadow: '0 20px 40px rgba(107, 78, 255, 0.15)',
                    border: '1px solid rgba(107, 78, 255, 0.2)',
                  },
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                      background: `linear-gradient(135deg, ${step.color} 0%, ${step.color}80 100%)`,
                      boxShadow: `0 8px 32px ${step.color}40`,
                    }}
                  >
                    {step.icon}
                  </Box>
                </motion.div>

                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{
                    fontWeight: 600,
                    mb: 2,
                    background: `linear-gradient(45deg, ${step.color} 30%, ${step.color}80 90%)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {step.title}
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.secondary',
                    lineHeight: 1.8,
                    fontSize: '1.1rem',
                  }}
                >
                  {step.description}
                </Typography>

                {/* Decorative elements */}
                <Box
                  sx={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    background: `radial-gradient(circle at 50% 50%, ${step.color}10 0%, transparent 70%)`,
                    opacity: 0,
                    transition: 'opacity 0.3s ease-in-out',
                    '&:hover': {
                      opacity: 1,
                    },
                  }}
                />
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Connecting line between steps */}
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '10%',
          right: '10%',
          height: 2,
          background: 'linear-gradient(90deg, #6B4EFF, #00BFA5, #FF6B6B)',
          opacity: 0.2,
          zIndex: 0,
          display: { xs: 'none', md: 'block' },
        }}
      />
    </Box>
  );
};

export default HowItWorks; 