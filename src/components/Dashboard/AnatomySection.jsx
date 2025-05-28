import React from 'react';
import './AnatomySection.css';
import bodyImage from '../../assets/human-body.jpg'; // placeholder image or illustration

const indicators = [
  { label: 'Healthy Heart', status: 'Good', color: 'green', top: '20%', left: '45%' },
  { label: 'Lungs', status: 'Issue', color: 'red', top: '35%', left: '47%' },
  { label: 'Teeth', status: 'Good', color: 'green', top: '12%', left: '50%' },
  { label: 'Bone', status: 'Good', color: 'green', top: '70%', left: '45%' }
];

export default function AnatomySection() {
  return (
    <div className="anatomy-section">
      <div className="image-container">
        <img src={bodyImage} alt="Human Anatomy" className="body-image" />
        {indicators.map((item, index) => (
          <div
            key={index}
            className="indicator"
            style={{ top: item.top, left: item.left, borderColor: item.color }}
          >
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}