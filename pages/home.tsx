import React from 'react';
import axios from 'axios';
import {
  Button,
  Paper,
  Grid,
} from '@mui/material';
import { DataGrid, GridColDef } from '@mui/x-data-grid';

export default function Home() {
  const getProfile = async () => {
    const response = await axios.get('/api/profile');
    console.log(response);
  };
  const logout = async () => {
    const response = await axios.post('/api/auth/logout');
    console.log(response);
  };
  const columns: GridColDef[] = [
    {
      field: 'id',
      headerName: 'Bussiness Name',
      width: 170,
    },
    {
      field: 'Data2',
      headerName: 'Address',
      width: 270,
    },
    {
      field: 'Data3',
      headerName: 'City',
      width: 170,
    },
    {
      field: 'Data4',
      headerName: 'State',
      width: 80,
    },
    {
      field: 'Data5',
      headerName: 'Zip Code',
      width: 90,
    },
    {
      field: 'Data6',
      headerName: 'License',
      width: 170,
    },
    {
      field: 'Data7',
      headerName: 'Last Modified',
      width: 170,
    },
    {
      field: 'Data8',
      headerName: 'Detail',
      width: 100,
    },

  ];
  const rows = [
    {
      id: 1,
      Data2: 'Snow1',
      Data3: 'Jon1',
      Data4: 351,
      Data5: 'Jon1',
      Data6: 351,
      Data7: 'Jon1',
    },
    {
      id: 2,
      Data2: 'Snow2',
      Data3: 'Jon2',
      Data4: 352,
      Data5: 'Jon2',
      Data6: 352,
      Data7: 'Jon2',
    },
    {
      id: 3,
      Data2: 'Snow3',
      Data3: 'Jon3',
      Data4: 353,
      Data5: 'Jon3',
      Data6: 353,
      Data7: 'Jon3',
    },
    {
      id: 4,
      Data2: 'Snow4',
      Data3: 'Jon4',
      Data4: 354,
      Data5: 'Jon4',
      Data6: 354,
      Data7: 'Jon4',
    },
    {
      id: 5,
      Data2: 'Snow5',
      Data3: 'Jon5',
      Data4: 355,
      Data5: 'Jon5',
      Data6: 355,
      Data7: 'Jon5',
    },
    {
      id: 6,
      Data2: 'Snow6',
      Data3: 'Jon6',
      Data4: 356,
      Data5: 'Jon6',
      Data6: 356,
      Data7: 'Jon6',
    },
    {
      id: 7,
      Data2: 'Snow7',
      Data3: 'Jon7',
      Data4: 357,
      Data5: 'Jon7',
      Data6: 357,
      Data7: 'Jon7',
    },
    {
      id: 8,
      Data2: 'Snow8',
      Data3: 'Jon8',
      Data4: 358,
      Data5: 'Jon8',
      Data6: 358,
      Data7: 'Jon8',
    },
    {
      id: 9,
      Data2: 'Snow9',
      Data3: 'Jon9',
      Data4: 359,
      Data5: 'Jon9',
      Data6: 359,
      Data7: 'Jon9',
    },
    {
      id: 10,
      Data2: 'Snow10',
      Data3: 'Jon10',
      Data4: 3510,
      Data5: 'Jon10',
      Data6: 3510,
      Data7: 'Jon10',
    },
    {
      id: 11,
      Data2: 'Snow11',
      Data3: 'Jon11',
      Data4: 3511,
      Data5: 'Jon11',
      Data6: 3511,
      Data7: 'Jon11',
    },

  ];
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        elevation={2}
        sx={{
          width: '100%',
          height: '650px',
        }}
      >
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={10}
          rowsPerPageOptions={[5]}
        />
      </Paper>
      <Button type="button" variant="outlined" onClick={getProfile}>
        get Profile
      </Button>
      <Button type="button" variant="outlined" onClick={logout}>
        sing out
      </Button>
    </Grid>
  );
}
