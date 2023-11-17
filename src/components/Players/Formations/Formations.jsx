import { Box, Paper, Typography } from '@mui/material';
import Forwards from './Forwards';

const Formations = () => {
  return (
    <Paper elevation={3} sx={{ width: '95%', margin: '1.5em auto' }} fixed>
      <Box
        sx={{
          paddingBottom: '1.5em',
        }}
      >
        <Box
          sx={{
            background: '#1976D2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingY: '2em',
          }}
        >
          <Typography variant="h2" color={'white'}>
            Formácie
          </Typography>
        </Box>
        <Forwards></Forwards>
      </Box>
    </Paper>
  );
};

export default Formations;
