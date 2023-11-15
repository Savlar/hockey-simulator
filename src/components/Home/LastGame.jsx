import { Box, Typography } from '@mui/material';

import dataLastGame from './dataLastGame.json';
import LastGameOne from './LastGameOne';

const LastGame = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          width: '100%',
          background: '#1976D2',
          textAlign: 'center',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" sx={{ color: 'white' }}>
          Minulý zápas
        </Typography>
      </Box>
      <Box
        sx={{
          width: '100%',
          height: '320px',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {dataLastGame.map((oneInfo) => {
          return <LastGameOne key={oneInfo.id} {...oneInfo} />;
        })}
      </Box>
    </Box>
  );
};

export default LastGame;
