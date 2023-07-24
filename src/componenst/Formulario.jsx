import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Formulario = () => {
  return (
    <Form className="container">
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Label> Nombre de mascota</Form.Label>
        <Form.Control type="text" placeholder="Nombre de mascota" />
      </Form.Group>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Label> Nombre de dueño</Form.Label>
        <Form.Control type="text" placeholder="Nombre de dueño" />
      </Form.Group>
      <div className="d-flex justify-content-between">
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Label> fecha</Form.Label>
          <Form.Control type="namber" placeholder="fecha" />
        </Form.Group>
        <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
          <Form.Label> hora</Form.Label>
          <Form.Control type="namber" placeholder="namber" />
        </Form.Group>
      </div>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Label> Sintomas</Form.Label>
        <Form.Control type="text" placeholder="Describir sintomas" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Agregar nueva cita
      </Button>
    </Form>
  );
};

export default Formulario;
