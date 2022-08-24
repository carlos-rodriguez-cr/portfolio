import React, { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { trabajos } from '../data/trabajos';

export const Proyecto = () => {

    const [proyecto, setProyecto] = useState({});
    //Recoge el id de cada proyecto
    const params = useParams();

    useEffect(() => {
        let proyecto = trabajos.filter(trabajo => trabajo.id === params.id);
        setProyecto(proyecto[0]);

        console.log(proyecto);

    }, []); //con corchetes vacios solo se ejecuta 1 vez cuando carga el comp

  return (
    <div className="page page-work">
        <div className="mask">
            <img src={"/images/"+proyecto.id+".png"} alt="" />
        </div>
        <h1 className="heading"> {proyecto.nombre}</h1>
        <p>{proyecto.tecnologias}</p>
        <p>{proyecto.description}</p>
        <a href={"https://"+proyecto.url} target="_blank">Ir al proyecto</a>



      
    </div>
  );
};