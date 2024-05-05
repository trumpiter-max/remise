import * as React from 'react';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Box from '@mui/material/Box';
import Title from './Title';

// Generate Order Data
function createData(id, date, time, promotion, amount) {
  return { id, date, time, promotion, amount };
}

const rows = [
  createData(
    0,
    '16/03/2024',
    '10h30',
    '20%',
    312.44,
  ),
  createData(
    1,
    '16/03/2024',
    '10h30',
    '20%',
    312.44,
  ),
  createData(2, '16/03/2024',
  '10h30',
  '20%',
  312.44,),
  createData(
    3,
    '16/03/2024',
    '10h30',
    '20%',
    312.44,
  ),
  createData(
    4,
    '16/03/2024',
    '10h30',
    '20%',
    312.44,
  ),
];

function preventDefault(event) {
  event.preventDefault();
}

export default function Orders() {
  return (
    <React.Fragment>
        <Box sx={{
          p: 2,
          display: "flex",
          height: "fixed",
          width: "fixed",
          flexDirection: "column",
          justifyItems:"center",
          alignItems: "center"
        }}>
        <Title>Khuyến mãi gần đây</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Ngày</TableCell>
            <TableCell>Thời gian</TableCell>
            <TableCell>Khuyến mãi</TableCell>
            <TableCell align="right">Giá tiền</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.time}</TableCell>
              <TableCell>{row.promotion}</TableCell>
              <TableCell align="right">{`$${row.amount}`}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
        Xem thêm khuyến mãi
      </Link>
        </Box>
      
    </React.Fragment>
  );
}