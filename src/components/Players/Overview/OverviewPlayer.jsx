import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Typography,
} from '@mui/material';
import { useState } from 'react';

const OverviewPlayer = ({
  name,
  img,
  playerType,
  attributes,
  nationality,
  club,
  factors,
  properties,
  shooting,
  skating,
  passing,
  hands,
  defense,
  physical,
}) => {
  const [isInfoModalOpen, setInfoModalOpen] = useState(false);
  const handleInfoClick = () => {
    setInfoModalOpen(true);
  };

  const handleInfoClose = () => {
    setInfoModalOpen(false);
  };

  return (
    <Paper elevation={3} sx={{ background: 'white' }}>
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
          {playerType}
        </Typography>
      </Box>
      <Box>
        <img
          src={img}
          alt="player-photo"
          style={{ width: '100%', height: 'auto' }}
        ></img>
      </Box>
      <Box sx={{ padding: '1em' }}>
        <Typography variant="h5" sx={{ textAlign: 'center', color: '#1976D2' }}>
          {name}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ' 1fr 1fr 1fr',
            gridTemplateRows: 'auto ',
            marginTop: '1em',
          }}
        >
          <Box>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              {nationality}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              {club}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              OVR: {attributes.overall}
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{ textAlign: 'center', marginTop: '1em', color: '#1976D2' }}
          variant="h6"
        >
          Atribúty
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: ' 1fr 1fr 1fr',
            gridTemplateRows: 'auto auto',
            rowGap: '1em',
            marginTop: '1em',
          }}
        >
          <Box>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              STR: {attributes.shooting}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              SIL: {attributes.physical}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              NAH: {attributes.passing}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              TECH: {attributes.hands}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              OBR: {attributes.defense}
            </Typography>
          </Box>
          <Box>
            <Typography variant="body1" sx={{ textAlign: 'center' }}>
              KOR: {attributes.skating}
            </Typography>
          </Box>
        </Box>
        {/* Faktory */}
        <Box>
          <Typography
            sx={{ textAlign: 'center', marginTop: '1em', color: '#1976D2' }}
            variant="h6"
          >
            Faktory
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: ' 1fr 1fr 1fr 1fr',
              gridTemplateRows: 'auto',
              marginTop: '1em',
            }}
          >
            <Box>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                ENE: {factors.energy}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                SKÚ: {factors.experience}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                ZOH: {factors.playfulness}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" sx={{ textAlign: 'center' }}>
                MEN: {factors.mentality}
              </Typography>
            </Box>
          </Box>
        </Box>
        {/* VLASTNOSTI */}
        <Box>
          <Typography
            sx={{ textAlign: 'center', marginTop: '1em', color: '#1976D2' }}
            variant="h6"
          >
            Vlastnosti
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: ' 1fr 1fr 1fr',
              gridTemplateRows: 'auto auto',
              marginTop: '1em',
              rowGap: '1em',
            }}
          >
            {properties.map((oneProperty, index) => (
              <Box key={index}>
                <Typography variant="body1" sx={{ textAlign: 'center' }}>
                  {oneProperty}
                </Typography>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Information Modal */}
      <Dialog open={isInfoModalOpen} onClose={handleInfoClose}>
        <DialogTitle sx={{ background: '#1976D2', color: 'white' }}>
          Title
        </DialogTitle>
        <DialogContent>
          <Typography
            variant="body1"
            sx={{ textAlign: 'justify', paddingY: '1.5em' }}
          >
            Text
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleInfoClose} color="primary">
            Zavrieť
          </Button>
        </DialogActions>
      </Dialog>
    </Paper>
  );
};

export default OverviewPlayer;
