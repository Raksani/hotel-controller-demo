import React from "react";
import '../Styles/LoopPane.css';
/**
 * Our data comes from users-data.js
 * -----------------------------
 */
import services from "./pane-data";
import LightSwitch from "./LightSwitch"
import Stepper from './Stepper'
// import ConciergeCall from "./ConciergeCall";
/**
 * Our React component where we display data
 * -----------------------------
 */


function LoopPane() {
  return (
      <div>
      {services.map((service, index) => (
        <div key={index}>
          
        <div className="pane-container">
          <div className="text-container" id={service.id}>
              <div className="icon" id={service.id}></div>
              <div className="title" id={service.id}>{service.title}</div>
              <div className="detail" id={service.id}>{service.detail}</div>
              <div className="switch">
                {/* { service.id === 'light-style' ? <LightSwitch/> : service.id === 'air-style' ? <Stepper/> : service.id === 'concierge-style' ? <ConciergeCall/> : undefined} */}
                { service.id === 'light-style' ? <LightSwitch/> : service.id === 'air-style' ? <Stepper/> : undefined}
              </div>
          </div>
        </div>
        </div>
      ))}
      </div>
  );
}

export default LoopPane;
