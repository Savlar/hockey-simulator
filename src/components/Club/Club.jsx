import { Box } from '@mui/material';
import LastPlayers from './LastPlayers';
import BestPlayers from './BestPlayers';
import Characteristic from './Characteristic';
import ClubDescription from './ClubDescription';
import Coaches from './Coaches';
import ClubHeader from './ClubHeader';
import ClubStanding from './ClubStandings';

const Club = () => {
  return (
    <Box sx={{ width: '95%', margin: '1.5em auto', background: 'white' }} fixed>
      <Box>
        <ClubHeader></ClubHeader>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ' 1fr 0.5fr 0.5fr',
            gridTemplateRows: 'auto',
            gap: '0.7em',
            rowGap: ' 1.4em',
            marginTop: '1.5em',
          }}
        >
          <Box>
            <ClubDescription></ClubDescription>
          </Box>
          <Box>
            <Characteristic></Characteristic>
          </Box>
          <Box>
            <BestPlayers></BestPlayers>
          </Box>
          <Box>
            <Coaches></Coaches>
          </Box>
          <Box><ClubStanding></ClubStanding></Box>
          <Box>
            <LastPlayers></LastPlayers>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Club;
