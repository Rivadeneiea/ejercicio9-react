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

  const msj = "No hay citas";
  return (
    <>
      <div>
        <h1 className="text-light text-center">
          Administrador pacientes veterinaria
        </h1>
      </div>{" "}
      <Formulario crearCitas={crearCitas}></Formulario>
      {citasApp.length === 0 ? (
        <div className="text-center mt-5 display-6 text-light "> {msj}</div>
      ) : (
        <section className="d-flex justify-content-between mt-5 container">
          {citasApp.map((cita, index) => (
            <ArticuloCita
              borrarCita={borrarCita}
              key={index}
              cita={cita}
            ></ArticuloCita>
          ))}
        </section>
      )}
    </>
  );
}

export default App;
