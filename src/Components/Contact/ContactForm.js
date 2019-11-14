import React from 'react';
import {Form, Col, Button} from 'react-bootstrap';

const ContactForm = (props) => {
  // const [validated, setValidated] = useState(false);

  //bootstrap validation function
  // const handleForm = (e) => {
  //   const form = e.currentTarget;
  //   if(form.checkValidity() === false){
  //     e.preventDefault();
  //     e.stopPropagation();
  //   }
  //   setValidated(true);
  // }

  // const submitAll = (e) => {
  //   handleForm(e); 
  //   if(validated === true){
  //     props.onSubmit()
  //   }
  // }

return (
<Form noValidate onSubmit={props.onSubmit} className="form">
  <Form.Row >
    <Form.Group as={Col} controlId="firstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control 
      required
      type="text" 
      name="first_name"
      value={props.first_name}
      onChange={props.onChange} />
    </Form.Group>

    <Form.Group as={Col} controlId="lastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control 
      required
      type="text" 
      name="last_name"
      value={props.last_name}
      onChange={props.onChange}/>
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control required
    type="email"
    name="email"
    value={props.email}
    onChange={props.onChange} />
  </Form.Group>

  <Form.Group controlId="message">
    <Form.Label>Message</Form.Label>
    <Form.Control 
    required
    name="message"
    value={props.message}
    onChange={props.onChange}
    as="textarea"  rows="6" />
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

 
    );
}

export default ContactForm;