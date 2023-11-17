import { Box, Typography } from '@mui/material';

const TableOne = ({
  number,
  logo,
  name,
  games,
  wins,
  losses,
  winsPP,
  lossesPP,
  points,
}) => {
  return (
    <Box sx={{ display: 'flex', flex: 1 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingLeft: '0.5em',
          width: '24px',
        }}
      >
        <Typography>{number}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: '0.5em',
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
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          paddingLeft: '0.2em',
          width: '206px',
        }}
      >
        <Typography>{name}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '32px',
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingLeft: '0.8em',
        }}
      >
        <Typography>{games}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '32px',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Typography>{wins}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '32px',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Typography>{losses}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '32px',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Typography>{winsPP}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '32px',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Typography>{lossesPP}</Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          width: '32px',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Typography>{points}</Typography>
      </Box>
    </Box>
  );
};

export default TableOne;
