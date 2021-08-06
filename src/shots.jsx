import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField';

export default function Shots() {
  const classes = makeStyles((theme) => ({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }));

  const [showModal, setShowModal] = useState(false);
  const [shots, updateShots] = useState([]);

  let newShot = {
    date: '',
    coffeeBrand: '',
    gramsUsed: '',
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
      <Dialog
        open={showModal}
        onClose={closeModal}
        aria-labelledby="simple-dialog-title"
      >
        <DialogTitle id="simple-dialog-title">Add a Shot</DialogTitle>
        <div>
          Date:
          <TextField
            id="date"
            label=""
            type="date"
            defaultValue=""
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            onChange={(event) => { newShot.date = event.target.value; }}
          />
        </div>
        <div>
          Coffee Brand:
          <TextField
            id="filled-basic"
            label=""
            onChange={(event) => { newShot.coffeeBrand = event.target.value; }}
          />
        </div>
        <div>
          Grams Used:
          <TextField
            id="filled-basic"
            label=""
            onChange={(event) => { newShot.gramsUsed = event.target.value; }}
          />
        </div>
        <div>
          Pre-Infusion Time:
          <TextField
            id="filled-basic"
            label=""
            onChange={(event) => { newShot.preinfusionTime = event.target.value; }}
          />
        </div>
        <div>
          Shot Time:
          <TextField
            id="filled-basic"
            label=""
            onChange={(event) => { newShot.shotTime = event.target.value; }}
          />
        </div>
        <div>
          Notes:
          <TextField
            id="filled-basic"
            label=""
            onChange={(event) => { newShot.notes = event.target.value; }}
          />
        </div>
        <Button onClick={addShot}>Save</Button>
      </Dialog>
    </>
  );
}
