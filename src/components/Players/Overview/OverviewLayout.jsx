import { Box, Typography } from '@mui/material';
import OverviewPlayer from './OverviewPlayer';
import dataOverview from './dataOverview.json';

const OverviewLayout = () => {
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
        <Typography variant="h3">Hráči</Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ' 1fr 1fr 1fr',
          gridTemplateRows: 'auto auto',
          marginTop: '1em',
          gap: '1.5em',
          paddingX: '1.5em',
        }}
      >
        {dataOverview.map((one) => {
          return <OverviewPlayer key={one.id} {...one}></OverviewPlayer>;
        })}
      </Box>
    </Box>
  );
};

export default OverviewLayout;
