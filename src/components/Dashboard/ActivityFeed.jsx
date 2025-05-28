import React from 'react';
import './ActivityFeed.css';

const appointmentsThisWeek = 3;
const chartBars = [60, 40, 75, 30, 50, 20, 70]; // heights in percentage for 7 days

export default function ActivityFeed() {
  return (
    <div className="activity-feed">
      <div className='active'>
      <h2>Activity</h2>
      <p>{appointmentsThisWeek} appointments on this week</p>
      </div>
      <div className="chart">
        {chartBars.map((height, index) => (
          <div
            key={index}
            className="chart-bar"
            style={{ height: `${height}%` }}
          ></div>
          
        ))}
        <div className="chart">
        {chartBars.map((height, index) => (
          <div
            key={index}
            className="chart-bar"
            style={{ height: `${height}%` }}
          ></div>
          
        ))}
      </div>
    </div>
    </div>
  );
}