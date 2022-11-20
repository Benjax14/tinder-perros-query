import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import DoDisturbIcon from '@mui/icons-material/DoDisturb';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { CardActions, IconButton } from '@mui/material';


const Candidato = ({perro, funcion = null,funcion2 = null}) => {

const path = perro.message.split("/");

    return (

        <Card variant="outlined" sx={{ maxWidth: 400, maxHeight: 600}}>
                <CardMedia
                    component="img"
                    width="400"
                    height="230"
                    image={perro.message}
                    alt="perrito"
                />

            <CardContent>
                <Typography gutterBottom variant="h4" component="div">
                    {path[4]}
                </Typography>
                <Typography variant="body1" gutterBottom >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In scelerisque finibus sapien nec convallis. 
                Nulla a augue fringilla lacus rutrum lobortis in nec mi.
                Fusce non consequat dui. Fusce eget elit non enim pharetra facilisis. 
                Vestibulum sed mi nulla. Donec auctor aliquam tellus, id hendrerit ipsum dictum et.
                Nulla pellentesque euismod dui, ullamcorper volutpat dui consectetur sed. 
                Etiam sed auctor urna, id aliquet arcu. Aliquam vitae
                </Typography>
            </CardContent>

            <CardActions>
            <IconButton variant="outlined" onClick={() => funcion2(perro)}>
             <FavoriteIcon/>
            </IconButton>

            <IconButton variant="outlined" onClick={() => funcion(perro)}>
             <DoDisturbIcon/>
            </IconButton>

            </CardActions>
        </Card>
    )

}

export default Candidato;
