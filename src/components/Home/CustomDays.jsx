// import { Box } from '@mui/material';
import Typography from '@mui/material/Typography';

const CustomDays = ({ dayValue }) => {
  const daysOfWeek = ['N', 'P', 'U', 'S', 'Š', 'P', 'S'];
  return (
      <Typography>{daysOfWeek[dayValue.getDay()]}</Typography>
  );
};

export default CustomDays;
