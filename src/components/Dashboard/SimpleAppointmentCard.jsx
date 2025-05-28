import React from 'react';
import './SimpleAppointmentCard.css';

export default function SimpleAppointmentCard({ title, time, icon }) {
  return (
    <div className="simple-appointment-card">
      <div className="icon-box">{icon}</div>
      <div className="text-box">
        <h4>{title}</h4>
        <p>{time}</p>
      </div>
    </div>
  );
}