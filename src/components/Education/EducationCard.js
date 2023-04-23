import React from "react";
import "./EducationCard.css";

const EducationCard = ({ degree, institution, year,grade }) => {


  return (
    <div className="education-card animate__animated animate__slideInDown">
      <h3 className="degree">{degree}</h3>
      <h4 className="institution">{institution}</h4>
      <p className="year">{year}</p>
      <p className="grade">{grade}</p>
    </div>
  );
};

export default EducationCard;
