import React from 'react';
import { motion } from 'framer-motion';
import { Box, Typography } from '@mui/material';

const Logo3D = () => {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
      <motion.div
        initial={{ rotateX: 0, rotateY: 0 }}
        animate={{
          rotateX: [0, 360],
          rotateY: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
        }}
      >
        <Box
          sx={{
            width: 40,
            height: 40,
            position: 'relative',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Cube faces */}
          {['front', 'back', 'left', 'right', 'top', 'bottom'].map((face, index) => (
            <motion.div
              key={face}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: `linear-gradient(45deg, #6B4EFF, #00BFA5)`,
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '20px',
                fontWeight: 'bold',
                color: 'white',
                transform: `rotate${face.charAt(0).toUpperCase() + face.slice(1)}(${
                  face === 'front' ? '0deg' :
                  face === 'back' ? '180deg' :
                  face === 'left' ? '-90deg' :
                  face === 'right' ? '90deg' :
                  face === 'top' ? '-90deg' :
                  '90deg'
                }) translateZ(20px)`,
                boxShadow: '0 0 20px rgba(107, 78, 255, 0.3)',
              }}
            >
              S
            </motion.div>
          ))}
        </Box>
      </motion.div>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 'bold',
          background: 'linear-gradient(45deg, #6B4EFF 30%, #00BFA5 90%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          letterSpacing: '1px',
          textShadow: '0 2px 4px rgba(107, 78, 255, 0.2)',
        }}
      >
        SoftSell
      </Typography>
    </Box>
  );
};

export default Logo3D; 