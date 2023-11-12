import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Box, Typography } from '@mui/material';

const LastFiveOne = ({
  date,
  place,
  logo,
  name,
  homeScore,
  awayScore,
  weWon,
}) => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flex: '1',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'white',
      }}
    >
      <Box
        sx={{
          width: '30%',
          textAlign: 'center',
        }}
      >
        <Typography variant="body1" sx={{ fontSize: '18px' }}>
          {date}
        </Typography>
      </Box>
      <Box sx={{ width: '5%', textAlign: 'center', paddingLeft: '0.6em' }}>
        <Typography variant="body1" sx={{ fontSize: '18px' }}>
          {place}
        </Typography>
      </Box>
      <Box
        sx={{
          width: '40%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: '25px',
          gap: '0.3em',
        }}
      >
        <Box
          sx={{
            width: '32px',
            height: 'auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <img
            style={{ height: '100%', width: '100%' }}
            src={logo}
            alt="logo"
          ></img>
        </Box>
        <Box>
          <Typography variant="body1" sx={{ fontSize: '18px' }}>
            {name}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: '25%',
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          gap: '0.2em',
          paddingLeft: '20px',
        }}
      >
        <Typography variant="body1" sx={{ fontSize: '18px' }}>
          {homeScore}:{awayScore}
        </Typography>
        <FiberManualRecordIcon
          sx={{ width: '12px', color: `${weWon ? 'green' : 'red'}` }}
        ></FiberManualRecordIcon>
      </Box>
    </Box>
  );
};

export default LastFiveOne;
