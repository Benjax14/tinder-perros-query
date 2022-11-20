import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import { Button, CardActionArea, CardActions, IconButton } from '@mui/material';
import Collapse from '@mui/material/Collapse';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Aceptados = ({perro, funcion = null}) => {

  const path = perro.message.split("/");
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      <IconButton
        onClick={handleExpandClick}
        aria-expanded={expanded}
        aria-label="show more">
          <ExpandMoreIcon />
      </IconButton>
    </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In scelerisque finibus sapien nec convallis. 
                Nulla a augue fringilla lacus rutrum lobortis in nec mi.
                Fusce non consequat dui. Fusce eget elit non enim pharetra facilisis. 
                Vestibulum sed mi nulla. Donec auctor aliquam tellus, id hendrerit ipsum dictum et.
                Nulla pellentesque euismod dui, ullamcorper volutpat dui consectetur sed. 
                Etiam sed auctor urna, id aliquet arcu. Aliquam vitae
          </Typography>
        </CardContent>
      </Collapse>

  </Card>

  )
}

export default Aceptados;