import { Box, Paper, Typography } from '@mui/material';

const ClubDescription = () => {
  return (
    <Paper elevation={3}>
      <Box sx={{ background: '#1976D2', p: 1 }}>
        <Typography variant="h5" sx={{ textAlign: 'center', color: 'white' }}>
          Informácie
        </Typography>
      </Box>
      <Box sx={{ p: '2.5em' }}>
        <Typography sx={{ textAlign: 'justify', lineHeight: '1.5em' }}>
          HK Nitra je slovenský hokejový extraligový klub. Je držiteľom
          majstrovského titulu a je víťaz Vyšehradského poháru. Hokejový klub
          založili v roku 1931, ale od roku 1925 sa tam hral bandy hokej. Do
          roku 1945 sa klub nazýval AC Nitra. Neskôr prechádzal častými zmenami
          názvov, od Sokola cez Komunálny podnik, Spojené závody, Slavoj,
          Slovan. Od sezóny 2012/2013 majú výkony HK Nitra stúpajúcu tendenciu.
          Nitrania sa postupne umiestnili na treťom , druhom , treťom a napokon
          na vytúženom prvom mieste. V sezóne 2015/2016 získala Nitra premiérový
          titul , čo možno označiť za najväčší úspech Nitrianskeho hokeja. Nitra
          sa navyše od sezóny 2015/2016 objavila aj v prestížnej Hokejovej lige
          majstrov, kde vyhrala skupinu a postúpila do Play-Off.
        </Typography>
      </Box>
    </Paper>
  );
};

export default ClubDescription;
