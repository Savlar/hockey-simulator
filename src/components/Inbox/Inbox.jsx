import { Box, Paper, Typography } from '@mui/material';
import InboxMessages from './InboxMessages';

const Inbox = () => {
  return (
    <Paper elevation={3} sx={{ width: '95%', margin: '1.5em auto' }} fixed>
      <Box
        sx={{
          bgcolor: '#cfe8fc',
          height: '100vh',
        }}
      >
        <Box
          sx={{
            background: '#1976D2',
            height: '10%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h4" color={'white'}>
            Pošta
          </Typography>
        </Box>
        <Box>
          <InboxMessages></InboxMessages>
        </Box>
      </Box>
    </Paper>
  );
};

export default Inbox;
