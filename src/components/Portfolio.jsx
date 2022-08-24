import React from "react";
import { Link } from "react-router-dom";
import { trabajos } from "../data/trabajos";
import { ListadoTrabajos } from "./ListadoTrabajos";

export const Portfolio = () => {
  return (
    <div className="page">
      <h1 className="heading">Portfolio</h1>

      <ListadoTrabajos />

        
    </div>
  );
};
