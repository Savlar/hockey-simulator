import React from 'react';
import { Box, Paper, Typography } from '@mui/material';
import dataCharacteristic from './dataCharacteristic.json';
import PeopleIcon from '@mui/icons-material/People';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import SchoolIcon from '@mui/icons-material/School';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

const icons = {
  PeopleIcon,
  AccessibilityIcon,
  SchoolIcon,
  ThumbUpAltIcon,
  AssignmentIndIcon,
};

const Characteristic = () => {
  return (
    <Paper
      elevation={3}
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <Box sx={{ background: '#1976D2', p: 1 }}>
        <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
          Charakteristika
        </Typography>
      </Box>
      {dataCharacteristic.map((item) => {
        return (
          <Box
            key={item.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              flex: 1,
              justifyContent: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                gap: '0.5em',
                paddingX: '2.2em',
              }}
            >
              <Box>
                {item.icon &&
                  React.createElement(icons[item.icon], {
                    style: { color: '#1976D2', fontSize: '28px' },
                  })}
              </Box>
              <Box>
                <Typography
                  variant="body1"
                  sx={{ width: '172px', fontSize: '1.2rem' }}
                >
                  {item.name}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Paper>
  );
};

export default Characteristic;
