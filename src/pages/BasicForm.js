import React, { useState } from 'react';
import { Form, Button, Row, Col, Container, InputGroup, FormControl, FloatingLabel } from 'react-bootstrap';

const BasicForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    gender: '',
    file: null,
    comment: '',
    username: '',
    vanityURL: '',
    skills: '',
    inputColor: '#000000',
    iconInput: '',
    searchQuery: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
  };

  return (
    <Container className="mt-4">
      <div className="form-container shadow-lg p-4 rounded">
        <h3 className="mb-4">Basic Form</h3>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            {/* Email Input */}
            <Col md={4}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  required
                />
              </Form.Group>
            </Col>

            {/* Password Input */}
            <Col md={4}>
              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Enter your password"
                  required
                />
              </Form.Group>
            </Col>

            {/* Inline Input */}
            <Col md={4}>
              <Form.Group controlId="formInline">
                <Form.Label>Inline Input</Form.Label>
                <InputGroup>
                  <FormControl
                    name="inlineInput"
                    value={formData.inlineInput}
                    onChange={handleInputChange}
                    placeholder="Enter Input"
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            {/* Gender Selection */}
            <Col md={4}>
              <Form.Group controlId="formGender">
                <Form.Label>Gender</Form.Label>
                <Form.Check
                  inline
                  label="Male"
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={handleInputChange}
                  checked={formData.gender === 'Male'}
                />
                <Form.Check
                  inline
                  label="Female"
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={handleInputChange}
                  checked={formData.gender === 'Female'}
                />
              </Form.Group>
            </Col>

            {/* Static Email Display */}
            <Col md={4}>
              <Form.Group controlId="formStaticEmail">
                <Form.Label>Static</Form.Label>
                <Form.Control
                  type="text"
                  value="hello@example.com"
                  readOnly
                  disabled
                />
              </Form.Group>
            </Col>

            {/* Select Input */}
            <Col md={4}>
              <Form.Group controlId="formSelect">
                <Form.Label>Example Select</Form.Label>
                <Form.Control
                  as="select"
                  name="selectOption"
                  value={formData.selectOption}
                  onChange={handleInputChange}
                >
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            {/* Multiple Select */}
            <Col md={4}>
              <Form.Group controlId="formMultipleSelect">
                <Form.Label>Example Multiple Select</Form.Label>
                <Form.Control
                  as="select"
                  multiple
                  name="multipleSelect"
                  value={formData.multipleSelect}
                  onChange={handleInputChange}
                >
                  <option value="1">Option 1</option>
                  <option value="2">Option 2</option>
                  <option value="3">Option 3</option>
                  <option value="4">Option 4</option>
                  <option value="5">Option 5</option>
                </Form.Control>
              </Form.Group>
            </Col>

            {/* File Input */}
            <Col md={4}>
              <Form.Group controlId="formFile">
                <Form.Label>Example File Input</Form.Label>
                <Form.Control
                  type="file"
                  name="file"
                  onChange={handleFileChange}
                />
              </Form.Group>
            </Col>

            {/* Textarea */}
            <Col md={4}>
              <Form.Group controlId="formComment">
                <Form.Label>Comment</Form.Label>
                <Form.Control
                  as="textarea"
                  name="comment"
                  value={formData.comment}
                  onChange={handleInputChange}
                  rows={3}
                  placeholder="Enter your comment"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            {/* Terms and Conditions */}
            <Col md={4}>
              <Form.Group controlId="formTerms">
                <Form.Check
                  type="checkbox"
                  name="terms"
                  label="Agree with terms and conditions"
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            {/* Username Input */}
            <Col md={4}>
              <Form.Group controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  placeholder="Recipient's username"
                />
              </Form.Group>
            </Col>

            {/* Vanity URL */}
            <Col md={4}>
              <Form.Group controlId="formVanityURL">
                <Form.Label>Your Vanity URL</Form.Label>
                <Form.Control
                  type="text"
                  name="vanityURL"
                  value={formData.vanityURL}
                  onChange={handleInputChange}
                  placeholder="https://example.com/users/"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            {/* Color Input */}
            <Col md={4}>
              <Form.Group controlId="formColor">
                <Form.Label>Color Input</Form.Label>
                <Form.Control
                  type="color"
                  name="inputColor"
                  value={formData.inputColor}
                  onChange={handleInputChange}
                />
              </Form.Group>
            </Col>

            {/* Icon Input */}
            <Col md={4}>
              <Form.Group controlId="formIconInput">
                <Form.Label>Icon Input</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-person"></i>
                  </InputGroup.Text>
                  <FormControl
                    name="iconInput"
                    value={formData.iconInput}
                    onChange={handleInputChange}
                    placeholder="Enter Icon Input"
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            {/* Search Input */}
            <Col md={4}>
              <Form.Group controlId="formSearch">
                <Form.Label>Search for...</Form.Label>
                <Form.Control
                  type="text"
                  name="searchQuery"
                  value={formData.searchQuery}
                  onChange={handleInputChange}
                  placeholder="Search"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Submit Button */}
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-secondary btn-sm">
              Submit
            </button>
            <button type="button" className="btn btn-secondary btn-sm">
              Show Prev Submited Form
            </button>
          </div>
          
        </Form>
      </div>
    </Container>
  );
};

export default BasicForm;
