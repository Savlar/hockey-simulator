import { Box } from '@mui/material';
import ResultsPanel from './ResultsPanel';
import Calendar from './Calendar';
import LastFive from './LastFive';
import LastGame from './LastGame';
import Table from './Table';
import NextGame from './NextGame';
import News from './News';

const Home = () => {
  return (
    <Box sx={{ width: '95%', margin: '0 auto' }} fixed>
      <Box
        sx={{
          bgcolor: '#cfe8fc',
          marginY: '1.5em',
        }}
      >
        <ResultsPanel></ResultsPanel>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ' 0.8fr 1fr 0.8fr',
            gridTemplateRows: 'auto auto',
            marginTop: '1em',
            gap: '1em',
          }}
        >
          <Calendar></Calendar>
          <LastGame></LastGame>
          <LastFive></LastFive>
          <News></News>
          <Table></Table>
          <NextGame></NextGame>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
