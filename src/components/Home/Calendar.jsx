import { useState } from 'react';
import { Box, Paper, Typography } from '@mui/material';
import dayjs from 'dayjs';
import sk from 'dayjs/locale/sk';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CustomDays from './CustomDays';

const Calendar = () => {
  const [value, setValue] = useState(dayjs('2023-11-6'));

  return (
    <Paper elevation={3}>
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
          Kalendár
        </Typography>
      </Box>
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={sk}>
          <DemoContainer
            components={['DateCalendar']}
            sx={{
              background: 'white',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: ' 320px',
            }}
          >
            <DateCalendar
              // dayOfWeekFormatter={(_day, date) => adapter.format(date, 'weekdayShort').charAt(0).toUpperCase()}
              value={value}
              onChange={(newValue) => setValue(newValue)}
              renderDay={({ day }) => <CustomDays dayValue={day} />}
            />
          </DemoContainer>
        </LocalizationProvider>
      </Box>
    </Paper>
  );
};

export default Calendar;
