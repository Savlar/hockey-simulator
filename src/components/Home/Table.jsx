import { Box, Typography } from '@mui/material';
import TableOne from './LastFiveOne';
import dataLastFive from './dataLastFive.json';

const Table = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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
          Tabuľka
        </Typography>
      </Box>
      {dataLastFive.map((oneMatch) => {
        return <TableOne key={oneMatch.id} {...oneMatch} />;
      })}
    </Box>
  );
};

export default Table;
