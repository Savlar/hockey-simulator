import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TableSortLabel from '@mui/material/TableSortLabel';

function createData(name, age, position, shooting, skating, overall) {
  return { name, age, position, shooting, skating, overall };
}

const rows = [
  createData('Branislav Mezei', 24, 'DO', 58, 4.0, 74),
  createData('Samuel Buček', 27, 'SN', 83, 4.3, 83),
  createData('Sahir Gill', 26, 'TH', 75, 6.0, 79),
  createData('Tomáš Hrnka', 30, 'SU', 78, 4.3, 76),
  createData('James Cotton', 35, 'OO', 72, 3.9, 81),
  createData('Branislav Mezei', 24, 'DO', 58, 4.0, 74),
  createData('Samuel Buček', 27, 'SN', 83, 4.3, 83),
  createData('Sahir Gill', 26, 'TH', 75, 6.0, 79),
  createData('Tomáš Hrnka', 30, 'SU', 78, 4.3, 76),
  createData('James Cotton', 35, 'OO', 72, 3.9, 81),
  createData('Branislav Mezei', 24, 'DO', 58, 4.0, 74),
  createData('Samuel Buček', 27, 'SN', 83, 4.3, 83),
  createData('Sahir Gill', 26, 'TH', 75, 6.0, 79),
  createData('Tomáš Hrnka', 30, 'SU', 78, 4.3, 76),
  createData('James Cotton', 35, 'OO', 72, 3.9, 81),
];

export default function DenseTable() {
  const [order, setOrder] = React.useState('asc');
  const [orderBy, setOrderBy] = React.useState('age');

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const getComparator = (order) => {
    return (a, b) => {
      if (a[orderBy] < b[orderBy]) {
        return order === 'asc' ? -1 : 1;
      }
      if (a[orderBy] > b[orderBy]) {
        return order === 'asc' ? 1 : -1;
      }
      return 0;
    };
  };

  const sortedRows = rows.sort(getComparator(order));

  return (
    <TableContainer component={Paper} elevation={3}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={() => handleRequestSort('name')}
              >
                Name
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={orderBy === 'age'}
                direction={orderBy === 'age' ? order : 'asc'}
                onClick={() => handleRequestSort('age')}
              >
                Age
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={orderBy === 'position'}
                direction={orderBy === 'position' ? order : 'asc'}
                onClick={() => handleRequestSort('position')}
              >
                Poz
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={orderBy === 'shooting'}
                direction={orderBy === 'shooting' ? order : 'asc'}
                onClick={() => handleRequestSort('shooting')}
              >
                Strela
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={orderBy === 'skating'}
                direction={orderBy === 'skating' ? order : 'asc'}
                onClick={() => handleRequestSort('skating')}
              >
                Korčulovanie
              </TableSortLabel>
            </TableCell>
            <TableCell align="right">
              <TableSortLabel
                active={orderBy === 'overall'}
                direction={orderBy === 'overall' ? order : 'asc'}
                onClick={() => handleRequestSort('overall')}
              >
                Celkovo
              </TableSortLabel>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => (
            <TableRow
              key={row.name}
              style={{ height: '50px' }}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.age}</TableCell>
              <TableCell align="right">{row.position}</TableCell>
              <TableCell align="right">{row.shooting}</TableCell>
              <TableCell align="right">{row.skating}</TableCell>
              <TableCell align="right">{row.overall}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
