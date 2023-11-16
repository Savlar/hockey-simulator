import { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import Stadium from './Stadium';
import Departmens from './Departments';
import { GlobalContext } from './../../App';

const Facilities = () => {
  const { money, moneyMonthly } = useContext(GlobalContext);

  const moneyTextColor = money >= 0 ? 'green' : 'red';
  const moneyMonthlyTextColor = moneyMonthly >= 0 ? 'green' : 'red';

  return (
    <Box sx={{ width: '95%', margin: '0 auto' }} fixed>
      <Box
        sx={{
          bgcolor: '#cfe8fc',
          marginY: '1.5em',
          paddingBottom: '1.5em',
        }}
      >
        <Box
          sx={{
            background: '#1976D2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            paddingY: '2em',
          }}
        >
          <Typography variant="h4" color={'white'}>
            Zázemie klubu
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '2em',
            py: '2em',
            borderBottom: '1px solid black',
          }}
        >
          <Box>
            <Typography variant="body1" sx={{ fontSize: '1.5rem' }}>
              Dostupné prostriedky:{' '}
              <span style={{ color: moneyTextColor }}>{money}€</span>
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ fontSize: '1.5rem' }}>
              Mesačná bilancia:{' '}
              <span style={{ color: moneyMonthlyTextColor }}>
                {moneyMonthly}€
              </span>
            </Typography>
          </Box>
        </Box>
        <Stadium></Stadium>
        <Departmens></Departmens>
      </Box>
    </Box>
  );
};

export default Facilities;
