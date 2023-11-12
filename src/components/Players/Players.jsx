import { Box, Container } from '@mui/material';
import TablePlayers from './TablePlayers';

const Players = () => {
  return (
    <Container fixed>
      <Box sx={{ bgcolor: '#cfe8fc', height: '100vh', marginY: '3em' }}>
        <TablePlayers></TablePlayers>
      </Box>
    </Container>
  );
};

export default Players;
