import React, {useState} from "react";
import { FaEllipsisV, FaPlus, FaCalculator,FaCheckCircle,FaPlusCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import  assignments  from "../../Database/assignments.json";
import { Breadcrumb } from "react-bootstrap";


function Assignments() {
    const { courseId } = useParams();
    const [searchQuery, setSearchQuery] = useState("");
    const assignmentList = assignments.filter(
      (assignment) => assignment.course === courseId);

    const filteredAssignments = assignmentList.filter((assignment) =>
      assignment.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
        {/* {<!-- Add buttons and other fields here -->} */}
        <div className="col-md-9">
        <div className="input-group mb-5">
          <input type="text" className="form-control me-5" placeholder="Search for Assignment"
          value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
          <div className="input-group-append">
            {/* Add any specific behavior or content for the input group append */}
          </div>
    
    
          <button className="btn btn-outline-secondary" type="button">+ Group</button>
          <button className="btn btn-danger" type="button">+ Assignment</button>
          <select className="float-end">
            <option>Edit Assignment Dates</option>
            <option>Edit</option>
            <option>Speed Grader</option>
            <option>Duplicate</option>
            <option>Delete</option>
            <option>Move To...</option>
            <option>Send To...</option>
            <option>Copy To...</option>
            <option>Share to Commons</option>
          </select>
        </div>
     </div>
     <div className="flex-fill custom-flex-fill">
        <ul className="list-group wd-modules">
          <li className="list-group-item">
            <div>
              <FaEllipsisV /> Assignments
              <span className="float-end">
                <span className="rounded border p-2">40% of Total</span>
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            <ul className="list-group">
              {filteredAssignments.map((assignment) => (
                <li className="list-group-item rounded-40" key={assignment._id}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <FaEllipsisV style={{ marginRight: '20px' }} />
                    <FaCalculator style={{ marginRight: '20px', color: 'green' }} />
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                          <strong>{assignment.title}</strong><br />
                        </Link>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
);
}
export default Assignments;