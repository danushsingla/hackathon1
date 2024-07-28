import React, { useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { useLocation } from 'react-router-dom';
import LogoutButton from './components/logout.js';
import { useHistory } from 'react-router-dom';
import { supabase } from './supabaseClient.js';
import { useUser } from './UserContext';

// Define styles directly in the component file
const useStyles = createUseStyles({
  container: {
    padding: 20,
    textAlign: 'center',
    position: 'relative', // Added relative positioning
  },
  heading: {
    color: 'blue',
    fontSize: '2rem',
  },
  fileContent: {
    marginTop: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#f9f9f9',
    textAlign: 'left', // Align text to left for better readability
    maxWidth: '800px', // Limit the width of the content area
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  gameSection: {
    marginBottom: '20px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '8px',
    backgroundColor: '#fff',
  },
  gameTitle: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  gameDetails: {
    fontSize: '1rem',
  },
  scoreDisplay: {
    position: 'absolute',
    top: 20,
    right: 20,
    fontWeight: 'bold',
    fontSize: '1.2rem',
    backgroundColor: '#fff',
    padding: '5px 10px',
    border: '1px solid #ddd',
    borderRadius: '5px',
  },
});

const HomePage = () => {
  const [fileContent, setFileContent] = useState(null); // State for file content
  const [score, setScore] = useState(0); // State for score
  const { userC, setUser } = useUser();
  const classes = useStyles(); // Use the defined styles
  const location = useLocation(); // Get location object
  const user = location.state?.user; // Access user details from state
  const history = useHistory();

  useEffect(() => {
    if (user) {
      setUser(user);
      const { username, email } = user;

      // Save user data to Supabase
      const saveUserData = async () => {
        const { data, error } = await supabase
          .from('users') // Replace with your table name
          .insert([{ username, email }]);

        if (error) {
          console.error('Error saving user data:', error);
        } else {
          console.log('User data saved:', data);
        }
      };

      saveUserData();

      // Fetch score from Supabase
      const fetchScore = async () => {
        try {
          const { data, error } = await supabase
            .from('users') // Replace with your table name
            .select('score')
            .eq('username', username)
            .single();

          if (error) {
            console.error('Error fetching score:', error);
            setScore(0);
          } else {
            setScore(data.score || 0); // Set score or default to 0
          }
        } catch (err) {
          console.error('Unexpected error:', err);
          setScore(0);
        }
      };

      fetchScore();

      // Fetch file content from Supabase Storage
      const fetchFileContent = async () => {
        try {
          const { data, error } = await supabase.storage
            .from('predictions') // Replace with your storage bucket name
            .download(`${username}-predictions.txt`);

          if (error) {
            console.error('Error downloading file:', error);
            setFileContent('Error downloading file.');
          } else {
            const text = await data.text();
            if (text.trim()) { // Check if file content is not empty
              try {
                const json = JSON.parse(text);
                setFileContent(json);
              } catch (e) {
                console.error('Error parsing JSON:', e);
                setFileContent('Error parsing file content.');
              }
            } else {
              setFileContent('No content in file.');
            }
          }
        } catch (err) {
          console.error('Unexpected error:', err);
          setFileContent('Unexpected error occurred.');
        }
      };

      fetchFileContent();
    }
  }, [location.state?.user, setUser, user]);

  // Function to format and capitalize game title
  const formatGameTitle = (title) => {
    const formattedTitle = title
      .replace(/([a-z])([A-Z])/g, '$1 $2') // Add space before capital letters
      .replace(/([A-Z])([A-Z][a-z])/g, '$1 $2'); // Add space between capital letters and lowercase letters

    const words = formattedTitle.split(' ');
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()); // Capitalize first letter

    if (capitalizedWords.length === 2) {
      return capitalizedWords.join(' vs ');
    }
    return capitalizedWords.join(' ');
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Welcome to the Home Page!</h1>
      <div className={classes.scoreDisplay}>
        <strong>Score:</strong> {score}
      </div>
      {user && (
        <div className={classes.userInfo}>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
      {fileContent && typeof fileContent === 'object' && (
        <div className={classes.fileContent}>
          <h2>Your Predictions:</h2>
          {Object.entries(fileContent).map(([game, { score, winner }]) => (
            <div key={game} className={classes.gameSection}>
              <div className={classes.gameTitle}>
                {formatGameTitle(game)}
              </div>
              <div className={classes.gameDetails}>
                <p><strong>Score:</strong> {score}</p>
                <p><strong>Winner:</strong> {winner}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      <LogoutButton />
      <button onClick={() => history.push('/events')}>Browse</button> {/* Browse button */}
    </div>
  );
};

export default HomePage;
