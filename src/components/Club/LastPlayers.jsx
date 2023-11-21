import { Box, Paper, Typography } from '@mui/material';
import dataLastPlayers from './dataLastPlayers';
import StarIcon from '@mui/icons-material/Star';

const LastPlayers = () => {
  return (
    <Paper
      elevation={3}
      sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Box sx={{ background: '#1976D2', p: 1 }}>
        <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
          Bývalí slávni hráčí
        </Typography>
      </Box>

      {dataLastPlayers.map((one) => {
        return (
          <Box
            key={one.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              flex: '1',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                margin: '0 auto',
                width: '196px',
                gap: '1em',
              }}
            >
              <Box>
                <StarIcon
                  sx={{ color: '#1976D2', fontSize: '2rem' }}
                ></StarIcon>
              </Box>
              <Box>
                <Typography
                  sx={{ textAlign: 'left', fontSize: '1.2rem' }}
                  variant="body1"
                >
                  {one.name}
                </Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Paper>
  );
};

export default LastPlayers;
