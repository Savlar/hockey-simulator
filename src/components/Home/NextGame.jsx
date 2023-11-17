import { Box, Tooltip, Typography } from '@mui/material';
import PrivacyTipIcon from '@mui/icons-material/PrivacyTip';

const NextGame = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          width: '100%',
          background: '#1976D2',
          textAlign: 'center',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" sx={{ color: 'white' }}>
          Nasledujúci zápas
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'white',
            flex: '1',
            width: '100%',
            gap: '2.3em',
            borderBottom: '1px solid #1976D2',
          }}
        >
          <Tooltip title="Slovan" arrow>
            <Box sx={{ width: '86px', height: 'auto' }}>
              <img
                style={{ height: '100%', width: '100%' }}
                src="/images/logo-slovan.png"
                alt="logo"
              ></img>
            </Box>
          </Tooltip>
          <Box>
            <Typography
              variant="body1"
              sx={{
                color: 'black',
                fontSize: '56px',
              }}
            >
              0:0
            </Typography>
          </Box>
          <Tooltip title="Nitra" arrow>
            <Box sx={{ width: '82px', height: 'auto' }}>
              <img
                style={{ height: '100%', width: '100%' }}
                src="/images/logo-nitra.png"
                alt="logo"
              ></img>
            </Box>
          </Tooltip>
        </Box>
      </Box>
      <Box>
        <Box
          sx={{
            background: 'white',
            display: 'flex',
            paddingLeft: '1em',
            py: '0.5em',
            alignItems: 'center',
            gap: '0.2em',
          }}
        >
          <PrivacyTipIcon sx={{ color: 'green' }}></PrivacyTipIcon>
          <Typography variant="body1">Máme fyzicky navrh</Typography>
        </Box>
        <Box
          sx={{
            background: 'white',
            display: 'flex',
            paddingLeft: '1em',
            py: '0.5em',
            alignItems: 'center',
            gap: '0.2em',
          }}
        >
          <PrivacyTipIcon sx={{ color: 'green' }}></PrivacyTipIcon>
          <Typography variant="body1">
            Máme lepšiu streleckú efektivitu
          </Typography>
        </Box>
        <Box
          sx={{
            background: 'white',
            display: 'flex',
            paddingLeft: '1em',
            py: '0.5em',
            alignItems: 'center',
            gap: '0.2em',
          }}
        >
          <PrivacyTipIcon sx={{ color: 'green' }}></PrivacyTipIcon>
          <Typography variant="body1">Súper má nižšiu morálku</Typography>
        </Box>
        <Box
          sx={{
            background: 'white',
            display: 'flex',
            paddingLeft: '1em',
            py: '0.5em',
            alignItems: 'center',
            gap: '0.2em',
          }}
        >
          <PrivacyTipIcon sx={{ color: 'green' }}></PrivacyTipIcon>
          <Typography variant="body1">Máme lepšiu formu</Typography>
        </Box>
        <Box
          sx={{
            background: 'white',
            display: 'flex',
            paddingLeft: '1em',
            py: '0.5em',
            alignItems: 'center',
            gap: '0.2em',
          }}
        >
          <PrivacyTipIcon sx={{ color: 'orange' }}></PrivacyTipIcon>
          <Typography variant="body1">
            Kvalita brankárov je vyrovnaná
          </Typography>
        </Box>
        <Box
          sx={{
            background: 'white',
            display: 'flex',
            paddingLeft: '1em',
            py: '0.5em',
            alignItems: 'center',
            gap: '0.2em',
          }}
        >
          <PrivacyTipIcon sx={{ color: 'orange' }}></PrivacyTipIcon>
          <Typography variant="body1">Podobná kvalita trénerov</Typography>
        </Box>
        <Box
          sx={{
            background: 'white',
            display: 'flex',
            paddingLeft: '1em',
            py: '0.5em',
            alignItems: 'center',
            gap: '0.2em',
          }}
        >
          <PrivacyTipIcon sx={{ color: 'red' }}></PrivacyTipIcon>
          <Typography variant="body1">
            Súper má papierovo lepšiu obranu
          </Typography>
        </Box>
        <Box
          sx={{
            background: 'white',
            display: 'flex',
            paddingLeft: '1em',
            py: '0.5em',
            alignItems: 'center',
            gap: '0.2em',
          }}
        >
          <PrivacyTipIcon sx={{ color: 'red' }}></PrivacyTipIcon>
          <Typography variant="body1">
            Súper bude po vysokej prehre nabudený
          </Typography>
        </Box>
        <Box
          sx={{
            background: 'white',
            display: 'flex',
            paddingLeft: '1em',
            py: '0.5em',
            alignItems: 'center',
            gap: '0.2em',
          }}
        >
          <PrivacyTipIcon sx={{ color: 'red' }}></PrivacyTipIcon>
          <Typography variant="body1">Súper má lepšiu disciplínu</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: '100%',
          background: '#1976D2',
          textAlign: 'center',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      ></Box>
    </Box>
  );
};

export default NextGame;
