import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Introduction from "./components/Home";
import AppointmentForm from "./components/AppointmentForm";
import AppointmentList from "./components/AppointmentList";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [appointments, setAppointments] = useState([]);

  const addAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  const deleteAppointment = (index) => {
    setAppointments(appointments.filter((_, i) => i !== index));
  };

  const editAppointment = (index, name, date) => {
    const updatedAppointments = appointments.map((appointment, i) =>
      i === index ? { name, date } : appointment
    );
    setAppointments(updatedAppointments);
  };

  const clearAppointments = () => {
    setAppointments([]);
  };

  const location = useLocation(); // Obtener la ubicación actual

  return (
    <div className="App">
      <Navbar />
      {location.pathname !== "/appointments" && <Header />}
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route
          path="/appointments"
          element={
            <>
              <AppointmentForm addAppointment={addAppointment} />
              <AppointmentList
                appointments={appointments}
                deleteAppointment={deleteAppointment}
                editAppointment={editAppointment}
                clearAppointments={clearAppointments}
              />
            </>
          }
        />
      </Routes>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;
