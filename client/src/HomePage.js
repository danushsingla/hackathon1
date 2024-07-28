import React, { useEffect } from 'react';
import { createUseStyles } from 'react-jss';
import { useLocation } from 'react-router-dom';
import LogoutButton from './components/logout.js';
import { useHistory } from 'react-router-dom';
import { supabase } from './supabaseClient.js';

// Define styles directly in the component file
const useStyles = createUseStyles({
  container: {
    padding: 20,
    textAlign: 'center',
  },
  heading: {
    color: 'blue',
    fontSize: '2rem',
  },
});

const HomePage = () => {
  const classes = useStyles(); // Use the defined styles
  const location = useLocation(); // Get location object
  const user = location.state?.user; // Access user details from state
  const history = useHistory();

  useEffect(() => {
    if (user) {
      const { username, email } = user;
      // Send user data to Supabase
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
    }
  }, [user]);

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Welcome to the Home Page!</h1>
      {user && (
        <div className={classes.userInfo}>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
        </div>
      )}
      <LogoutButton />
      <button onClick={() => history.push('/events')}>Browse</button> {/* Browse button */}
    </div>
  );
};

export default HomePage;
