import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css"; 

function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Grades", "Assignments", "Quizzes", "People", "Panopto Video",
"Discussions", "Announcement", "Pages", "Files", "Rubrics", "Outcomes", "Collaboration", "Syllabus", "Settings"];
  const { pathname } = useLocation();
  return (
    <nav className="d-flex align-items-center custom-breadcrumb">
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
   </nav>
  );
}
export default CourseNavigation;