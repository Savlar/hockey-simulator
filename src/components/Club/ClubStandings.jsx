import { Box, Paper, Typography } from '@mui/material';
import dataClubStandings from './dataClubStandings';

const ClubStanding = () => {
  return (
    <Paper
      elevation={3}
      sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Box sx={{ background: '#1976D2', p: 1 }}>
        <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
          Umiestnenia
        </Typography>
      </Box>

      {dataClubStandings.map((one) => {
        return (
          <Box
            key={one.id}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              flex: '1',

            }}
          >
            <Box
              sx={{
                display: 'flex',
                width: '80%',
                gap: '1em',
              }}
            >
              <Box sx={{ width: '5%' }}>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {one.standing}.
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1">{one.year}</Typography>
              </Box>
            </Box>
          </Box>
        );
      })}
    </Paper>
  );
};

export default ClubStanding;
