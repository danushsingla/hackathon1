import { GoogleLogin } from 'react-google-login';
import {PropTypes} from 'prop-types';

const clientId = "358078563939-e9hg9bno3tla0v7kould76hnr2hvm5j3.apps.googleusercontent.com";

function Login({onLoginResult}) {

    const goodResponse = (response) => {
        console.log('Google response:', response);
        const username = response.profileObj.name;
        const email = response.profileObj.email;
        onLoginResult(true, { username, email }); // Call the onSuccess callback
      };
    
    const badResponse = (response) => {
        console.log('Google response:', response);
        onLoginResult(false, null); // Call the onError callback
    };

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={goodResponse}
                onError={badResponse}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    )
}

Login.propTypes = {
    onLoginResult: PropTypes.func.isRequired, // PropTypes for the callback
};

export default Login;