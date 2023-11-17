import OverviewLayout from './OverviewLayout';
import { Box, Paper, Typography } from '@mui/material';

const Overview = () => {
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
          <Typography variant="h4" color={'white'}>
            Prehľad
          </Typography>
        </Box>
        <OverviewLayout></OverviewLayout>
      </Box>
    </Paper>
  );
};

export default Overview;
