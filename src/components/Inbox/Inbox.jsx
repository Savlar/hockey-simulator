import { Box, Typography } from '@mui/material';
import InboxMessages from './InboxMessages';

const Inbox = () => {
  return (
    <Box sx={{ width: '95%', margin: '0 auto' }} fixed>
      <Box
        sx={{
          bgcolor: '#cfe8fc',
          height: '100vh',
          marginY: '1.5em',
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
    </Box>
  );
};

export default Inbox;
