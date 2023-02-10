import React from 'react';
import {Box, AppBar,Toolbar,Typography, IconButton} from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import Card from "@mui/material/Card";
import {CardContent,CardMedia, TextField} from "@mui/material";
import EventIcon from '@mui/icons-material/Event';
import SearchIcon from '@mui/icons-material/Search';
import { Stack,InputAdornment } from '@mui/material';
import Image from 'next/image';

 const HomePage = () => {
  return (
    <Stack width='100vw' height='100vh'>
      <AppBar position="static" color="primary">
        <Toolbar sx={{backgroundColor:'#003972'}}>
          <Box sx={{flexGrow:1}}>
            <IconButton color="inherit">
              <EventIcon/>
              <Typography >11/01/2023</Typography>
            </IconButton>
          </Box>
          <Typography variant="h6">
            <IconButton 
              size="large"
              aria-label="menu"
              edge="end"
              color="inherit"
              >
              <MenuIcon/>
            </IconButton>
          </Typography>
        </Toolbar>
      </AppBar>
      <Card variant="outlined"  >
        <CardMedia 
          image="/equipo.svg"
          title="Equipo">
         <CardContent sx={{width:430, height:227, justifyContent:'center', display:'flex', flexDirection:'column'}} >
          <Typography variant="h3" sx={{fontSize:28, color:'white'}}>Hola Carlos</Typography>
          <Typography variant="h4" sx={{fontSize:20,color:'white'}}>¿Con que equipo quieres trabajar hoy?</Typography>
        </CardContent> 
        </CardMedia>
      </Card>
      <Stack justifyContent='center' alignItems='center'>
        <Card sx={{position:'absolute', top:270, bottom:0, width:374, height:82}} >
          <CardContent>
            <TextField
              id="buscar"
              label="Buscar equipo"
              fullWidth
              InputProps={{endAdornment: (
                <InputAdornment position='end'>
                  <SearchIcon/>
                </InputAdornment>
              )}}
            />  
          </CardContent>
        </Card>
      </Stack>
      <Stack justifyContent='center' alignItems='center'>
        <Image 
          src="./ElegirEquipo.svg"
          alt="default state"
          width={200}
          height={200}
          />
        <Typography variant="h6" mt={2}>¡Elegir un equipo para comenzar!</Typography>
      </Stack>
    </Stack>
  )
}

export default HomePage;
