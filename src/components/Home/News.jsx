import { Box, Typography } from '@mui/material';

const News = () => {
  return (
    <Box>
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
          Novinky
        </Typography>
      </Box>
    </Box>
  );
};

export default News;
