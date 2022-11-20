import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


const Candidato = ({perro}) => {

const path = perro.message.split("/");

    return (

        <Card variant="outlined" sx={{ maxWidth: 400, maxHeight: 600}}>
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
                <Typography variant="body1" gutterBottom>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                In scelerisque finibus sapien nec convallis. 
                Nulla a augue fringilla lacus rutrum lobortis in nec mi.
                Fusce non consequat dui. Fusce eget elit non enim pharetra facilisis. 
                Vestibulum sed mi nulla. Donec auctor aliquam tellus, id hendrerit ipsum dictum et.
                Nulla pellentesque euismod dui, ullamcorper volutpat dui consectetur sed. 
                Etiam sed auctor urna, id aliquet arcu. Aliquam vitae auctor turpis. 
                Nunc molestie augue sit amet fringilla ultricies. Etiam euismod a nisi non egestas.
                Phasellus mattis ultrices nisi, vitae lacinia sem tincidunt quis.
                </Typography>
            </CardContent>
        </Card>
    )

}

export default Candidato;
