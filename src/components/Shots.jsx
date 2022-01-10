import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  {
    field: 'date',
    headerName: 'Date',
    type: 'date',
    width: 120,
    editable: true,
  },
  {
    field: 'coffeeName',
    headerName: 'Coffee Name',
    width: 200,
    editable: true,
  },
  {
    field: 'gramsUsed',
    headerName: 'Weight (g)',
    type: 'number',
    editable: true,
    valueFormatter: ({ value }) => `${value}g`,
  },
  {
    field: 'grindSetting',
    headerName: 'Grind Setting',
    width: 150,
    editable: true,
  },
  {
    field: 'preinfusionTime',
    headerName: 'Preinfusion Time (s)',
    type: 'number',
    width: 170,
    editable: true,
    valueFormatter: ({ value }) => `${value}s`,
  },
  {
    field: 'shotTime',
    headerName: 'Shot Time (s)',
    type: 'number',
    width: 130,
    editable: true,
    valueFormatter: ({ value }) => `${value}s`,
  },
  {
    field: 'notes',
    headerName: 'Notes',
    flex: 1,
    sortable: false,
    editable: true,
  },
];

export default function Shots() {
  const [showModal, setShowModal] = useState(false);
  const [shots, updateShots] = useState([]);

  let newShot = {
    id: 1,
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
    newShot = { id: newShot.id + 1 };
    closeModal();
  };

  return (
    <>
      <Button
        onClick={openModal}
        variant="contained"
        color="primary"
      >
        Add Shot
      </Button>
      <Box sx={{ height: 400, width: '100%', paddingTop: 1 }}>
        <DataGrid
          rows={shots}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
        />
      </Box>
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
