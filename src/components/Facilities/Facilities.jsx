import { Box, Typography } from '@mui/material';
import Stadium from './Stadium';

const Facilities = () => {
  return (
    <Box sx={{ width: '95%', margin: '0 auto' }} fixed>
      <Box
        sx={{
          bgcolor: '#cfe8fc',
          marginY: '1.5em',
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
          <Typography variant="h4" color={'white'}>
            Zázemie klubu
          </Typography>
        </Box>
        <Stadium></Stadium>
      </Box>
    </Box>
  );
};

export default Facilities;
