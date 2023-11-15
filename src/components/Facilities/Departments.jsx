import { Box, Typography } from '@mui/material';
import OneDepartment from './OneDepartment';
import dataDepartment from './dataDepartment.json';

const Departmens = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'center',
          marginY: '2em',
          marginLeft: '2em',
        }}
      >
        <Typography variant="h3">Oddelenia</Typography>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: ' 1fr 1fr 1fr',
          gridTemplateRows: 'auto auto',
          marginTop: '1em',
          gap: '1em',
        }}
      >
        {dataDepartment.map((one) => {
          return <OneDepartment key={one.id} {...one}></OneDepartment>;
        })}
      </Box>
    </Box>
  );
};

export default Departmens;
