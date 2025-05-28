// import React from 'react';
// import './UpcomingSchedule.css';
// import SimpleAppointmentCard from './SimpleAppointmentCard';

// const upcomingAppointments = [
//   {
//     day: 'On Thursday',
//     appointments: [
//       { title: 'Health Checkup Complete', time: '09:00 AM' },
//       { title: 'Ophthalmologist', time: '11:00 AM' }
//     ]
//   },
//   {
//     day: 'On Saturday',
//     appointments: [
//       { title: 'Cardiologist', time: '01:00 PM' },
//       { title: 'Neurologist', time: '03:00 PM' }
//     ]
//   }
// ];

// export default function UpcomingSchedule() {
//   return (
//     <div className="upcoming-schedule">
//       <h2>The Upcoming Schedule</h2>
//       {upcomingAppointments.map((block, index) => (
//         <div className="day-block" key={index}>
//           <h3>{block.day}</h3>
//           <div className="appointments">
//             {block.appointments.map((appt, idx) => (
//               <SimpleAppointmentCard key={idx} title={appt.title} time={appt.time} />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import React from 'react';
import './UpcomingSchedule.css';
import { FaHeart } from 'react-icons/fa';
// import { FaUserMd } from 'react-icons/fa6';
import { FaUserMd } from 'react-icons/fa';

import { GiEyeTarget } from 'react-icons/gi';

const UpcomingSchedule = () => {
  return (
    <div className="schedule-container">
      <h2 className="heading">The Upcoming Schedule</h2>

      <div className="day-section">
        <h3>On Thursday</h3>
        <div className="card-row">
          <div className="card">
            <p>Health Checkup complete</p>
            <span>11:00 AM</span>
          </div>
          <div className="card">
            <p>Ophthalmologist <GiEyeTarget /></p>
            <span>14:00 PM</span>
          </div>
        </div>
      </div>

      <div className="day-section">
        <h3>On Saturday</h3>
        <div className="card-row">
          <div className="card">
            <p>Cardiologist <FaHeart /></p>
            <span>12:00 AM</span>
          </div>
          <div className="card">
            <p>Neurologist 👨🏻‍⚕️</p>
            <FaUserMd />
            <span>16:00 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
