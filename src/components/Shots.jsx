import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TextField from '@mui/material/TextField';

export default function Shots() {
  const [showModal, setShowModal] = useState(false);
  const [shots, updateShots] = useState([]);

  let newShot = {
    date: '',
    coffeeName: '',
    gramsUsed: '',
    grindSetting: '',
    preinfusionTime: '',
    shotTime: '',
    notes: '',
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const addShot = () => {
    updateShots([...shots, newShot]);
    newShot = {};
    closeModal();
  };

  return (
    <>
      <Button onClick={openModal} variant="contained" color="primary">Add Shot</Button>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Date</TableCell>
            <TableCell>Coffee Name</TableCell>
            <TableCell>Weight (g)</TableCell>
            <TableCell>Grind Setting</TableCell>
            <TableCell>Preinfusion Time (s)</TableCell>
            <TableCell>Shot Time (s)</TableCell>
            <TableCell>Notes</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {shots.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.date}</TableCell>
              <TableCell>{row.coffeeName}</TableCell>
              <TableCell>{row.gramsUsed}</TableCell>
              <TableCell>{row.grindSetting}</TableCell>
              <TableCell>{row.preinfusionTime}</TableCell>
              <TableCell>{row.shotTime}</TableCell>
              <TableCell>{row.notes}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Dialog
        open={showModal}
        onClose={closeModal}
        fullWidth
        aria-labelledby="simple-dialog-title"
      >
        <DialogTitle id="simple-dialog-title">Add a Shot</DialogTitle>
        <DialogContent>
          <List>
            <ListItem>
              <TextField
                id="date"
                label="Date"
                type="date"
                defaultValue=""
                fullWidth
                required
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={(event) => { newShot.date = event.target.value; }}
              />
            </ListItem>
            <ListItem>
              <TextField
                id="filled-basic"
                label="Coffee Name"
                fullWidth
                required
                onChange={(event) => { newShot.coffeeName = event.target.value; }}
              />
            </ListItem>
            <ListItem>
              <TextField
                id="filled-basic"
                label="Grams Used"
                fullWidth
                onChange={(event) => { newShot.gramsUsed = event.target.value; }}
              />
            </ListItem>
            <ListItem>
              <TextField
                id="filled-basic"
                label="Grind Setting"
                fullWidth
                onChange={(event) => { newShot.grindSetting = event.target.value; }}
              />
            </ListItem>
            <ListItem>
              <TextField
                id="filled-basic"
                label="Pre-Infusion Time (seconds)"
                fullWidth
                onChange={(event) => { newShot.preinfusionTime = event.target.value; }}
              />
              <TextField
                id="filled-basic"
                label="Shot Time (seconds)"
                fullWidth
                onChange={(event) => { newShot.shotTime = event.target.value; }}
              />
            </ListItem>
            <ListItem>
              <TextField
                id="filled-basic"
                label="Notes"
                fullWidth
                onChange={(event) => { newShot.notes = event.target.value; }}
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={addShot}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
