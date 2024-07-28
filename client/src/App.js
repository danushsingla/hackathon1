import './App.css';
import LoginButton from './components/login.js';
import LogoutButton from './components/logout.js';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { useNavigate } from 'react-router-dom';

const clientId = "358078563939-e9hg9bno3tla0v7kould76hnr2hvm5j3.apps.googleusercontent.com";

function App() {
  const navigate = useNavigate(); // For React Router v6

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  }, []); // runs only once with []

  const handleLoginResult = (success) => {
    if (success) {
      navigate('/home'); // Redirect to Home if login is successful
    } else {
      // Handle login failure, maybe show an error message
      console.log('Login failed');
    }
  };


  return (
    <div className="App">
      <LoginButton onLoginResult={handleLoginResult} />
      <LogoutButton />
    </div>
  );
}

export default App;