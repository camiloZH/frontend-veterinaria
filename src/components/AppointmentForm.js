import React, { useState } from "react";
import "./AppointmentForm.css";

const AppointmentForm = ({ addAppointment }) => {
  const [formData, setFormData] = useState({
    //formData es un objeto que contiene todos los campos del formulario.
    ownerName: "",
    email: "",
    phone: "",
    petName: "",
    petType: "Gato",
    breed: "",
    appointmentDate: "",
  });

  const handleChange = (e) => {
    //handleChange actualiza el estado correspondiente cuando un campo del formulario cambia.
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    // llama a la función addAppointment pasada como prop, y resetea los campos del formulario.
    e.preventDefault();
    addAppointment(formData);
    setFormData({
      ownerName: "",
      email: "",
      phone: "",
      petName: "",
      petType: "Gato",
      breed: "",
      appointmentDate: "",
    });
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-25">
            <label htmlFor="ownerName">Nombre del Dueño</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="ownerName"
              name="ownerName"
              placeholder="Tu nombre.."
              value={formData.ownerName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="email">Email</label>
          </div>
          <div className="col-75">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu email.."
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="phone">Teléfono</label>
          </div>
          <div className="col-75">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="Tu teléfono.."
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="petName">Nombre de la Mascota</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="petName"
              name="petName"
              placeholder="Nombre de tu mascota.."
              value={formData.petName}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="petType">Tipo de Mascota</label>
          </div>
          <div className="col-75">
            <select
              id="petType"
              name="petType"
              value={formData.petType}
              onChange={handleChange}
              required
            >
              <option value="Gato">Gato</option>
              <option value="Perro">Perro</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="breed">Raza</label>
          </div>
          <div className="col-75">
            <input
              type="text"
              id="breed"
              name="breed"
              placeholder="Raza de tu mascota.."
              value={formData.breed}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <div className="col-25">
            <label htmlFor="appointmentDate">Fecha de la Cita</label>
          </div>
          <div className="col-75">
            <input
              type="date"
              id="appointmentDate"
              name="appointmentDate"
              value={formData.appointmentDate}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="row">
          <input type="submit" value="Agendar Cita" />
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
