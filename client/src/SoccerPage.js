import React from 'react';
import { useUser } from './UserContext'; // Import the useUser hook
import { supabase } from './supabaseClient.js';
import { useHistory } from 'react-router-dom'; // Import useNavigate

const SoccerPage = () => {
  const { user } = useUser(); // Access user data from context
  const history = useHistory(); // Initialize useNavigate

  const handleSubmit = async () => {
    if (!user) {
      console.error('User object is undefined');
      return;
    }

    const formData = {
      australiaZambia: {
        score: document.getElementById('winning-score-australia-zambia').value,
        winner: document.getElementById('winner-australia-zambia').value
      },
      spainNigeria: {
        score: document.getElementById('winning-score-spain-nigeria').value,
        winner: document.getElementById('winner-spain-nigeria').value
      },
      franceCanada: {
        score: document.getElementById('winning-score-france-canada').value,
        winner: document.getElementById('winner-france-canada').value
      },
      usGermany: {
        score: document.getElementById('winning-score-us-germany').value,
        winner: document.getElementById('winner-us-germany').value
      }
    };

    const fileContent = JSON.stringify(formData, null, 2);
    const { username } = user;

    // Upload file to Supabase Storage
    const { data, error } = await supabase.storage
      .from('predictions') // Replace with your storage bucket name
      .upload(`${username}-predictions.txt`, new Blob([fileContent], { type: 'text/plain' }));

    if (error) {
      console.error('Error uploading file:', error);
    } else {
      console.log('File uploaded successfully:', data);
      // Navigate to /home after successful upload
      history.push('/home');
    }
  };

  return (
    <div>
      <div className="header">
        <h1>Soccer Predictions</h1>
      </div>
      <div className="container">
        {/* Form fields */}
        <div className="game">
          <h2>Australia vs Zambia</h2>
          <div className="input-group">
            <label htmlFor="winning-score-australia-zambia">Winning Score Prediction</label>
            <input type="text" id="winning-score-australia-zambia" placeholder="e.g., 3" />
          </div>
          <div className="input-group">
            <label htmlFor="winner-australia-zambia">Who Will Win?</label>
            <input type="text" id="winner-australia-zambia" placeholder="e.g., Australia" />
          </div>
        </div>
        <div className="game">
          <h2>Spain vs Nigeria</h2>
          <div className="input-group">
            <label htmlFor="winning-score-spain-nigeria">Winning Score Prediction</label>
            <input type="text" id="winning-score-spain-nigeria" placeholder="e.g., 2" />
          </div>
          <div className="input-group">
            <label htmlFor="winner-spain-nigeria">Who Will Win?</label>
            <input type="text" id="winner-spain-nigeria" placeholder="e.g., Spain" />
          </div>
        </div>
        <div className="game">
          <h2>France vs Canada</h2>
          <div className="input-group">
            <label htmlFor="winning-score-france-canada">Winning Score Prediction</label>
            <input type="text" id="winning-score-france-canada" placeholder="e.g., 1" />
          </div>
          <div className="input-group">
            <label htmlFor="winner-france-canada">Who Will Win?</label>
            <input type="text" id="winner-france-canada" placeholder="e.g., Draw" />
          </div>
        </div>
        <div className="game">
          <h2>United States vs Germany</h2>
          <div className="input-group">
            <label htmlFor="winning-score-us-germany">Winning Score Prediction</label>
            <input type="text" id="winning-score-us-germany" placeholder="e.g., 3" />
          </div>
          <div className="input-group">
            <label htmlFor="winner-us-germany">Who Will Win?</label>
            <input type="text" id="winner-us-germany" placeholder="e.g., Germany" />
          </div>
        </div>
        <button className="submit-btn" onClick={handleSubmit}>Submit Predictions</button>
      </div>
    </div>
  );
};

export default SoccerPage;
