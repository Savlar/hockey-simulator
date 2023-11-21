import { Box, Paper, Typography } from '@mui/material';
import TableOne from './TableOne';
import dataTable from './dataTable.json';

const Table = () => {
  return (
    <Paper elevation={3}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height:"630px"
      }}
    >
      <Box>
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
      </Box>
      <Box
          sx={{
            width: '100%',
            display: 'flex',
            flex:"1",
            flexDirection: 'column',
            background:"white"
          }}
        >
          {dataTable.map((oneTeam) => {
            return <TableOne key={oneTeam.id} {...oneTeam} />;
          })}
        </Box>
    </Paper>
  );
};

export default Table;
