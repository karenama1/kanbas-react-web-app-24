import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";

function AssignmentEditor() {
  const { assignmentId, courseId } = useParams();
  const assignment = assignments.find(
    (assignment) => assignment._id === assignmentId
  );
  console.log("assignmentId:", assignmentId);
  console.log("assignment:", assignment);
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    // You can add logic here to save changes to the assignment
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8">
          <form>
            <h2>Assignment Details</h2>
            <div className="mb-3 mr-3">
              <label htmlFor="assignmentName" className="form-label">
                Assignment Name
              </label>
              <input
                type="text"
                className="form-control"
                id="assignmentName"
                value={assignment?.title || ""}
              />
            </div>
            {/* <div className="mb-3 mr-3">
              <label htmlFor="description" className="form-label">
                Assignment Description
              </label>
              <textarea
                className="form-control"
                id="description"
                value={assignment?.description || ""}
              />
            </div>
            <div className="mb-3 mr-3">
              <label htmlFor="points" className="form-label">
                Points
              </label>
              <input
                type="number"
                className="form-control"
                id="points"
                value={assignment?.points || ""}
              />
            </div> */}
            {/* Add other input fields based on your UI */}
            <div className="text-end mt-3">
              <button onClick={handleSave} className="btn btn-primary">
                Save
              </button>
              <Link
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-secondary ms-2"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;

