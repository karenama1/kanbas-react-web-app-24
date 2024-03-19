import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { addAssignment, updateAssignment, selectAssignment } from '../assignmentsReducer';
import { KanbasState } from "../../../store";
import "../Editor/index.css";
function AssignmentEditor() {
  const dispatch = useDispatch();
//   const navigate = useNavigate();
  const { courseId } = useParams();
  const assignment = useSelector((state: KanbasState) => state.assignments.assignment);

//   const handleChange = (event: React.ChangeEvent<HTMLInputElement  | HTMLTextAreaElement>) => {
//     const { name, value } = event.target;
//     setAssignmentDetails({ ...assignmentDetails, [name]: value });
//   };

//   const handleSave = () => {
//     dispatch(addAssignment({ ...assignmentDetails, course: courseId }));
//     navigate(`/Kanbas/Courses/${courseId}/Assignments`);
//   };

//   const handleCancel = () => {
//     navigate(`/Kanbas/Courses/${courseId}/Assignments`);
//   };


  
//   return (
//   <div className="contain-fluid">
//     <div className="assignment-editor">
//       <div className="form-group">
//        <label htmlFor="assignmentName">Assignment Name</label>
//       <input
//         name="name"
//         placeholder="Assignment Name"
//         value={assignmentDetails.name}
//         onChange={handleChange}
//       />
//       </div>
//       <div className="form-group">
//         {/* <label htmlFor="assignmentDescription">New Assignment Description</label> */}
//       <textarea
//         name="description"
//         placeholder="New Assignment Description"
//         value={assignmentDetails.description}
//         onChange={handleChange}
//       />
//       </div>
//       <div className="form-group">
//         <label htmlFor="points">Points</label>
//         <input
//           id="points"
//           name="points"
//           type="number"
//           value={assignmentDetails.points}
//           onChange={handleChange}
//           className="form-control"
//       />
//       </div>
//       <div className="form group date-group">
//         <label>Due Date</label>
//       <input
//         name="dueDate"
//         type="date"
//         value={assignmentDetails.dueDate}
//         onChange={handleChange}
//         className="form-control"
//       />
//     </div>
//     <div className="form-group date-group">
//       <label>Available From</label>
//       <input
//         name="availableFromDate"
//         type="date"
//         value={assignmentDetails.availableFromDate}
//         onChange={handleChange}
//         className="form-control"
//       />
//       </div>
//       <div className="form-group date-group">
//         <label>Availble Until</label>
//         <input
//         name="availableUntilDate"
//         type="date"
//         value={assignmentDetails.availableUntilDate}
//         onChange={handleChange}
//         className="form-control"
//       />
//       </div>
//       <div className="form-actions">
     
//       <button 
//        type="button"
//        className="btn btn-danger float-end"
//        onClick={handleSave}>Save</button>

//       <button 
//        type="button"
//        className="btn btn-light float-end"
//        onClick={handleCancel}>Cancel</button> 
//     </div>
//     </div>
//   </div>
//   );
// }
return (
    <div>
      <div className="d-flex justify-content-end gap-1">
        <div className="d-flex gap-2">
          <i className="fa fa-check-circle-o wd-fg-color-green" style={{display: "flex", alignItems: "center" }}></i>
          <b style={{color: "green", display: "flex", alignItems: "center" }}>Published</b>
          <button type="button" className="btn btn-outline-dark rounded-0"><i className="fa fa-ellipsis-v"></i></button>
        </div>
      </div>
      <hr/>      

      <ul className="list-group mb-3">
        <li className="list-group-item form-control">
          <p>
            Assignment Name <input
            className="form-control"
            placeholder="New Assignment"
            value={assignment.name}
            onChange={(e) => dispatch(selectAssignment({ ...assignment, name: e.target.value }))}
            />
          </p>
            <textarea 
                className="form-control"
                placeholder="New Assignment Description"
                value={assignment.description}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, description: e.target.value }))
            }/>
          Points <input
            className="form-control"
            value={assignment.points}
            onChange={(e) => dispatch(selectAssignment({ ...assignment, points: e.target.value }))}
            />

          Assign <ul className="list-group mb-3">
            <li className="list-group-item form-control">
              <p>
                Due <input
                type="date"
                className="form-control"
                value={assignment.dueDate}
                onChange={(e) => dispatch(selectAssignment({ ...assignment, dueDate: e.target.value }))}
                />
              </p>
              <p>
                Available From <input
                type="date"
                className="form-control"
                />
              </p>
              <p>
                Until <input
                type="date"
                className="form-control"
                />
              </p>
            </li>
          </ul>
        </li>
        <hr />
        <div className="d-flex justify-content-end gap-1 mb-2">
          <div className="d-flex mb-3 mt-3 gap-2">
            <Link to={`/Kanbas/Courses/${courseId}/Assignments`}>
              <button className="btn btn-outline-dark rounded-0 me-2">
                Cancel
              </button>
              <button className="btn btn-primary rounded-0 me-2" onClick={() => dispatch(updateAssignment(assignment))}>
                Save
              </button>
              <button className="btn btn-danger rounded-0" onClick={() => dispatch(addAssignment(assignment))}>
                Add
              </button>
            </Link>
          </div>
        </div>
      </ul>
    </div>
  );
}

export default AssignmentEditor;