import React from 'react';
import './BasketballPage.css';
const BasketballPage = () => {
 return (
   <div>
     <div className="header">
       <h1>Basketball Predictions</h1>
     </div>
     <div className="container">
       <div className="game">
         <h2>South Sudan vs Puerto Rico</h2>
         <div className="input-group">
           <label htmlFor="score-sudan-puerto">Score Prediction</label>
           <input type="text" id="score-sudan-puerto" placeholder="e.g., 85-78" />
         </div>
         <div className="input-group">
           <label htmlFor="winner-sudan-puerto">Who Will Win?</label>
           <input type="text" id="winner-sudan-puerto" placeholder="e.g., South Sudan" />
         </div>
       </div>
       <div className="game">
         <h2>Spain vs China</h2>
         <div className="input-group">
           <label htmlFor="score-spain-china">Score Prediction</label>
           <input type="text" id="score-spain-china" placeholder="e.g., 95-82" />
         </div>
         <div className="input-group">
           <label htmlFor="winner-spain-china">Who Will Win?</label>
           <input type="text" id="winner-spain-china" placeholder="e.g., Spain" />
         </div>
       </div>
       <div className="game">
         <h2>Serbia vs United States</h2>
         <div className="input-group">
           <label htmlFor="score-serbia-usa">Score Prediction</label>
           <input type="text" id="score-serbia-usa" placeholder="e.g., 88-90" />
         </div>
         <div className="input-group">
           <label htmlFor="winner-serbia-usa">Who Will Win?</label>
           <input type="text" id="winner-serbia-usa" placeholder="e.g., United States" />
         </div>
       </div>
       <div className="game">
         <h2>Serbia vs Puerto Rico</h2>
         <div className="input-group">
           <label htmlFor="score-serbia-puerto">Score Prediction</label>
           <input type="text" id="score-serbia-puerto" placeholder="e.g., 85-77" />
         </div>
         <div className="input-group">
           <label htmlFor="winner-serbia-puerto">Who Will Win?</label>
           <input type="text" id="winner-serbia-puerto" placeholder="e.g., Serbia" />
         </div>
       </div>
       <button className="submit-btn">Submit Predictions</button>
     </div>
   </div>
 );
};


export default BasketballPage;
