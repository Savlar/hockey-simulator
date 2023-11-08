import { Box } from '@mui/material';
import ResultsPanel from './ResultsPanel';
import Calendar from './Calendar';
import LastFive from './LastFive';
import LastGame from './LastGame';
import Table from './Table';

const Home = () => {
  return (
    <Box sx={{ width: '95%', margin: '0 auto' }} fixed>
      <Box
        sx={{
          bgcolor: '#cfe8fc',
          height: '100vh',
          marginY: '1.5em',
        }}
      >
        <ResultsPanel></ResultsPanel>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ' 1fr 1fr 1fr',
            gridTemplateRows: 'auto auto',
            marginTop: '1em',
            gap: '1em',
          }}
        >
          <Calendar></Calendar>
          <LastGame></LastGame>
          <LastFive></LastFive>

          <Box sx={{ background: 'pink' }}>dsad</Box>
          <Box sx={{ background: 'black' }}>dasd</Box>
          <Box sx={{ background: 'green' }}>
            <Table></Table>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
