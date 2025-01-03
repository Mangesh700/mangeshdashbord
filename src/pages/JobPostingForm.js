import React, { useState } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import {
  FaBuilding,
  FaEnvelope,
  FaPhone,
  FaUserTie,
  FaCalendarAlt,
  FaClock,
  FaMapMarkedAlt,
  FaDollarSign,
  FaLocationArrow,
  FaClipboardList,
  FaTasks,
  FaFileUpload,
  FaCheckCircle,
} from "react-icons/fa";

const JobPostingForm = () => {
  const [jobData, setJobData] = useState({
    clientCompanyName: "",
    email: "",
    contactDetails: "",
    positionAvailable: "",
    minExperience: "",
    jobHours: "",
    shift: "",
    jobLocation: "",
    minSalary: "",
    maxSalary: "",
    companyFullAddress: "",
    requirements: "",
    positionsByDept: "",
    deadline: "",
    file: null,
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setJobData({
      ...jobData,
      [name]:
        type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", jobData);
    if (jobData.file) {
      console.log("Uploaded file:", jobData.file);
    }
  };

  return (
    <Container className="my-3 mb-2 text-dark">
      <div className="form-container shadow-lg p-4 rounded border">
        {/* Header */}
        <Row className="justify-content-center mb-4">
          <Col xs={12} md={6} className="text-center">
            <h3 className="text-dark mb-0">
              {/* <FaBuilding className="me-2" /> */}
              Job Posting Form
            </h3>
          </Col>
        </Row>

        <Form onSubmit={handleSubmit}>
          {/* First Row */}
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="formClientCompanyName">
                <Form.Label>Client Company Name</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaBuilding />
                  </span>
                  <Form.Control
                    type="text"
                    name="clientCompanyName"
                    value={jobData.clientCompanyName}
                    onChange={handleChange}
                    placeholder="Enter company name"
                  />
                </div>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email Address</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaEnvelope />
                  </span>
                  <Form.Control
                    type="email"
                    name="email"
                    value={jobData.email}
                    onChange={handleChange}
                    placeholder="Enter email"
                  />
                </div>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formContactDetails">
                <Form.Label>Contact Details</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaPhone />
                  </span>
                  <Form.Control
                    type="text"
                    name="contactDetails"
                    value={jobData.contactDetails}
                    onChange={handleChange}
                    placeholder="Enter contact number"
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>

          {/* Second Row */}
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="formPositionAvailable">
                <Form.Label>Position Available</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaUserTie />
                  </span>
                  <Form.Control
                    type="text"
                    name="positionAvailable"
                    value={jobData.positionAvailable}
                    onChange={handleChange}
                    placeholder="Enter position"
                  />
                </div>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formMinExperience">
                <Form.Label>Minimum Experience</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaCalendarAlt />
                  </span>
                  <Form.Control
                    type="text"
                    name="minExperience"
                    value={jobData.minExperience}
                    onChange={handleChange}
                    placeholder="Enter experience (years)"
                  />
                </div>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formJobHours">
                <Form.Label>Job Hours</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaClock />
                  </span>
                  <Form.Control
                    type="text"
                    name="jobHours"
                    value={jobData.jobHours}
                    onChange={handleChange}
                    placeholder="Enter job hours"
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>

          {/* Third Row */}
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="formShift">
                <Form.Label>Shift</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaTasks />
                  </span>
                  <Form.Control
                    type="text"
                    name="shift"
                    value={jobData.shift}
                    onChange={handleChange}
                    placeholder="Enter shift details"
                  />
                </div>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formJobLocation">
                <Form.Label>Job Location</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaMapMarkedAlt />
                  </span>
                  <Form.Control
                    type="text"
                    name="jobLocation"
                    value={jobData.jobLocation}
                    onChange={handleChange}
                    placeholder="Enter job location"
                  />
                </div>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formMinSalary">
                <Form.Label>Minimum Salary</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaDollarSign />
                  </span>
                  <Form.Control
                    type="text"
                    name="minSalary"
                    value={jobData.minSalary}
                    onChange={handleChange}
                    placeholder="Enter minimum salary"
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>

          {/* Fourth Row */}
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="formMaxSalary">
                <Form.Label>Maximum Salary</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaDollarSign />
                  </span>
                  <Form.Control
                    type="text"
                    name="maxSalary"
                    value={jobData.maxSalary}
                    onChange={handleChange}
                    placeholder="Enter maximum salary"
                  />
                </div>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formCompanyFullAddress">
                <Form.Label>Company Full Address</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaLocationArrow />
                  </span>
                  <Form.Control
                    as="textarea"
                    name="companyFullAddress"
                    value={jobData.companyFullAddress}
                    onChange={handleChange}
                    placeholder="Enter full address"
                  />
                </div>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formRequirements">
                <Form.Label>Requirements</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaClipboardList />
                  </span>
                  <Form.Control
                    as="textarea"
                    name="requirements"
                    value={jobData.requirements}
                    onChange={handleChange}
                    placeholder="Enter requirements"
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>

          {/* Fifth Row */}
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="formPositionsByDept">
                <Form.Label>Positions by Department</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaTasks />
                  </span>
                  <Form.Control
                    type="text"
                    name="positionsByDept"
                    value={jobData.positionsByDept}
                    onChange={handleChange}
                    placeholder="Enter positions by department"
                  />
                </div>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formDeadline">
                <Form.Label>Deadline</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaCalendarAlt />
                  </span>
                  <Form.Control
                    type="date"
                    name="deadline"
                    value={jobData.deadline}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group controlId="formFile">
                <Form.Label>Upload File</Form.Label>
                <div className="input-group">
                  <span className="input-group-text">
                    <FaFileUpload />
                  </span>
                  <Form.Control
                    type="file"
                    name="file"
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </Col>
          </Row>

          {/* Checkbox */}
          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="formTermsAccepted">
                <Form.Check
                  type="checkbox"
                  name="termsAccepted"
                  checked={jobData.termsAccepted}
                  onChange={handleChange}
                  label={
                    <>
                      
                      I accept the terms and conditions
                    </>
                  }
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
              Prev Submited Form
            </button>
          </div>
        </Form>
      </div>
    </Container>
  );
};

export default JobPostingForm;
