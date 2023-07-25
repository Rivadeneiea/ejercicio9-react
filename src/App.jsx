import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Formulario from "./componenst/Formulario";
import { useEffect, useState } from "react";

function App() {
  let citaLocalStorage = JSON.parse(localStorage.getItem("citas")) || [];
  const [citasApp, setCitasApp] = useState(citaLocalStorage);

  useEffect(() => {
    localStorage.setItem("citas", JSON.stringify(citasApp));
  }, [citasApp]);

  const crearCitas = (cita) => {
    setCitasApp([...citasApp, cita]);
  };
  return (
    <>
      <div>
        <h1 className="tex-danger">Administrador pacientes veterinaria</h1>
      </div>{" "}
      <Formulario crearCitas={crearCitas}></Formulario>
    </>
  );
}

export default App;
