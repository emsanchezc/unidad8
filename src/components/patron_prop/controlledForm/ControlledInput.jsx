import { Form } from 'react-bootstrap';

function ControlledInput({ label, type, name, value, onChange }) {
  return (
    <Form.Group controlId={`form${label}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control name={name} type={type} value={value} onChange={onChange} />
    </Form.Group>
  );
}

export default ControlledInput;
