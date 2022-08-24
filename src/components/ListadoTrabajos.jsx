import React from "react";
import { Link } from "react-router-dom";
import { trabajos } from "../data/trabajos";

export const ListadoTrabajos = ({limite}) => {
  return (

      <section className="works">
        
        {trabajos.slice(0,limite).map((trabajo) => {
          //con .slice muestro los objetos de un array desde la posicion que quiera
          //desde un inico hasta un limite si esta definido como prop en el componente
          //si el limite no esta definido entonces no hay limites
          //{console.log(trabajo)}
          return (

            <article key={trabajo.id} className="work-item">
              <div className="mask">
                <img src={"/images/" + trabajo.id + ".png"} />
              </div>
              <span>{trabajo.categorias}</span>
              <h2>
                <Link to={"/proyecto/" + trabajo.id}>{trabajo.nombre}</Link>
              </h2>
              <h3>{trabajo.tecnologias}</h3>
            </article>
            
          );
        })}

      </section>
    
  );
};
