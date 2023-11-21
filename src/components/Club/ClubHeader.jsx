import { Box, Paper, Typography } from '@mui/material';

const ClubHeader = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        background: '#1976D2',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        paddingY: '2em',
        gap: '1em',
        marginBottom: '1em',
      }}
    >
      <Box sx={{ width: '62px', height: 'auto' }}>
        <img
          style={{ height: '100%', width: '100%' }}
          src="/images/logo-nitra.png"
          alt="logo"
        ></img>
      </Box>
      <Box>
        <Typography variant="h2" color={'white'}>
          HK NITRA
        </Typography>
      </Box>
    </Paper>
  );
};

export default ClubHeader;
