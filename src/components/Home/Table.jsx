import { Box, Typography } from '@mui/material';
import TableOne from './TableOne';
import dataTable from './dataTable.json';

const Table = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        background: 'yellow',
      }}
    >
      <Box sx={{ flex: '1' }}>
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
            Tabuľka
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
          }}
        >
          {dataTable.map((oneTeam) => {
            return <TableOne key={oneTeam.id} {...oneTeam} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default Table;
