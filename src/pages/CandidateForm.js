import React, { useState } from "react";
import { Form, Row, Col, Button, Container, InputGroup } from "react-bootstrap";
import {
  FaUser,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBook,
  FaBriefcase,
  FaCode,
  FaProjectDiagram,
  FaFileUpload,
} from "react-icons/fa";
import * as XLSX from "xlsx";

const CandidateForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNo: "",
    email: "",
    address: "",
    qualification: "",
    positionInterest: "",
    skills: "",
    experience: "",
    projects: "",
    immediateJoiner: "No", // Default value for radio button
    resume: null,
    cv: null,
  });

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  // Handle Excel file upload and parsing
  const handleExcelUpload = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      file.type ===
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    ) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const ab = event.target.result;
        const workbook = XLSX.read(ab, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]]; // Get the first sheet
        const data = XLSX.utils.sheet_to_json(sheet, { header: 1 }); // Convert the sheet to JSON (array of arrays)

        // Assuming the first row contains headers and the second row contains data, you can map it to the form
        const [
          ,
          fullName,
          mobileNo,
          email,
          address,
          qualification,
          positionInterest,
          skills,
          experience,
          projects,
          immediateJoiner,
        ] = data[1]; // Taking the second row (data)

        // Ensure mobileNo is treated as a string (in case it's interpreted as a number or scientific notation)
        const mobileNumber = mobileNo ? mobileNo.toString().trim() : "";

        // Set the form data from Excel
        setFormData({
          fullName,
          mobileNo: mobileNumber,
          email,
          address,
          qualification,
          positionInterest,
          skills,
          experience,
          projects,
          immediateJoiner: immediateJoiner === "Yes" ? "Yes" : "No", // Ensure it's a valid value
          resume: null,
          cv: null,
        });
      };
      reader.readAsArrayBuffer(file);
    } else {
      alert("Please upload a valid Excel file.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    if (formData.resume) {
      console.log("Uploaded Resume:", formData.resume.name);
    }
  };

  return (
    <Container className=" mt-5 mr-5 mb-5">
      <div className="border p-4 rounded shadow">
        <h2 className="text-center mb-4">Candidate Registration Form</h2>
        <Form onSubmit={handleSubmit}>
          {/* Full Name */}
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="formFullName">
                <Form.Label>Full Name</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaUser />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="fullName"
                    placeholder="Enter full name"
                    value={formData.fullName}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            {/* Mobile Number */}
            <Col md={4}>
              <Form.Group controlId="formMobileNo">
                <Form.Label>Mobile Number</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaPhone />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="mobileNo"
                    placeholder="Enter mobile number"
                    value={formData.mobileNo}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            {/* Email */}
            <Col md={4}>
              <Form.Group controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaEnvelope />
                  </InputGroup.Text>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          {/* Address */}
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="formAddress">
                <Form.Label>Address</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaMapMarkerAlt />
                  </InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    name="address"
                    rows={1}
                    placeholder="Enter address"
                    value={formData.address}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            {/* Qualification */}
            <Col md={4}>
              <Form.Group controlId="formQualification">
                <Form.Label>Qualification</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaBook />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="qualification"
                    placeholder="Enter qualification"
                    value={formData.qualification}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            {/* Position of Interest */}
            <Col md={4}>
              <Form.Group controlId="formPositionInterest">
                <Form.Label>Position Interested In</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaBriefcase />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="positionInterest"
                    placeholder="Enter position"
                    value={formData.positionInterest}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          {/* Skills */}
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="formSkills">
                <Form.Label>Skills</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaCode />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="skills"
                    placeholder="Enter skills"
                    value={formData.skills}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            {/* Experience */}
            <Col md={4}>
              <Form.Group controlId="formExperience">
                <Form.Label>Experience (Years)</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaBriefcase />
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    name="experience"
                    placeholder="Enter experience"
                    value={formData.experience}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Col>

            {/* Projects */}
            <Col md={4}>
              <Form.Group controlId="formProjects">
                <Form.Label>Projects</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaProjectDiagram />
                  </InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    name="projects"
                    rows={1}
                    placeholder="Enter projects"
                    value={formData.projects}
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

          {/* Immediate Joiner & Excel Upload */}
          <Row className="mb-3">
            <Col md={4}>
              <Form.Group controlId="formImmediateJoiner">
                <Form.Label>Available for Immediate Joining</Form.Label>
                <div>
                  <Form.Check
                    inline
                    label="Yes"
                    type="radio"
                    name="immediateJoiner"
                    value="Yes"
                    checked={formData.immediateJoiner === "Yes"}
                    onChange={handleChange}
                  />
                  <Form.Check
                    inline
                    label="No"
                    type="radio"
                    name="immediateJoiner"
                    value="No"
                    checked={formData.immediateJoiner === "No"}
                    onChange={handleChange}
                  />
                </div>
              </Form.Group>
            </Col>

            {/* Excel Upload */}
            <Col md={4}>
            <Form.Group controlId="formResumeUpload">
                <Form.Label>Upload Resume</Form.Label>
                <InputGroup>
                  <InputGroup.Text>
                    <FaFileUpload />
                  </InputGroup.Text>
                  <Form.Control
                    type="file"
                    name="resume"
                    accept=".pdf,.docx,.doc"
                    onChange={handleChange}
                  />
                </InputGroup>
              </Form.Group>
            </Col>
          </Row>

        

          {/* Submit Button */}
          
            <div className="mb-3 d-flex justify-content-between">
            <Button variant="secondary" type="submit" block>
                Submit
              </Button>
            <Button variant="secondary" type="submit" block>
                Show Prev Submited
              </Button>
            </div>
        </Form>
      </div>
    </Container>
  );
};

export default CandidateForm;
