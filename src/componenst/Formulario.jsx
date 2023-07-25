import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = ({ crearCitas }) => {
  const [cita, setCita] = useState({
    nombreDeMascota: "",
    nombreDeDueño: "",
    hora: "",
    fecha: "",
    sintomas: "",
  });

  const valorInputs = (e) => {
    setCita({
      ...cita,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cita.id = new Date().getTime();
    crearCitas(cita);
    setCita({
      nombreDeMascota: "",
      nombreDeDueño: "",
      hora: "",
      fecha: "",
      sintomas: "",
    });
  };

  return (
    <Form className="container" onSubmit={handleSubmit}>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Label> Nombre de mascota</Form.Label>
        <Form.Control
          type="text"
          name="nombreDeMascota"
          value={cita.nombreDeMascota}
          placeholder="Nombre de mascota"
          onChange={valorInputs}
        />
      </Form.Group>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Label> Nombre de dueño</Form.Label>
        <Form.Control
          type="text"
          name="nombreDeDueño"
          value={cita.nombreDeDueño}
          placeholder="Nombre de dueño"
          onChange={valorInputs}
        />
      </Form.Group>
      <div className="row ">
        <Form.Group className="mb-3 d-flex col-6" controlId="formBasicEmail">
          <Form.Label className="mt-2 me-2"> fecha</Form.Label>
          <Form.Control
            type="number"
            name="fecha"
            value={cita.fecha}
            placeholder="fecha"
            onChange={valorInputs}
          />
        </Form.Group>
        <Form.Group className="mb-3 d-flex col-6" controlId="formBasicEmail">
          <Form.Label className="mt-2 me-2"> hora</Form.Label>
          <Form.Control
            type="number"
            name="hora"
            value={cita.hora}
            placeholder="namber"
            onChange={valorInputs}
          />
        </Form.Group>
      </div>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Label className="mt-2 me-2"> Sintomas</Form.Label>
        <Form.Control
          type="text"
          name="sintomas"
          value={cita.sintomas}
          placeholder="Describir sintomas"
          onChange={valorInputs}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar nueva cita
      </Button>
    </Form>
  );
};

export default Formulario;
