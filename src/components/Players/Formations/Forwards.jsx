import { Box, Typography } from '@mui/material';
import OneForward from './OneForward';
import dataForwards from './dataForwards.json';

const Forwards = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginY: '2em',
          marginLeft: '2em',
        }}
      >
        <Typography variant="h4">Útočné Formácie</Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ' 1fr 1fr 1fr',
          gridTemplateRows: 'auto auto',
          marginTop: '1em',
          gap: '3em',
          paddingX: '3em',
          // gap: '5em',
          // paddingX: "5em"
        }}
      >
        {dataForwards.map((one) => {
          return <OneForward key={one.id} {...one}></OneForward>;
        })}
      </Box>
    </Box>
  );
};

export default Forwards;
