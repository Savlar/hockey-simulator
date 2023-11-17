import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { Paper } from '@mui/material';

export default function Navbar() {
  return (
    <Paper elevation={3} sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ padding: '0.8em 0em' }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignContent: 'center',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
              gap: '1em',
            }}
          >
            <Typography
              variant="h3"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: 'block', textAlign: 'center' }}
            >
              Tipsport Liga
            </Typography>
            <Box sx={{ width: '36px', height: 'auto' }}>
              <img
                style={{ height: '100%', width: '100%' }}
                src="/images/logo-tipos-liga.png"
                alt="logo"
              ></img>
            </Box>
          </Box>
          <Box sx={{ width: '64px', height: 'auto' }}>
            <img
              style={{ height: '100%', width: '100%' }}
              src="/images/logo-nitra.png"
              alt="logo"
            ></img>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1em' }}>
            <Box sx={{ display: 'flex', gap: '1em' }}>
              <Button
                variant="contained"
                size="large"
                color="secondary"
                endIcon={<CalendarTodayIcon />}
              >
                5.11.2023
              </Button>
              <Button
                variant="contained"
                color="success"
                size="large"
                endIcon={<SendIcon />}
              >
                Ďalej
              </Button>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Paper>
  );
}
