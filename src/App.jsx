import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Formulario from "./componenst/Formulario";

function App() {
  return (
    <>
      <div>
        <h1 className="tex-danger">Administrador pacientes veterinaria</h1>
      </div>{" "}
      <Formulario></Formulario>
    </>
  );
}

export default App;
