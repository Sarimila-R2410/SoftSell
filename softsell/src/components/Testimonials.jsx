import React from 'react';
import { Box, Typography, Grid, Paper, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Monkey D. Luffy',
    role: 'Software Developer',
    avatar: 'https://i.pravatar.cc/150?img=1',
    quote: 'SoftSell made selling my unused licenses a breeze! The process was smooth and I got a great deal.',
    gradient: 'linear-gradient(135deg, rgba(255, 87, 34, 0.1), rgba(255, 152, 0, 0.1))',
    shadowColor: 'rgba(255, 87, 34, 0.15)',
  },
  {
    name: 'Roronoa Zoro',
    role: 'IT Manager',
    avatar: 'https://i.pravatar.cc/150?img=8',
    quote: 'The platform is incredibly user-friendly. I was able to list and sell my licenses within minutes.',
    gradient: 'linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(3, 169, 244, 0.1))',
    shadowColor: 'rgba(33, 150, 243, 0.15)',
  },
  {
    name: 'Vinsmoke Saanji',
    role: 'Tech Entrepreneur',
    avatar: 'https://i.pravatar.cc/150?img=3',
    quote: 'Finding buyers for my software licenses feels like it\'s treasure hunting! The platform is amazing.',
    gradient: 'linear-gradient(135deg, rgba(156, 39, 176, 0.1), rgba(103, 58, 183, 0.1))',
    shadowColor: 'rgba(156, 39, 176, 0.15)',
  },
];

const Testimonials = () => {
  return (
    <Box 
      id="testimonials" 
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
          top: '20%',
          right: '10%',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(107, 78, 255, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '10%',
          width: '250px',
          height: '250px',
          background: 'radial-gradient(circle, rgba(0, 191, 165, 0.1) 0%, transparent 70%)',
          borderRadius: '50%',
          filter: 'blur(30px)',
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
        What Our Users Say
      </Typography>
      <Grid container spacing={4} sx={{ position: 'relative', zIndex: 1 }}>
        {testimonials.map((testimonial, index) => (
          <Grid item xs={12} md={4} key={index}>
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
                  position: 'relative',
                  background: testimonial.gradient,
                  backdropFilter: 'blur(10px)',
                  borderRadius: '20px',
                  boxShadow: `0 4px 20px ${testimonial.shadowColor}`,
                  transition: 'all 0.3s ease-in-out',
                  transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg)',
                  '&:hover': {
                    transform: 'perspective(1000px) rotateX(5deg) rotateY(5deg)',
                    boxShadow: `0 20px 40px ${testimonial.shadowColor}`,
                    '& .quote-icon': {
                      transform: 'scale(1.1) rotate(5deg)',
                      color: 'primary.main',
                    },
                    '& .avatar': {
                      transform: 'scale(1.05)',
                      boxShadow: `0 10px 20px ${testimonial.shadowColor}`,
                    },
                  },
                }}
              >
                <FormatQuoteIcon
                  className="quote-icon"
                  sx={{
                    fontSize: 40,
                    color: 'primary.light',
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    transition: 'all 0.3s ease-in-out',
                  }}
                />
                <Typography
                  variant="body1"
                  sx={{
                    mb: 3,
                    fontStyle: 'italic',
                    color: 'text.primary',
                    lineHeight: 1.6,
                    position: 'relative',
                    zIndex: 1,
                  }}
                >
                  "{testimonial.quote}"
                </Typography>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    mt: 'auto',
                  }}
                >
                  <Avatar
                    className="avatar"
                    src={testimonial.avatar}
                    sx={{
                      width: 60,
                      height: 60,
                      mr: 2,
                      transition: 'all 0.3s ease-in-out',
                      border: `2px solid ${testimonial.shadowColor}`,
                      boxShadow: `0 4px 12px ${testimonial.shadowColor}`,
                    }}
                  />
                  <Box>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        fontWeight: 'bold',
                        color: '#1a237e',
                      }}
                    >
                      {testimonial.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                    >
                      {testimonial.role}
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonials; 