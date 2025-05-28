import React from 'react';
import './Header.css';
import { FaBell, FaPlus } from 'react-icons/fa';
import CalendarView from '../Dashboard/CalenderView';
// import profilePic from '../../assets/user.png'; // Use placeholder image
import { IoMdSearch } from "react-icons/io";

export default function Header() {
  return (
    <div className="header">
      <input type="text" className="search-bar" placeholder="Search"/>
        <FaBell className="icon" />

      <div className="header-right">
        <div className="user-info">
          <img src='https://th.bing.com/th/id/OIP.302zgzUHVpOuGmsmRZudiAHaHk?w=247&h=252&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' alt="User Avatar" className="avatar" />
        </div>
        <button className="add-button">
          <FaPlus />
          {/* <CalendarView/> */}
        </button>
      </div>
    </div>
  );
}