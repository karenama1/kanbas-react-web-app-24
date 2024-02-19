import React from 'react';
import ModuleList from '../Modules/List';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'; 

function Home() {
  return (
    <div className="home-container">
      <div className="left-side-content">
        {/* <h2>Home</h2> */}
        <ModuleList />
        {/* Add other content for the left side as needed */}
      </div>
      <div className="status-sidebar">
      <div className="flex-grow-0 me-2 d-none d-lg-block" style={{width: '250px'}}>
          <button><i className="fa fa-file-o" aria-hidden="true"></i>Import Existing Content</button><br />
          <button><i className="fa fa-sign-in" aria-hidden="true"></i>Import from Commons</button><br />
          <button><i className="fa fa-life-ring" aria-hidden="true"></i>Choose Home Page</button><br />
          <button><i className="fa fa-bar-chart" aria-hidden="true"></i>View Course Stream</button><br />
          <button><i className="fa fa-bullhorn" aria-hidden="true"></i>New Announcement</button><br />
          <button><i className="fa fa-bar-chart" aria-hidden="true"></i>New Analytics</button><br />
          <button><i className="fa fa-bell" aria-hidden="true"></i>View Course Notification</button><br />
      </div>
    </div>
    </div>
  );
}

export default Home;


