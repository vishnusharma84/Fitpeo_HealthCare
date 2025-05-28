import React from 'react';
import CalendarView from './CalenderView';
import AnatomySection from './AnatomySection';
import './DashboardMaincontent.css'
import HealthStatusCards from './HealthStatusCards';
import ActivityFeed from './ActivityFeed';
import UpcomingSchedule from './UpcomingSchedule';
import DashboardSection from './DashboardSection';

 function DashboardMainContent() {
  return (
    <div className='fullpage'>
    <div className='full'>
     
      {/* Placeholder - individual subcomponents will be added here */}
     <div className='vk'> 
           <div className='mid'>
            <div className='h'>
              <h2>Dashboard </h2>
              <h6>This</h6>
            </div>
              
              <AnatomySection/>
             </div>
          <div className='hs'>
       {/* <HealthStatusCards/> */}
          <DashboardSection/>

         </div>
      </div>
      <div className='ac'>
      <ActivityFeed/>
     </div>
     </div>
     <div className='cv'>
      <CalendarView/>
      <UpcomingSchedule/>
      </div>
    </div>
  );
}
export default DashboardMainContent;