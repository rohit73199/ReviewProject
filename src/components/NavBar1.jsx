import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PetsIcon from '@mui/icons-material/Pets';
import { Link } from 'react-router-dom';
export default function NavBar1() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="black"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <PetsIcon />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1}} >
            PetShelter
          </Typography>
          <Link to="/Login">
          <Button style={{color:'black'}}>Login</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  );
}