import * as React from 'react';
import { Box, Paper, Tab, Tabs, Typography } from '@mui/material';
import PropTypes from 'prop-types';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function News() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Paper elevation={3}>
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
          Novinky
        </Typography>
      </Box>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}></Box>
        <CustomTabPanel value={value} index={0}>
          {/* 1 */}
          <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>
                <img
                  src="/images/news2.jpg"
                  alt="news"
                  style={{ width: '100%', height: '240px' }}
                ></img>
              </Box>
              <Box sx={{ p: '1em', height: '280px' }}>
                <Typography>
                  Hokejisti Dukly Trenčín zdolali v nedeľňajšom zápase 17. kola
                  Tipos extraligy veľkého rivala HC Slovan Bratislava
                  presvedčivo 5:1. Trenčania sa po štvrtom víťazstve za sebou
                  posunuli v tabuľke na 8. miesto. &quot;Vojaci&quot; položili
                  základ úspechu v prvej tretine dvoma strelenými gólmi v
                  rozmedzí 76 sekúnd. V 22. minúte ešte znížil Brown, no Giľák,
                  Conway a znovu Giľák spečatili cenný triumf.
                </Typography>
              </Box>
            </Box>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          {/* 2 */}
          <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>
                <img
                  src="/images/news1.jpg"
                  alt="news"
                  style={{ width: '100%', height: '240px' }}
                ></img>
              </Box>
              <Box>
                <Typography sx={{ p: '1em', height: '280px' }}>
                  Hokejisti Zvolena v nedeľňajšom zápase 17. kola Tipos
                  extraligy podľahli na svojom ľade Nitre 5:7 a stratili druhú
                  priečku v tabuľke. Nepomohla im za stavu 0:3 ani výmena
                  brankára. Hráči spod Zobora dvakrát viedli v stretnutí
                  trojgólovým rozdielom, lenže domáci vyrovnali na 5:5. Záver
                  duelu však napokon nezvládli.
                </Typography>
              </Box>
            </Box>
          </Box>
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          {/* 3 */}
          <Box>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
              <Box>
                <img
                  src="/images/news3.jpg"
                  alt="news"
                  style={{ width: '100%', height: '240px' }}
                ></img>
              </Box>
              <Box>
                <Typography sx={{ p: '1em', height: '280px' }}>
                  Američan Todd Bjorkstrand sa stal novým trénerom hokejistov HK
                  Poprad. Na striedačke účastníka Tipos extraligy nahradil Čecha
                  Aleša Tottera, ktorý v tíme skončil vo štvrtok po vzájomnej
                  dohode. Tím spod Tatier nepodáva v tejto sezóne presvedčivé
                  výkony, v sedemnástich odohraných zápasoch zvíťazil len
                  sedemkrát a s 21 bodmi figuruje na 9. priečke dvanásťčlennej
                  tabuľky.
                </Typography>
              </Box>
            </Box>
          </Box>
        </CustomTabPanel>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{ display: 'flex' }}
        >
          <Tab
            sx={{
              fontSize: '10px',
              flex: '1',
              color: 'black',
            }}
            label="Slovan prehral"
            {...a11yProps(0)}
          />
          <Tab
            sx={{
              fontSize: '10px',
              flex: '1',
              color: 'black',
            }}
            label="Nitra vítazne"
            {...a11yProps(1)}
          />
          <Tab
            sx={{
              fontSize: '10px',
              flex: '1',
              color: 'black',
            }}
            label="Zmena trénera"
            {...a11yProps(2)}
          />
        </Tabs>
      </Box>
    </Paper>
  );
}
