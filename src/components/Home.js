import React from "react";
import "./Home.css";
import clinicImage from "./clinicImage.jpg";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="text">
        <h1>Priera consulta medica gratis</h1>
        <h3>Haz tu reserva en linea para mayor comodidad.</h3>
        <p>
          Nuestro equipo de expertos está aquí para asegurar que tus amigos
          peludos reciban la mejor atención posible.
        </p>
        <button className="explore-button">Conoce Más</button>
      </div>
      <div className="image">
        <img src={clinicImage} alt="Clínica Veterinaria" />
      </div>
    </div>
  );
};

export default Introduction;
