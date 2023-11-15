import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

import Rating from '@mui/material/Rating';

const OneStadium = ({ title, img, header, text, stars, costs, building }) => {
  const [value, setValue] = useState(stars);
  return (
    <Box sx={{ background: 'white' }}>
      <Box
        sx={{
          background: '#1976D2',
          textAlign: 'center',
          height: '50px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography variant="h5" sx={{ color: 'white' }}>
          {title}
        </Typography>
      </Box>
      <Box>
        <img
          src={img}
          alt="news"
          style={{ width: '100%', height: '240px' }}
        ></img>
      </Box>
      <Box sx={{ padding: '1em' }}>
        <Typography variant="h5">{header}</Typography>
        <Typography
          variant="body1"
          sx={{ marginTop: '1em', textAlign: 'justify' }}
        >
          {text}
        </Typography>
        <Box
          sx={{
            marginTop: '1em',
            display: 'flex',
            flexDirection: 'column',
            gap: '1em',
          }}
        >
          <Box>
            <Typography variant="h6">Úroveň:</Typography>
            <Rating name="disabled" value={value} readOnly />
          </Box>
          <Box>
            <Typography variant="h6">Cena vylepšenia:</Typography>
            <Typography variant="body1">{costs}€</Typography>
          </Box>
          <Box>
            <Typography variant="h6">Výstavba:</Typography>
            <Typography variant="body1">{building} mesiacov</Typography>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginY: '1em',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '1.5em',
        }}
      >
        <Button variant="contained" color="error">
          Zbúrať
        </Button>
        <Button variant="contained" color="success">
          Vylepšiť
        </Button>
      </Box>
    </Box>
  );
};

export default OneStadium;
