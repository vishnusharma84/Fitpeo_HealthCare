
// import React from 'react';
// import './HealthStatusCards.css';

// const healthData = [
//   {
//     title: 'Lungs',
//     status: 'Issue detected',
//     color: 'red',
//     date: 'Oct 12, 2021'
//   },
//   {
//     title: 'Teeth',
//     status: 'Healthy',
//     color: 'green',
//     date: 'Oct 08, 2021'
//   },
//   {
//     title: 'Bone',
//     status: 'Good',
//     color: 'green',
//     date: 'Oct 03, 2021'
//   }
// ];

// export default function HealthStatusCards() {
//   return (
//     <div className="health-status-cards">
//       {healthData.map((item, index) => (
//         <div className="health-card" key={index}>
//           <h3>{item.title}</h3>
//           <p style={{ color: item.color }}>{item.status}</p>
//           <span className="date">{item.date}</span>
//         </div>
//       ))}
//     </div>
//   );
// }
import React from 'react';
import './HealthStatusCards.css';


const HealthStatusCard = ({ icon, label, color, level, date }) => {
  return (
    <div className="health-card">
      <div className="icon-label">
        <img src={icon} alt={label} className="icon" />
        <span className="label">{label}</span>
      </div>
      
      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${level}%`, backgroundColor: color }}
        ></div>
      </div>

      <div className="check-date">Date: {date}</div>
    </div>
  );
}
export default HealthStatusCard;
