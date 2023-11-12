import React from 'react';
import { Box, Typography } from '@mui/material';
import ElectricBoltIcon from '@mui/icons-material/ElectricBolt';
import WorkIcon from '@mui/icons-material/Work';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import PeopleIcon from '@mui/icons-material/People';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const icons = {
  ElectricBoltIcon,
  WorkIcon,
  InsertEmoticonIcon,
  PeopleIcon,
  ArrowUpwardIcon,
  ArrowDownwardIcon,
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
            gap: '0.5em',
            paddingLeft: '1.8em',
          }}
        >
          {icon &&
            React.createElement(icons[icon], {
              style: { color: 'black', fontSize: '28px' },
            })}
          <Typography variant="body1">{name}</Typography>
        </Box>
        <Box
          sx={{
            width: '30%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            paddingLeft: '1.5em',
          }}
        >
          <Typography variant="body1">{number}</Typography>
        </Box>
        <Box
          sx={{
            width: '30%',
            display: 'flex',
            justifyContent: 'flex-start',
            alignItems: 'center',
            gap: '0.2em',
            paddingLeft: '1.7em',
          }}
        >
          <Typography variant="body1">{numberDifference}</Typography>
          {iconDifference &&
            React.createElement(icons[iconDifference], {
              style: { color: iconColor, fontSize: '18px' },
            })}
        </Box>
      </Box>
    </Box>
  );
};

export default LastGameOne;
