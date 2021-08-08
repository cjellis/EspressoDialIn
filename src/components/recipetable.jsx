import { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

export default function RecipeTable() {
  const [shots, updateShots] = useState([]);

  // eslint-disable-next-line no-unused-vars
  const addShot = () => {
    updateShots([]);
  };

  return (
    <Table size="small">
      <TableHead>
        <TableRow>
          <TableCell>Date</TableCell>
          <TableCell>Coffee Brand</TableCell>
          <TableCell>Weight (g)</TableCell>
          <TableCell>Preinfusion Time (s)</TableCell>
          <TableCell>Shot Time (s)</TableCell>
          <TableCell>Notes</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {shots.map((row) => (
          <TableRow key={row.id}>
            <TableCell>{row.date}</TableCell>
            <TableCell>{row.coffeeBrand}</TableCell>
            <TableCell>{row.gramsUsed}</TableCell>
            <TableCell>{row.preinfusionTime}</TableCell>
            <TableCell>{row.shotTime}</TableCell>
            <TableCell>{row.notes}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
