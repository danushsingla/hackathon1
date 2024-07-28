import React from 'react';
import './TrackPage.css'; // Assuming you move your CSS to a separate file


const TrackPage = () => {
 return (
   <div>
     <div className="header">
       <h1>Track Predictions</h1>
     </div>
     <div className="container">
       <div className="event">
         <h2>Men's 20 km Race Walk</h2>
         <div className="input-group">
           <label htmlFor="time-mens-20km">Time of Completion (mm:ss)</label>
           <input type="text" id="time-mens-20km" placeholder="e.g., 20:30" />
         </div>
         <div className="input-group">
           <label htmlFor="winner-mens-20km">Who Will Win?</label>
           <input type="text" id="winner-mens-20km" placeholder="e.g., Kyle Swan" />
         </div>
       </div>
       <div className="event">
         <h2>Women's 20 km Race Walk</h2>
         <div className="input-group">
           <label htmlFor="time-womens-20km">Time of Completion (mm:ss)</label>
           <input type="text" id="time-womens-20km" placeholder="e.g., 30:45" />
         </div>
         <div className="input-group">
           <label htmlFor="winner-womens-20km">Who Will Win?</label>
           <input type="text" id="winner-womens-20km" placeholder="e.g., Erica Sena" />
         </div>
       </div>
       <button className="submit-btn">Submit Predictions</button>
     </div>
   </div>
 );
};


export default TrackPage;