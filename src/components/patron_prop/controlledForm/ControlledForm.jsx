import React, { useState } from 'react';
import { Button, Form, Alert } from 'react-bootstrap';
import ControlledInput from './ControlledInput';

function ControlledForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    description: "",
    select: "",
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({ ...formData, [event.target.name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowAlert(true);
  };

  const handleCloseAlert = () => setShowAlert(false);

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <ControlledInput
          label="Text"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <ControlledInput
          label="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <ControlledInput
          label="Password"
          type="password"
            name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <ControlledInput
          label="Textarea"
          as="textarea"
            name="description"
          value={formData.description}
          onChange={handleChange}
        />
        <ControlledInput
          label="Select"
          as="select"
            name="select"
          value={formData.select}
          onChange={handleChange}
        >
          <option value="">Select...</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </ControlledInput>        
        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      {showAlert && (
        <Alert variant="success" onClose={handleCloseAlert} dismissible>
          <Alert.Heading>Form Data</Alert.Heading>
          <pre>{JSON.stringify(formData, null, 2)}</pre>
        </Alert>
      )}
    </>
  );
}

export default ControlledForm;
