import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid';
import Candidato from './Candidato';
import Rechazado from './Rechazados';
import Aceptado from './Aceptados';

const Perritos = () => {

    const [rechazados, setRechazados] = useState([]);
    const [aceptados, setAceptados] = useState([]);

    const conseguirPerritos = async () => {

        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        return response.json();

    }

    const Rechazados = () => {

        const ordenarRechazados = rechazados.reverse();

        setRechazados([...ordenarRechazados, data].reverse());

        refetch();

    }

    const Aceptados = () => {

        const ordenarAceptados = aceptados.reverse();

        setAceptados([...ordenarAceptados, data].reverse());

        refetch();

    }

    const OtraOportunidad = (perro) => {

        const ordenar = aceptados.reverse();

        setAceptados([...ordenar, perro].reverse());

        const moverRechazado = rechazados.filter((dog) => dog !== perro);

        setRechazados(moverRechazado);

    }

    const Arrepentimiento = (perro) => {

        const ordenar = rechazados.reverse();

        setRechazados([...ordenar, perro].reverse());

        const moverAceptado = aceptados.filter((dog) => dog !== perro);

        setAceptados(moverAceptado);

    }


    const { data, refetch, isRefetching, status } = useQuery("perritos", conseguirPerritos);

    return (

        <div className="tinder">


            <div className="candidato">

                <h1>Candidatos</h1>
                {status === "loading" || isRefetching ? <CircularProgress /> :

                    (
                        <>
                        <Candidato perro={data} funcion={Rechazados} funcion2={Aceptados}/>
                        </>
                    )

                }

            </div>

            <div className="dog1">

            <h1>Aceptados</h1>

                {aceptados.map((aceptado, index) => (

                    <Aceptado key={index} perro={aceptado} funcion={Arrepentimiento} />

                ))}
            </div>

            <div className="dog2">

                <h1>Rechazados</h1>

                {rechazados.map((rechazados, index) => (

                    <Rechazado key={index} perro={rechazados} funcion={OtraOportunidad}/>

                ))}

            </div>
        </div>
    );
}

export default Perritos;
