import React from 'react';
import './SwimmingPage.css'; // Assuming you move your CSS to a separate file


const SwimmingPage = () => {
 return (
   <div>
     <div className="header">
       <h1>Swimming Predictions</h1>
     </div>
     <div className="container">
       <div className="game">
         <h2>Men's 200m Freestyle - Heats</h2>
         <div className="input-group">
           <label htmlFor="time-mens-200m-freestyle">Time Prediction (minutes:seconds)</label>
           <input type="text" id="time-mens-200m-freestyle" placeholder="e.g., 1:45" />
         </div>
         <div className="input-group">
           <label htmlFor="winner-mens-200m-freestyle">Who Will Win?</label>
           <input type="text" id="winner-mens-200m-freestyle" placeholder="e.g., Thomas Neill" />
         </div>
       </div>
       <div className="game">
         <h2>Men's 400m Individual Medley - Heats</h2>
         <div className="input-group">
           <label htmlFor="time-mens-400m-medley">Time Prediction (minutes:seconds)</label>
           <input type="text" id="time-mens-400m-medley" placeholder="e.g., 4:15" />
         </div>
         <div className="input-group">
           <label htmlFor="winner-mens-400m-medley">Who Will Win?</label>
           <input type="text" id="winner-mens-400m-medley" placeholder="e.g., Daiya Seto" />
         </div>
       </div>
       <div className="game">
         <h2>Women's 100m Breaststroke - Heats</h2>
         <div className="input-group">
           <label htmlFor="time-womens-100m-breaststroke">Time Prediction (minutes:seconds)</label>
           <input type="text" id="time-womens-100m-breaststroke" placeholder="e.g., 1:05" />
         </div>
         <div className="input-group">
           <label htmlFor="winner-womens-100m-breaststroke">Who Will Win?</label>
           <input type="text" id="winner-womens-100m-breaststroke" placeholder="e.g., Rouxin Tan" />
         </div>
       </div>
       <div className="game">
         <h2>Men's 100m Backstroke - Heats</h2>
         <div className="input-group">
           <label htmlFor="time-mens-100m-backstroke">Time Prediction (minutes:seconds)</label>
           <input type="text" id="time-mens-100m-backstroke" placeholder="e.g., 0:52" />
         </div>
         <div className="input-group">
           <label htmlFor="winner-mens-100m-backstroke">Who Will Win?</label>
           <input type="text" id="winner-mens-100m-backstroke" placeholder="e.g., Adam Jazz" />
         </div>
       </div>
       <div className="game">
         <h2>Women's 200m Freestyle - Heats</h2>
         <div className="input-group">
           <label htmlFor="time-womens-200m-freestyle">Time Prediction (minutes:seconds)</label>
           <input type="text" id="time-womens-200m-freestyle" placeholder="e.g., 1:55" />
         </div>
         <div className="input-group">
           <label htmlFor="winner-womens-200m-freestyle">Who Will Win?</label>
           <input type="text" id="winner-womens-200m-freestyle" placeholder="e.g., Duana Lama" />
         </div>
       </div>
       <button className="submit-btn">Submit Predictions</button>
     </div>
   </div>
 );
};


export default SwimmingPage;
