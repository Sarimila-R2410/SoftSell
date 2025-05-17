import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  MenuItem,
  Paper,
  Alert,
  Grid,
  Snackbar,
} from '@mui/material';
import { motion } from 'framer-motion';
import SendIcon from '@mui/icons-material/Send';
import EmailIcon from '@mui/icons-material/Email';
import BusinessIcon from '@mui/icons-material/Business';
import DescriptionIcon from '@mui/icons-material/Description';

const licenseTypes = [
  'Microsoft Office',
  'Adobe Creative Suite',
  'Autodesk',
  'Other',
];

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    licenseType: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('idle');
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.company.trim()) {
      newErrors.company = 'Company name is required';
    }
    
    if (!formData.licenseType) {
      newErrors.licenseType = 'License type is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        licenseType: '',
        message: '',
      });
      setSnackbar({
        open: true,
        message: 'Thanks! We\'ll get back to you soon.',
        severity: 'success',
      });
    } else {
      setSubmitStatus('error');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 8,
        background: 'radial-gradient(circle at 50% 50%, rgba(107, 78, 255, 0.1), rgba(0, 191, 165, 0.05))',
      }}
    >
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h3"
            component="h2"
            align="center"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              mb: 6,
              color: '#1a237e',
            }}
          >
            Ready to Sell?
          </Typography>
          <Paper
            elevation={3}
            sx={{
              p: 4,
              borderRadius: 2,
              backgroundColor: 'white',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
              transform: 'perspective(1000px) rotateX(0deg)',
              transition: 'all 0.3s ease-in-out',
              border: '2px solid rgba(107, 78, 255, 0.1)',
              '&:hover': {
                transform: 'perspective(1000px) rotateX(2deg)',
                boxShadow: '0 12px 40px rgba(107, 78, 255, 0.15)',
                border: '2px solid rgba(107, 78, 255, 0.2)',
              },
            }}
          >
            {submitStatus === 'success' && (
              <Alert severity="success" sx={{ mb: 3, borderRadius: '12px' }}>
                Thank you for your message! We'll get back to you soon.
              </Alert>
            )}
            {submitStatus === 'error' && (
              <Alert severity="error" sx={{ mb: 3, borderRadius: '12px' }}>
                Please fix the errors in the form.
              </Alert>
            )}
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    error={!!errors.name}
                    helperText={errors.name}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(107, 78, 255, 0.1)',
                        },
                        '&.Mui-focused': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(107, 78, 255, 0.2)',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    error={!!errors.email}
                    helperText={errors.email}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(107, 78, 255, 0.1)',
                        },
                        '&.Mui-focused': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(107, 78, 255, 0.2)',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    error={!!errors.company}
                    helperText={errors.company}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(107, 78, 255, 0.1)',
                        },
                        '&.Mui-focused': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(107, 78, 255, 0.2)',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    select
                    label="License Type"
                    name="licenseType"
                    value={formData.licenseType}
                    onChange={handleChange}
                    error={!!errors.licenseType}
                    helperText={errors.licenseType}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(107, 78, 255, 0.1)',
                        },
                        '&.Mui-focused': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(107, 78, 255, 0.2)',
                        },
                      },
                    }}
                  >
                    {licenseTypes.map((type) => (
                      <MenuItem key={type} value={type}>
                        {type}
                      </MenuItem>
                    ))}
                  </TextField>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    multiline
                    rows={4}
                    label="Tell us about your software"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    error={!!errors.message}
                    helperText={errors.message}
                    variant="outlined"
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(107, 78, 255, 0.1)',
                        },
                        '&.Mui-focused': {
                          transform: 'translateY(-2px)',
                          boxShadow: '0 4px 12px rgba(107, 78, 255, 0.2)',
                        },
                      },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        type="submit"
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
                        Submit
                      </Button>
                    </motion.div>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Paper>
        </motion.div>
      </Container>
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          onClose={() => setSnackbar({ ...snackbar, open: false })}
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ContactForm; 