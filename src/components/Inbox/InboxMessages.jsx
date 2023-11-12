import { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import TableSortLabel from '@mui/material/TableSortLabel';
import IconButton from '@mui/material/IconButton';
import CheckIcon from '@mui/icons-material/Check';
import DeleteIcon from '@mui/icons-material/Delete';

function createData(subject, name, date) {
  return { subject, name, date };
}

const rows = [
  createData('Informácie o klube', 'Dušan Milo', '6.11.2023'),
  createData('Ciele vedenia', 'Miroslav Kováčik', '5.11.2023'),
  createData('Zostava', 'Tomáš Chrenko', '5.11.2023'),
  createData('Vitajte v Nitre', 'Miroslav Kováčik', '5.11.2023'),
];

export default function InboxOneMessage() {
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('name');
  const [selectAll, setSelectAll] = useState(false);

  const handleRequestSort = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow sx={{ background: 'gray' }}>
            <TableCell align="left">
              <Checkbox checked={selectAll} onChange={handleSelectAll} />
            </TableCell>
            <TableCell>
              <TableSortLabel
                active={orderBy === 'subject'}
                direction={orderBy === 'subject' ? order : 'asc'}
                onClick={() => handleRequestSort('subject')}
              >
                Email
              </TableSortLabel>
            </TableCell>
            <TableCell align="left">
              <TableSortLabel
                active={orderBy === 'name'}
                direction={orderBy === 'name' ? order : 'asc'}
                onClick={() => handleRequestSort('name')}
              >
                Meno
              </TableSortLabel>
            </TableCell>
            <TableCell align="left">
              <TableSortLabel
                active={orderBy === 'date'}
                direction={orderBy === 'date' ? order : 'asc'}
                onClick={() => handleRequestSort('date')}
              >
                Dátum
              </TableSortLabel>
            </TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedRows.map((row) => (
            <TableRow
              key={row.subject}
              style={{ height: '50px' }}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="left">
                <Checkbox checked={selectAll} />
              </TableCell>
              <TableCell component="th" scope="row">
                {row.subject}
              </TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="right">
                <IconButton>
                  <CheckIcon />
                </IconButton>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
