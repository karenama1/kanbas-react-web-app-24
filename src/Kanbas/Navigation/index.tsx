import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./index.css";
import "./style.css";
import { FaRegUserCircle, FaTachometerAlt, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaCreativeCommons, FaDesktop, FaQuestion, FaUniversity } from 'react-icons/fa';

function KanbasNavigation() {
  const links = [
    { label: 'N', icon: <FaUniversity className="fs-2" style={{ color: 'red' }}  /> },
    { label: 'Account', icon: <FaRegUserCircle className="fs-2" style={{ color: 'red' }}/> },
    { label: 'Dashboard', icon: <FaTachometerAlt className="fs-2" style={{ color: 'red' }}/> },
    { label: 'Courses', icon: <FaBook className="fs-2" style={{ color: 'red' }}/> },
    { label: 'Calendar', icon: <FaRegCalendarAlt className="fs-2" style={{ color: 'red' }}/> },
    { label: 'Inbox', icon: <FaInbox className="fs-2" style={{ color: 'red' }}/> },
    { label: 'History', icon: <FaClock className="fs-2" style={{ color: 'red' }}/> },
    { label: 'Commons', icon: <FaCreativeCommons className="fs-2" style={{ color: 'red' }}/> },
    { label: 'Studio', icon: <FaDesktop className="fs-2" style={{ color: 'red' }}/> },
    { label: 'Help', icon: <FaQuestion className="fs-2" style={{ color: 'red' }}/> },
  ];

  const { pathname } = useLocation();

  return (
    <div>
      <ul className="wd-kanbas-navigation">
        {links.map((link, index) => (
          <li key={index} className={pathname.includes(link.label) ? 'wd-active' : ''}>
            <Link to={`/Kanbas/${link.label}`}>{link.icon} {link.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KanbasNavigation;
