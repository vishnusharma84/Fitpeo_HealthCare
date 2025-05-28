import React from 'react';
import './CalenderView.css';
// import { FaBell, FaPlus ,ArrowNarrowLeftIcon,ArrowNarrowRightIcon} from 'react-icons/fa';
// import { ArrowNarrowRightIcon, ArrowNarrowLeftIcon } from "@heroicons/react/outline"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import teeth from '../../assets/teeth.jpg';


const calendarDays = [
  'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
];

const calendarData = [
  '', '', '', '', 1, 2, 3,
  4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17,
  18, 19, 20, 21, 22, 23, 24,
  25, 26, 27, 28, 29, 30, 31
];

const appointments = {
  6: ['09:00'],
  12: ['11:00', '15:00'],
  15: ['13:00']
};

export default function CalendarView() {
  return (
    <div className="calendar-view">
        <div className='cpb'>
            <div>
      <h2>October 2021</h2>
      </div>
      <div className='pb'>
          {/* <img src='https://th.bing.com/th/id/OIP.302zgzUHVpOuGmsmRZudiAHaHk?w=247&h=252&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2' alt="User Avatar" className="img" />

      <button className="add-button">
        
                <FaPlus />
                {/* <CalendarView/> */}
              {/* </button> */} 
                <AiOutlineArrowLeft/>
                <AiOutlineArrowRight/>
              </div>
              </div>
      <div className="calendar-grid">
        {calendarDays.map((day, idx) => (
          <div className="calendar-day-label" key={idx}>{day}</div>
        ))}
        {calendarData.map((date, idx) => (
          <div className="calendar-cell" key={idx}>
            {date && <span className="date-number">{date}</span>}
            {appointments[date] && appointments[date].map((time, i) => (
              <div key={i} className="appointment-time">{time}</div>
            ))}
          </div>
        ))}
      </div>

      <div className="calendar-appointments">
        <div className="appointment-card ap1">
          <div className='the'>
          <h3>Dentist</h3>
          <img src={teeth}/>
          </div>
          <p>Oct 12, 11:00 AM</p>
          <h4>Dr.cameron william</h4>
        </div>
        <div className="appointment-card">
          <h3>Physiotherapy Appointment</h3>
          <p>Oct 12, 3:00 PM</p>
          <h5>DR.kevin</h5>
        </div>
      </div>
    </div>
  );
}