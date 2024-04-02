import React, { useEffect, useState } from "react";
import axios from "axios";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
    });
  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);
  const [module, setModule] = useState({
    id: 'Module1', name: 'Web Development', description: 'Learn full stack development', course: 'CS5610',
  });

  const MODULE_URL ="http://localhost:4000/a5/module";
  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>

      <h4>Retrieving Objects</h4>
      <a
        href="http://localhost:4000/a5/assignment">
        Get Assignment
      </a>
      <br />
      <a 
        href="http://localhost:4000/a5/module">
        Get Module
      </a>
      <br />
      <h4>Retrieving Properties</h4>
      <a 
        href="http://localhost:4000/a5/assignment/title">
        Get Title
      </a>
      <br />
      <a 
        href="http://localhost:4000/a5/module/name">
         Get Module Name
      </a>
      <h4>Modifying Properties</h4>
      <a className="btn btn-primary"
        href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
        Update Title
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
      <br />
      <br />
      <a className="btn btn-primary"
        href={`${MODULE_URL}/name/${module.name}`}>
        Update Name
        </a>
      <input type="text"
        onChange={(e) => setModule({...module, 
            name: e.target.value})}
        value={module.name}/>
      <br />
      <br />
      <a className="btn btn-primary"
         href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
        Update Score
         </a>
      <input type="number"
        onChange={(e) => setAssignment({...assignment, 
               score: parseInt(e.target.value)})}
        value={assignment.score}/>
      <br />
      <label>
        Completed:
        <input
          type="checkbox"
          checked={assignment.completed}
          onChange={(e) => setAssignment({ ...assignment, completed: e.target.checked })}
        />
      </label>
      <a className="btn btn-primary"
         href={`${ASSIGNMENT_URL}/completed/${assignment.completed}`}>update Completed Status</a>
      <br />
    </div>
  );
}
export default WorkingWithObjects;