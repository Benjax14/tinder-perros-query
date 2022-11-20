import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';

const Aceptados = ({perro, funcion = null}) => {

  const path = perro.message.split("/");

  return (
    
    <Card sx={{ maxWidth: 400}}>

    <CardActionArea>

      <CardMedia
        component="img"
        width="400"
        height="300"
        image={perro.message}
        alt="perrito"
      />

      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {path[4]}
        </Typography>
      </CardContent>

    </CardActionArea>

    <CardActions>
      <IconButton variant="outlined" onClick={() => funcion(perro)}>
       <RotateLeftIcon/>
      </IconButton>
    </CardActions>

  </Card>

  )
}

export default Aceptados;