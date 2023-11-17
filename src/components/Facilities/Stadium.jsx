import { Box, Typography } from '@mui/material';
import OneStadium from './OneStadium';
import dataStadium from './dataStadium.json';

const Stadium = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginY: '2em',
          marginLeft: '2em',
        }}
      >
        <Typography variant="h4">Štadión</Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ' 1fr 1fr 1fr',
          gridTemplateRows: 'auto auto',
          marginTop: '1em',
          gap: '1em',
          paddingX:"1em"
        }}
      >
        {dataStadium.map((one) => {
          return <OneStadium key={one.id} {...one}></OneStadium>;
        })}
      </Box>
    </Box>
  );
};

export default Stadium;
