import React from 'react';
// import HealthStatusCard from './HealthStatusCards';
import HealthStatusCard from './HealthStatusCards';
// import lungsIcon from './assets/.jpg';
import lungsIcon from '../../assets/lungs.jpg';
import teethIcon from '../../assets/teeth.jpg';
// import teethIcon from './assets/teeth.jpg';
// import boneIcon from './assets/bone.jpg';
import boneIcon from '../../assets/bone.jpg';

function DashboardSection() {
  return (
    <div>
      <HealthStatusCard icon={lungsIcon} label="Lungs" color="darkred" level={80}date ="26 may 2025" />
      <HealthStatusCard icon={teethIcon} label="Teeth" color="skyblue" level={65} date ="26 may 2025"/>
      <HealthStatusCard icon={boneIcon} label="Bone" color="darkred" level={70}  date ="26 may 2025"/>
    </div>
  );
}

export default DashboardSection;
