import { Box, Paper, Typography } from '@mui/material';
import dataCoaches from './dataCoaches.json';

const OneCoach = () => {
  return (
    <Box
      sx={{
        background: 'white',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateRows: 'auto auto',
        gap: '1em',
        rowGap: '1em',
      }}
    >
      {dataCoaches.map((one) => (
        <Paper elevation={3} key={one.id}>
          <Box
            sx={{
              background: '#1976D2',
              textAlign: 'center',
              height: '50px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Typography variant="h5" sx={{ color: 'white' }}>
              {one.title}
            </Typography>
          </Box>
          <Box>
            <img
              src={one.img}
              alt="player-photo"
              style={{ width: '100%', height: 'auto' }}
            />
            <Box>
              <Box
                sx={{
                  textAlign: 'center',
                  height: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Typography variant="h5" sx={{ color: 'black' }}>
                  {one.name}
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  marginTop: '0.5em',
                  px: '1.5em',
                  paddingBottom: '1.5em',
                }}
              >
                <Typography>Vek: {one.age}</Typography>
                <Typography>Od roku: {one.year}</Typography>
              </Box>
            </Box>
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default OneCoach;
