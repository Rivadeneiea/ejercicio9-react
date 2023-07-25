import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Formulario from "./components/Formulario";
import { useEffect, useState } from "react";
import ArticuloCita from "./components/ArticuloCita";

function App() {
  let citaLocalStorage = JSON.parse(localStorage.getItem("citas")) || [];
  const [citasApp, setCitasApp] = useState(citaLocalStorage);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citasApp));
  }, [citasApp]);

  const crearCitas = (cita) => {
    setCitasApp([...citasApp, cita]);
  };

  const borrarCita = (id) => {
    const crearNuevaCita = citasApp.filter((cita) => cita.id !== id);
    if (citasApp.id !== id) {
      setCitasApp(crearNuevaCita);
    }
  };
  return (
    <>
      <div>
        <h1 className="tex-danger">Administrador pacientes veterinaria</h1>
      </div>{" "}
      <Formulario crearCitas={crearCitas}></Formulario>
      <section className="d-flex justify-content-between mt-5 container">
        {citasApp.map((cita, index) => (
          <ArticuloCita
            borrarCita={borrarCita}
            key={index}
            cita={cita}
          ></ArticuloCita>
        ))}
      </section>
    </>
  );
}

export default App;
