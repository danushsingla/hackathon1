import { GoogleLogin } from 'react-google-login';

const clientId = "358078563939-e9hg9bno3tla0v7kould76hnr2hvm5j3.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {    
        console.log('LOGIN SUCCESS currentUser:', res.profileObj);
    };

    const onFailure = (res) => {
        console.log('LOGIN FAILED res:', res);
    };

    return (
        <div id="signInButton">
            <GoogleLogin
                clientId={clientId}
                buttonText="Login with Google"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                style={{ marginTop: '100px' }}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login;