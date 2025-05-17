import React, { useState, useRef, useEffect } from 'react';
import { Box, Paper, IconButton, TextField, Typography, Collapse, Chip } from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { motion, AnimatePresence } from 'framer-motion';

const exampleQuestions = [
  'How do I sell my license?',
  'What types of licenses do you accept?',
  'How long does the process take?',
  'What documents do I need?',
];

const responses = {
  'How do I sell my license?': 'To sell your license, simply fill out our contact form with your license details. Our team will review your submission and provide you with a competitive offer within 24 hours. The process is quick and secure!',
  'What types of licenses do you accept?': 'We accept a wide range of software licenses including Microsoft Office, Adobe Creative Suite, Autodesk, and many other major software providers. If you have a specific license, feel free to ask!',
  'How long does the process take?': 'The entire process typically takes 24-48 hours from submission to payment. We work quickly to ensure you get paid as soon as possible for your unused licenses.',
  'What documents do I need?': 'You\'ll need your license key, proof of purchase, and any relevant documentation that shows you\'re the legal owner of the license. We\'ll guide you through the specific requirements.',
  'default': 'I understand you\'re asking about software licenses. Could you please provide more specific details about your question? I\'m here to help you with the selling process, license types, documentation, or any other concerns you might have.',
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages(prev => [...prev, userMessage]);
    setInput('');

    // Simulate AI response
    setTimeout(() => {
      const response = responses[input] || responses.default;
      const aiResponse = {
        text: response,
        sender: 'ai',
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleQuestionClick = (question) => {
    setInput(question);
    handleSend();
  };

  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        zIndex: 1000,
      }}
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <Paper
              elevation={3}
              sx={{
                width: 350,
                height: 500,
                display: 'flex',
                flexDirection: 'column',
                mb: 2,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(107, 78, 255, 0.1)',
                overflow: 'hidden',
              }}
            >
              <Box 
                sx={{ 
                  p: 2, 
                  background: 'linear-gradient(45deg, #6B4EFF 30%, #00BFA5 90%)',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h6" sx={{ fontWeight: 600 }}>Chat with us</Typography>
                <IconButton 
                  size="small" 
                  onClick={() => setIsOpen(false)} 
                  sx={{ 
                    color: 'white',
                    '&:hover': {
                      background: 'rgba(255, 255, 255, 0.1)',
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              
              <Box 
                sx={{ 
                  flex: 1, 
                  overflow: 'auto', 
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 2,
                }}
              >
                {messages.length === 0 && (
                  <Box sx={{ textAlign: 'center', py: 2 }}>
                    <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                      How can we help you today?
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center' }}>
                      {exampleQuestions.map((question, index) => (
                        <Chip
                          key={index}
                          label={question}
                          onClick={() => handleQuestionClick(question)}
                          sx={{
                            background: 'linear-gradient(45deg, rgba(107, 78, 255, 0.1), rgba(0, 191, 165, 0.1))',
                            border: '1px solid rgba(107, 78, 255, 0.2)',
                            '&:hover': {
                              background: 'linear-gradient(45deg, rgba(107, 78, 255, 0.2), rgba(0, 191, 165, 0.2))',
                            },
                          }}
                        />
                      ))}
                    </Box>
                  </Box>
                )}
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: message.sender === 'user' ? 'flex-end' : 'flex-start',
                      }}
                    >
                      <Paper
                        sx={{
                          p: 1.5,
                          maxWidth: '80%',
                          background: message.sender === 'user' 
                            ? 'linear-gradient(45deg, #6B4EFF 30%, #00BFA5 90%)'
                            : 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.7))',
                          color: message.sender === 'user' ? 'white' : 'text.primary',
                          borderRadius: '12px',
                          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                          border: message.sender === 'user' 
                            ? 'none'
                            : '1px solid rgba(107, 78, 255, 0.1)',
                        }}
                      >
                        <Typography variant="body2">{message.text}</Typography>
                      </Paper>
                    </Box>
                  </motion.div>
                ))}
                <div ref={messagesEndRef} />
              </Box>

              <Box 
                sx={{ 
                  p: 2, 
                  borderTop: '1px solid rgba(107, 78, 255, 0.1)',
                  background: 'rgba(255, 255, 255, 0.8)',
                }}
              >
                <TextField
                  fullWidth
                  size="small"
                  placeholder="Type your message..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.9)',
                      '&:hover fieldset': {
                        borderColor: '#6B4EFF',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#00BFA5',
                      },
                    },
                  }}
                  InputProps={{
                    endAdornment: (
                      <IconButton 
                        onClick={handleSend} 
                        sx={{ 
                          color: '#6B4EFF',
                          '&:hover': {
                            background: 'rgba(107, 78, 255, 0.1)',
                          },
                        }}
                      >
                        <SendIcon />
                      </IconButton>
                    ),
                  }}
                />
              </Box>
            </Paper>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <IconButton
          onClick={() => setIsOpen(!isOpen)}
          sx={{
            background: 'linear-gradient(45deg, #6B4EFF 30%, #00BFA5 90%)',
            color: 'white',
            boxShadow: '0 4px 12px rgba(107, 78, 255, 0.3)',
            '&:hover': {
              background: 'linear-gradient(45deg, #4A3CDB 30%, #00897B 90%)',
              boxShadow: '0 6px 16px rgba(107, 78, 255, 0.4)',
            },
          }}
        >
          <ChatIcon />
        </IconButton>
      </motion.div>
    </Box>
  );
};

export default ChatWidget; 