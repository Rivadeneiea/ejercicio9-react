import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ArticuloCita = ({ cita, borrarCita }) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body>
        <Card.Title>{cita.nombreDeDueño}</Card.Title>
        <Card.Text>
          {cita.nombreDeMascota}
          {cita.fecha}
          {cita.hora}
          {cita.sintomas}
        </Card.Text>
        <Button variant="primary" onClick={() => borrarCita(cita.id)}>
          borrar cita
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ArticuloCita;
