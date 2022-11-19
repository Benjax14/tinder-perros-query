import React, { useState } from 'react'
import { useQuery } from 'react-query';
import { CircularProgress } from '@mui/material';
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

    console.log(rechazados);

    const { data, refetch, status } = useQuery("perritos", conseguirPerritos);

    return (
        <div className="tinder">

            <div className="candidato">

                <h1>Candidatos</h1>
                {status === "loading" ? <CircularProgress /> :

                    (
                        <>
                            <Candidato perro={data} />

                            <br />
                            <button onClick={() => Rechazados()}>Rechazar</button>
                            <button onClick={() => Aceptados()}>Aceptar</button>
                        </>
                    )

                }

            </div>

            <div className="dog">

                <h1>Aceptados</h1>

                {aceptados.map((aceptado, index) => (

                    <Aceptado key={index} perro={aceptado} funcion={Arrepentimiento} />

                ))}

            </div>

            <div className="dog">

                <h1>Rechazados</h1>

                {rechazados.map((rechazado, index) => {

                    <Rechazado index={index} perro={rechazado} funcion={OtraOportunidad} />

                })}

            </div>

        </div>
    );
}

export default Perritos;
