
// GuideForm.js
import React from 'react';
import PropTypes from 'prop-types';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const GuideForm = props => (
  <Form onSubmit={props.handleSubmit}>
  <Form.Group controlId="exampleForm.ControlInput1">
    <Form.Label>Title</Form.Label>
    <Form.Control type="text" placeholder="Mental Health" name="title" value={props.title} onChange={props.handleChangeText}/>
  </Form.Group>
  <Form.Group controlId="form.Body">
    <Form.Label>Body</Form.Label>
    <Form.Control as="textarea" 
      rows="3" 
      value={props.body}
      name="body"
      onChange={props.handleChangeText}/>
  </Form.Group>
  <Button type="submit">Submit form</Button>
</Form>
);

GuideForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChangeText: PropTypes.func.isRequired,
  title: PropTypes.string,
  body: PropTypes.string,
};

GuideForm.defaultProps = {
  title: '',
  body: '',
};

export default GuideForm;