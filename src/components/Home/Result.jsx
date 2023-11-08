import { Box, Tooltip, Typography } from '@mui/material';

const Result = ({
  homeName,
  homeLogo,
  homeScore,
  awayName,
  awayLogo,
  awayScore,
}) => {
  return (
    <Box
      sx={{
        flex: 1,
        textAlign: 'center',
        background: '#1976D2',
        padding: '10px',
        border: '1px solid white',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '90%',
        }}
      >
        <Tooltip title={homeName} arrow>
          <Box sx={{ width: '38px', height: 'auto' }}>
            <img
              style={{ height: '100%', width: '100%' }}
              src={homeLogo}
              alt="logo"
            ></img>
          </Box>
        </Tooltip>
        <Box>
          <Typography variant="h5" sx={{ color: 'white' }}>
            {homeScore}:{awayScore}
          </Typography>
        </Box>
        <Tooltip title={awayName} arrow>
          <Box sx={{ width: '38px', height: 'auto' }}>
            <img
              style={{ height: '100%', width: '100%' }}
              src={awayLogo}
              alt="logo"
            ></img>
          </Box>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default Result;
