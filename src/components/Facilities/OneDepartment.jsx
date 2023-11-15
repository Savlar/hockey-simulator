import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';

import Rating from '@mui/material/Rating';

const OneDepartment = ({
  title,
  img,
  header,
  text,
  stars,
  costs,
  building,
  demolishing,
}) => {
  const [value, setValue] = useState(stars);
  const [isBuilding, setIsBuilding] = useState(false);
  const [isDemolishing, setIsDemolishing] = useState(false);

  const handleUpgrade = () => {
    setValue((preValue) => preValue + 1);
    setIsBuilding((preValue) => !preValue);
  };

  const handleDemolish = () => {
    setValue((preValue) => preValue - 1);
    setIsDemolishing((preValue) => !preValue);
  };

  const handleAbort = () => {
    setIsBuilding((preValue) => !preValue);
    setValue((preValue) => preValue - 1);
  };

  const handleStop = () => {
    setIsDemolishing((preValue) => !preValue);
    setValue((preValue) => preValue + 1);
  };

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

            {isBuilding && (
              <Typography variant="body1">
                Zostáva {building * 30} dní
              </Typography>
            )}

            {isDemolishing && (
              <Typography variant="body1">
                Zostáva {demolishing * 30} dní
              </Typography>
            )}

            {!isBuilding && !isDemolishing && (
              <Typography variant="body1">{building} mesiacov</Typography>
            )}
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
        {isBuilding ? (
          <Button variant="contained" color="error" onClick={handleAbort}>
            Zrušiť
          </Button>
        ) : (
          <Button
            variant="contained"
            color="error"
            onClick={handleDemolish}
            disabled={isDemolishing}
          >
            Zbúrať
          </Button>
        )}
        {isDemolishing ? (
          <Button variant="contained" color="success" onClick={handleStop}>
            Zastaviť
          </Button>
        ) : (
          <Button
            variant="contained"
            color="success"
            onClick={handleUpgrade}
            disabled={isBuilding}
          >
            Vylepšiť
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default OneDepartment;
