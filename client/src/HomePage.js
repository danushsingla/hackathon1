import React from 'react';
import { createUseStyles } from 'react-jss';
import { useLocation } from 'react-router-dom';
import LogoutButton from './components/logout.js';

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
    </div>
  );
};

export default HomePage;
