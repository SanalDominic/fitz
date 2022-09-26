import React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";


const StyledTableCell = styled(TableCell)(({ theme }) => ({

    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      border:'1px solid grey',
    },
  }));

const data = [
  ["weight", "0.5lbs"],
  ["dimension", "120 x 45 x 70 in"],
];

const DressDetail = () => {
  return (
    <TableContainer mb={2} component={Paper}>
      <Table  aria-label="customized table">
        <TableBody>
          {data.map((row) => (
            <TableRow key={row}>
              <StyledTableCell component="th" scope="row">
                {row[0]}
              </StyledTableCell>
              <StyledTableCell align="left">{row[1]}</StyledTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DressDetail;
