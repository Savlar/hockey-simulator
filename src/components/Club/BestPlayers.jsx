import { Box, Paper, Typography } from '@mui/material';
import dataClubPlayers from './dataClubPlayers.json';

const BestPlayers = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        display: 'flex',
        height: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Box sx={{ background: '#1976D2', p: 1 }}>
        <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
          TOP Hráči
        </Typography>
      </Box>
      {dataClubPlayers.map((onePlayer) => {
        return (
          <Box
            key={onePlayer.id}
            sx={{
              display: 'flex',
              justifyContent:"center",
              flex: 1,
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingX: '0.8em',
              }}
            >
              <Typography variant="body1" sx={{ width: '118px' }}>
                {onePlayer.name}
              </Typography>
              <Typography variant="body1">{onePlayer.position}</Typography>
              <Typography variant="body1">OVR: {onePlayer.overall}</Typography>
            </Box>
          </Box>
        );
      })}
    </Paper>
  );
};

export default BestPlayers;
