import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { motion } from 'framer-motion';

const benefits = [
  {
    icon: <SecurityIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    title: 'Secure Process',
    description: 'Bank-level security ensures your license information is always protected.',
    gradient: 'linear-gradient(135deg, rgba(107, 78, 255, 0.1), rgba(0, 191, 165, 0.1))',
  },
  {
    icon: <SpeedIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    title: 'Fast Transactions',
    description: 'Complete the entire process in minutes, not days.',
    gradient: 'linear-gradient(135deg, rgba(0, 191, 165, 0.1), rgba(107, 78, 255, 0.1))',
  },
  {
    icon: <AttachMoneyIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    title: 'Best Market Rates',
    description: 'Get the highest possible value for your software licenses.',
    gradient: 'linear-gradient(135deg, rgba(107, 78, 255, 0.1), rgba(0, 191, 165, 0.1))',
  },
  {
    icon: <SupportAgentIcon sx={{ fontSize: 50, color: 'primary.main' }} />,
    title: '24/7 Support',
    description: 'Our expert team is always available to assist you.',
    gradient: 'linear-gradient(135deg, rgba(0, 191, 165, 0.1), rgba(107, 78, 255, 0.1))',
  },
];

const WhyChooseUs = () => {
  return (
    <Box 
      id="why-choose-us" 
      sx={{ 
        py: 8,
        background: 'radial-gradient(circle at 50% 50%, rgba(107, 78, 255, 0.05), rgba(0, 191, 165, 0.05))',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '5%',
          width: '200px',
          height: '200px',
          background: 'radial-gradient(circle, rgba(107, 78, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(20px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '5%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(0, 191, 165, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(20px)',
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
          color: '#1a237e',
          fontWeight: 'bold',
          position: 'relative',
          zIndex: 1,
        }}
      >
        Why Choose Us
      </Typography>
      <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  background: benefit.gradient,
                  borderRadius: '20px',
                  border: '1px solid rgba(107, 78, 255, 0.1)',
                  transition: 'all 0.3s ease-in-out',
                  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)',
                    boxShadow: '0 20px 40px rgba(107, 78, 255, 0.15)',
                    border: '1px solid rgba(107, 78, 255, 0.2)',
                    '& .icon-wrapper': {
                      transform: 'scale(1.1) rotate(5deg)',
                      background: 'rgba(107, 78, 255, 0.1)',
                    },
                  },
                }}
              >
                <Box
                  className="icon-wrapper"
                  sx={{
                    p: 2,
                    borderRadius: '50%',
                    transition: 'all 0.3s ease-in-out',
                    mb: 2,
                  }}
                >
                  {benefit.icon}
                </Box>
                <Typography 
                  variant="h6" 
                  component="h3" 
                  sx={{ 
                    mb: 2,
                    color: '#1a237e',
                    fontWeight: 'bold',
                  }}
                >
                  {benefit.title}
                </Typography>
                <Typography 
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.6,
                  }}
                >
                  {benefit.description}
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default WhyChooseUs; 