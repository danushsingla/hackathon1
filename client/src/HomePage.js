import React from 'react';
import { createUseStyles } from 'react-jss';

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

  return (
    <div className={classes.container}>
      <h1 className={classes.heading}>Welcome to the Home Page!</h1>
    </div>
  );
};

export default HomePage;
