import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaBuilding } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import ShowFranchiseForm from "../model/ShowFranchiseForm";

const FranchiseForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    workingArea: "",
    landmark: "",
    locality: "",
    streetAddress: "",
  });

  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Form submitted successfully!");
  };

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="container mt-5">
      <form className="form-container shadow-lg p-4 rounded" onSubmit={handleSubmit}>
        <h2 className="text-center mb-4">Franchise Form</h2>
        <div className="row g-3">
          {/* Name */}
          <div className="col-md-4">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FaUser />
              </span>
              <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your name"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="col-md-4">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FaEnvelope />
              </span>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          {/* Contact Number */}
          <div className="col-md-4">
            <label htmlFor="contactNumber" className="form-label">
              Contact Number
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FaPhone />
              </span>
              <input
                id="contactNumber"
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your contact number"
                required
              />
            </div>
          </div>

          {/* Working Area */}
          <div className="col-md-4">
            <label htmlFor="workingArea" className="form-label">
              Working Area
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FaBuilding />
              </span>
              <input
                id="workingArea"
                type="text"
                name="workingArea"
                value={formData.workingArea}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter your working area"
                required
              />
            </div>
          </div>

          {/* Landmark */}
          <div className="col-md-4">
            <label htmlFor="landmark" className="form-label">
              Landmark
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FaMapMarkerAlt />
              </span>
              <input
                id="landmark"
                type="text"
                name="landmark"
                value={formData.landmark}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter a landmark"
                required
              />
            </div>
          </div>

          {/* Locality */}
          <div className="col-md-4">
            <label htmlFor="locality" className="form-label">
              Locality
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FaMapMarkerAlt />
              </span>
              <input
                id="locality"
                type="text"
                name="locality"
                value={formData.locality}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter locality"
                required
              />
            </div>
          </div>

          {/* Street Address */}
          <div className="col-md-4">
            <label htmlFor="streetAddress" className="form-label">
              Street Address
            </label>
            <div className="input-group">
              <span className="input-group-text">
                <FaMapMarkerAlt />
              </span>
              <input
                id="streetAddress"
                type="text"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                className="form-control"
                placeholder="Enter street address"
                required
              />
            </div>
          </div>
        </div>
        {/* Submit and Show Previous Button */}
        <div className="row mt-4">
          <div className="d-flex justify-content-between">
            <button type="submit" className="btn btn-sm btn-secondary me-2">
              Submit
            </button>
            <button
              type="button"
              className="btn btn-sm btn-secondary"
              onClick={toggleModal}
            >
              Show Prev FranchiseForm
            </button>
          </div>
        </div>
      </form>

      {/* Modal Popup */}
      {showModal && (
        <div className="modal show d-block" tabIndex="-1" role="dialog">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Previous Franchise Form</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={toggleModal}
                ></button>
              </div>
              <div className="modal-body">
                <ShowFranchiseForm data={formData} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FranchiseForm;

