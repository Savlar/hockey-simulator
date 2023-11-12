import React from 'react';
import { Box, Typography } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import WorkIcon from '@mui/icons-material/Work';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PeopleIcon from '@mui/icons-material/People';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import AccessibilityIcon from '@mui/icons-material/Accessibility';

const icons = {
  ElectricBoltIcon,
  WorkIcon,
  InsertEmoticonIcon,
  PeopleIcon,
  ArrowUpwardIcon,
  ArrowDownwardIcon,
  AccessibilityIcon,
};

const LastGameOne = ({
  name,
  number,
  numberDifference,
  icon,
  iconDifference,
}) => {
  const iconColor =
    iconDifference === 'ArrowDownwardIcon'
      ? 'red'
      : iconDifference === 'ArrowUpwardIcon'
      ? 'green'
      : 'inherit';

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flex: '1',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
      }}
    >
      <Box sx={{ display: 'flex', flexGrow: '1' }}>
        <Box
          sx={{
            width: '40%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '0.8em',
            paddingLeft: '1.5em',
          }}
        >
          {icon &&
            React.createElement(icons[icon], {
              style: { color: '#1976D2', fontSize: '28px' },
            })}
          <Typography variant="body1" sx={{ fontSize: '20px' }}>
            {name}
          </Typography>
        </Box>
        <Box
          sx={{
            width: '30%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft: '3em',
          }}
        >
          <Typography variant="body1" sx={{ fontSize: '20px' }}>{number}</Typography>
        </Box>
        <Box
          sx={{
            width: '30%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '0.2em',
            paddingLeft: '4em',
          }}
        >
          <Typography variant="body1" sx={{ fontSize: '20px' }}>{numberDifference}</Typography>
          {iconDifference &&
            React.createElement(icons[iconDifference], {
              style: { color: iconColor, fontSize: '20px' },
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default LastGameOne;
