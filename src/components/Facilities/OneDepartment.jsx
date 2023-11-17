import { useContext } from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@mui/material';
import { GlobalContext } from './../../App';

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
  monthlyCosts,
}) => {
  const [value, setValue] = useState(stars);
  const [isBuilding, setIsBuilding] = useState(false);
  const [isDemolishing, setIsDemolishing] = useState(false);
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const { money, setMoney, moneyMonthly, setMoneyMonthly } =
    useContext(GlobalContext);

  const handleUpgrade = () => {
    setValue((preValue) => preValue + 1);
    setIsBuilding((preValue) => !preValue);
    setMoney((preValue) => preValue - parseInt(costs.replace(/\s/g, ''), 10));
    setMoneyMonthly(
      (preValue) => preValue - parseInt(monthlyCosts.replace(/\s/g, ''), 10)
    );
  };

  const handleDemolish = () => {
    setValue((preValue) => preValue - 1);
    setIsDemolishing((preValue) => !preValue);
  };

  const handleAbort = () => {
    setIsBuilding((preValue) => !preValue);
    setValue((preValue) => preValue - 1);
    setMoney((preValue) => preValue + parseInt(costs.replace(/\s/g, ''), 10));
    setMoneyMonthly(
      (preValue) => preValue + parseInt(monthlyCosts.replace(/\s/g, ''), 10)
    );
  };

  const handleStop = () => {
    setIsDemolishing((preValue) => !preValue);
    setValue((preValue) => preValue + 1);
  };

  const handleInfoClick = () => {
    setInfoModalOpen(true);
  };

  const handleInfoClose = () => {
    setInfoModalOpen(false);
  };

  const handleUpgradeAndInfo = () => {
    handleInfoClick();
    handleUpgrade();
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
            <Typography variant="h6">Mesačné náklady:</Typography>
            <Typography variant="body1">{monthlyCosts}€</Typography>
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
            onClick={handleUpgradeAndInfo}
            disabled={isBuilding}
          >
            Vylepšiť
          </Button>
        )}
      </Box>
      {/* Information Modal */}
      <Dialog open={isInfoModalOpen} onClose={handleInfoClose}>
        <DialogTitle sx={{ background: '#1976D2', color: 'white' }}>
          {title}
        </DialogTitle>
        <DialogContent>
          <Typography
            variant="body1"
            sx={{ textAlign: 'justify', paddingY: '1.5em' }}
          >
            {title} sa navýši o 1 úroveň Celková čiastka vylepšenia je {costs}€
            Vylepšenie bude dokončené o {building * 30} dní. Váš súčasný
            zostatok v klubovej kase je {money}€. Mesačná bilancia klubu je{' '}
            {moneyMonthly}€. Vylepšenie môžete v prvý deň zrušit bez
            penalizácie.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleInfoClose} color="primary">
            Zavrieť
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default OneDepartment;
