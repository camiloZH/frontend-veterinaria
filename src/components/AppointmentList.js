import React, { useState } from "react";
import "./AppointmentList.css";

const AppointmentList = ({
  appointments,
  deleteAppointment,
  editAppointment,
  clearAppointments,
}) => {
  const [editedIndex, setEditedIndex] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDate, setEditedDate] = useState("");

  const handleEdit = (index) => {
    setEditedIndex(index);
    setEditedName(appointments[index].name);
    setEditedDate(appointments[index].date);
  };

  const handleSaveEdit = (index) => {
    editAppointment(index, editedName, editedDate);
    setEditedIndex(null);
    setEditedName("");
    setEditedDate("");
  };

  const handleCancelEdit = () => {
    setEditedIndex(null);
    setEditedName("");
    setEditedDate("");
  };

  return (
    <div className="container">
      <h1>Lista de Citas</h1>
      <table id="list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {appointments.map((appointment, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>
                {editedIndex === index ? (
                  <input
                    type="text"
                    value={editedName}
                    onChange={(e) => setEditedName(e.target.value)}
                  />
                ) : (
                  appointment.name
                )}
              </td>
              <td>
                {editedIndex === index ? (
                  <input
                    type="date"
                    value={editedDate}
                    onChange={(e) => setEditedDate(e.target.value)}
                  />
                ) : (
                  appointment.date
                )}
              </td>
              <td>
                {editedIndex === index ? (
                  <>
                    <button onClick={() => handleSaveEdit(index)}>
                      Guardar
                    </button>
                    <button onClick={handleCancelEdit}>Cancelar</button>
                  </>
                ) : (
                  <>
                    <button onClick={() => handleEdit(index)}>Editar</button>
                    <button onClick={() => deleteAppointment(index)}>
                      Eliminar
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={clearAppointments}>Borrar Todas las Citas</button>
    </div>
  );
};

export default AppointmentList;
