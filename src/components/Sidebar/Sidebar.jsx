import React from 'react';
import './Sidebar.css';
import { AiFillAppstore } from "react-icons/ai";
import { FaHistory } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { IoAddSharp } from "react-icons/io5";
import { GiStaticWaves } from "react-icons/gi";
import { FaRocketchat } from "react-icons/fa6";
import { HiOutlineSupport } from "react-icons/hi";
import { IoIosSettings } from "react-icons/io";


const navItems = [
  'Dashboard', 'History', 'Calendar', 'Appointments', 'Statistics', 'Chat', 'Support', 'Setting'
];
const icon=[<AiFillAppstore/>,<FaHistory/>,<FaCalendarAlt/>,<IoAddSharp/>,<GiStaticWaves/>,<FaRocketchat/>,<HiOutlineSupport/>,<IoIosSettings/>] 


export default function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Healthcare<span>.</span></h2>
      <div className="nav-section">
        <h4>General</h4>
        <div className='list'>
          <ul>
          {icon.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          {navItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        
        </div>
      </div>
    </div>
  );
}