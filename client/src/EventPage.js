import React from 'react';
import { Link, useLocation } from 'react-router-dom';

// Modify EventWidget to include user data in the navigation
const EventWidget = ({ image, title, link, user }) => (
  <Link
    to={{ pathname: `/${link}`, state: { user } }}
    style={styles.widget}
  >
    <h3 style={styles.title}>{title}</h3>
    <img src={image} alt={title} style={styles.widgetImage} />
  </Link>
);

const EventPage = () => {
  const location = useLocation();
  const user = location.state?.user; // Retrieve user data from location state

  // Array of event objects
  const events = [
    {
      image: 'https://via.placeholder.com/250x150',
      title: 'Basketball',
      link: 'basketball',
    },
    {
      image: 'https://via.placeholder.com/250x150',
      title: 'Track',
      link: 'track',
    },
    {
      image: 'https://via.placeholder.com/250x150',
      title: 'Soccer',
      link: 'soccer',
    },
    {
      image: 'https://via.placeholder.com/250x150',
      title: 'Swimming',
      link: 'swimming',
    },
    {
      image: 'https://via.placeholder.com/250x150',
      title: 'Event 5',
      link: '#event5',
    },
  ];

  return (
    <div style={styles.container}>
      {events.map((event, index) => (
        <EventWidget
          key={index}
          image={event.image}
          title={event.title}
          link={event.link}
          user={user} // Pass user data
        />
      ))}
    </div>
  );
};

// Inline styles
const styles = {
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    gap: '20px',
    padding: '20px',
    height: '100vh', // Full viewport height
    boxSizing: 'border-box',
  },
  widget: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textDecoration: 'none',
    color: '#333',
    border: '1px solid #ddd',
    borderRadius: '8px',
    overflow: 'hidden',
  },
  title: {
    margin: '0',
    padding: '10px',
    fontSize: '1.25rem',
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#f5f5f5',
    width: '100%',
  },
  widgetImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
};

export default EventPage;
