import React, { useState } from "react";
import "./index.css";
import  modules from "../../Database/module.json";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
import "../../../Kanbas/styles.css";
import "../../../libs/font-awesome/css/font-awesome.css";
import "../../../libs/bootstrap/bootstrap.min.css";

interface Lesson {
  _id: string;
  name: string;
  description: string;
  module: string;
}

interface Module {
  _id: string;
  name: string;
  description: string;
  course: string;
  lessons?: Lesson[];
}


function ModuleList() {
  const { courseId } = useParams();
  const modulesList: Module[] = modules.filter((module) => module.course === courseId);
  console.log(modulesList);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
      <div>
      <div className="d-flex justify-content-end gap-1 mb-2">
        <button type="button" className="btn btn-outline-dark rounded-0">Collapse All</button>
        <button type="button" className="btn btn-outline-dark rounded-0">View Progress</button>
        
        <div className="dropdown">
          <button className="btn btn-outline-dark rounded-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
            <i className="fa fa-check-circle-o wd-fg-color-green"></i> Publish All
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Publish all items and modules</a></li>
            <li><a className="dropdown-item" href="#">UnPublish</a></li>
          </ul>
        </div>

        <button type="button" className="btn btn-danger rounded-0">+ Modules</button>
        <button type="button" className="btn btn-outline-dark rounded-0"><i className="fa fa-ellipsis-v"></i></button>
      </div>
      <hr />

      <div>
        {modulesList.map((module, index) => (
              <div key={index} className="mb-5">
            <div className="list-group mb-5 rounded-0">
              <div key={index} className="list-group-item list-group-item-secondary">
                <i className="fa fa-ellipsis-v float-end me-4"></i>
                <i className="fa fa-plus float-end me-3"></i>
                <i className="fa fa-check-circle float-end me-3" style={{ color: 'green' }}></i>
                <i className="fa fa-ellipsis-v" aria-hidden="true"></i> <i className="fa fa-ellipsis-v" aria-hidden="true" style={{ marginRight:'5px'}}></i> {module.name} —— {module.description}
                {module.name} —— {module.description}
                </div>
              </div>
                {
                  module.lessons?.map((lesson, index) => (
                    <div key={index} className="list-group-item">
                      <i className="fa fa-ellipsis-v float-end me-4"></i>
                <i className="fa fa-check-circle float-end me-3" style={{ color: 'green' }}></i>
                      <i className="fa fa-file-text-o"></i> {lesson.name}<br/>{lesson.description}
                    </div>
                  ))
                }
            </div>
          ))
        }  
      </div>
    </div>   
  );
}
      {/* <!-- Add buttons here -->
      <button type="button" className="btn btn-outline-primary">Collapse All</button>
        <button type="button" className="btn btn-outline-secondary">View Progress</button>
        <button type="button" className="btn btn-outline-success">PUBLISH ALL</button>
        <button type="button" className="btn btn-outline-danger">Danger</button>
        <br/>
        <br/>

        {modulesList.map((module) => (
          <li
            className="list-group-item"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
    </>
  );
} */}
export default ModuleList;