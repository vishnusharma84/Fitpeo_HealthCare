import React from 'react';
import './styles/global.css';
import Header from './components/Header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import DashboardMainContent from './components/Dashboard/DashboardMaincontent'

export default function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div className="main-section">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}