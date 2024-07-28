import './App.css';
import LoginButton from './components/login.js';
import { useEffect } from 'react';
import { gapi } from 'gapi-script';
import { useHistory } from "react-router-dom";

const clientId = "358078563939-e9hg9bno3tla0v7kould76hnr2hvm5j3.apps.googleusercontent.com";

function App() {
  const history = useHistory(); // For React Router v6

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    };

    gapi.load('client:auth2', start);
  }, []); // runs only once with []

  const handleLoginResult = (success, userDetails) => {
    if (success) {
      history.push('/home', { user: userDetails }); // Redirect to Home if login is successful and push user information
    } else {
      // Handle login failure, maybe show an error message
      console.log('Login failed');
    }
  };


  return (
    <div className="App">
      <LoginButton onLoginResult={handleLoginResult} />
    </div>
  );
}

export default App;