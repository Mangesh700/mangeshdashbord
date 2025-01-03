import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaRegBuilding, FaRegFileAlt, FaUserTie, FaMapMarkerAlt, FaMoneyBillAlt, FaBriefcase, FaUsers, FaUser, FaCalendarAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const JobDescriptionPage = () => {
  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    jobDescription: "",
    responsibilities: "",
    qualifications: "",
    experience: "",
    location: "",
    salary: "",
    jobType: "",
    employmentStatus: "",
    department: "",
    hiringManager: "",
    postedDate: "",
    deadline: "",
    contactEmail: "",
    contactPhone: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Job Vacancy Details</h2>
      <form onSubmit={handleSubmit}>
        <div className="row">
          {/* Job Title */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="jobTitle" className="form-label">
              Job Title
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaRegFileAlt />
              </div>
              <input
                type="text"
                className="form-control shadow-sm"
                id="jobTitle"
                name="jobTitle"
                value={formData.jobTitle}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Company Name */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="companyName" className="form-label">
              Company Name
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaRegBuilding />
              </div>
              <input
                type="text"
                className="form-control shadow-sm"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Job Description */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="experience" className="form-label">
              Experience Required
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaUserTie />
              </div>
              <input
                type="text"
                className="form-control shadow-sm"
                id="experience"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
        </div>

        <div className="row">
          {/* Responsibilities */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="responsibilities" className="form-label">
              Responsibilities
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaBriefcase />
              </div>
              <textarea
                className="form-control shadow-sm"
                id="responsibilities"
                name="responsibilities"
                rows="4"
                value={formData.responsibilities}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Qualifications */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="qualifications" className="form-label">
              Qualifications
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaRegFileAlt />
              </div>
              <textarea
                className="form-control shadow-sm"
                id="qualifications"
                name="qualifications"
                rows="4"
                value={formData.qualifications}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Experience */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="jobDescription" className="form-label">
              Job Description
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaRegFileAlt />
              </div>
              <textarea
                className="form-control shadow-sm"
                id="jobDescription"
                name="jobDescription"
                rows="4"
                value={formData.jobDescription}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          {/* Location */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="location" className="form-label">
              Location
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaMapMarkerAlt />
              </div>
              <input
                type="text"
                className="form-control shadow-sm"
                id="location"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Salary */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="salary" className="form-label">
              Salary
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaMoneyBillAlt />
              </div>
              <input
                type="text"
                className="form-control shadow-sm"
                id="salary"
                name="salary"
                value={formData.salary}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Job Type */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="jobType" className="form-label">
              Job Type
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaBriefcase />
              </div>
              <input
                type="text"
                className="form-control shadow-sm"
                id="jobType"
                name="jobType"
                value={formData.jobType}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          {/* Employment Status */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="employmentStatus" className="form-label">
              Employment Status
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaUsers />
              </div>
              <input
                type="text"
                className="form-control shadow-sm"
                id="employmentStatus"
                name="employmentStatus"
                value={formData.employmentStatus}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Department */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="department" className="form-label">
              Department
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaUsers />
              </div>
              <input
                type="text"
                className="form-control shadow-sm"
                id="department"
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Hiring Manager */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="hiringManager" className="form-label">
              Hiring Manager
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaUser />
              </div>
              <input
                type="text"
                className="form-control shadow-sm"
                id="hiringManager"
                name="hiringManager"
                value={formData.hiringManager}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          {/* Posted Date */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="postedDate" className="form-label">
              Posted Date
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaCalendarAlt />
              </div>
              <input
                type="date"
                className="form-control shadow-sm"
                id="postedDate"
                name="postedDate"
                value={formData.postedDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Deadline */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="deadline" className="form-label">
              Application Deadline
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaCalendarAlt />
              </div>
              <input
                type="date"
                className="form-control shadow-sm"
                id="deadline"
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Contact Email */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="contactEmail" className="form-label">
              Contact Email
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaEnvelope />
              </div>
              <input
                type="email"
                className="form-control shadow-sm"
                id="contactEmail"
                name="contactEmail"
                value={formData.contactEmail}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        <div className="row">
          {/* Contact Phone */}
          <div className="col-12 col-md-4 mb-3">
            <label htmlFor="contactPhone" className="form-label">
              Contact Phone
            </label>
            <div className="input-group">
              <div className="input-group-text">
                <FaPhoneAlt />
              </div>
              <input
                type="text"
                className="form-control shadow-sm"
                id="contactPhone"
                name="contactPhone"
                value={formData.contactPhone}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="col-12 d-flex justify-content-center">
            <button type="submit" className="btn btn-secondary btn-sm">
              Submit Job Vacancy
            </button>
            <button type="button" className="btn btn-outline-secondary btn-sm">
              Show Prev Submit Job Vacancy
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default JobDescriptionPage;
