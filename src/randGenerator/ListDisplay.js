import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function ListDisplay({randNum2dArray}) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell align="right">Nums</TableCell>
        </TableRow>
      </TableHead>
      {console.log("Arraylist",randNum2dArray)}
      {randNum2dArray.map(numArray => {
        return (
          <TableRow>
            {numArray.map(num => (
              <TableCell align="right">{num}</TableCell>
            ))}
          </TableRow>
        );
      })}
    </Table>
  );
}
