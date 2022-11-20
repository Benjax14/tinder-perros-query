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
            </CardContent>
        </Card>
    )

}

export default Candidato;
