import { GoogleLogout } from 'react-google-login';
import { useHistory } from 'react-router-dom';

const clientId = "358078563939-e9hg9bno3tla0v7kould76hnr2hvm5j3.apps.googleusercontent.com";

function Logout() {
    const history = useHistory(); // For React Router v6

    const onSuccess = () => {
        console.log('Logout made successfully');
        history.push('/');
    };

    return (
        <div id="signOutButton">
            <GoogleLogout
                clientId={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
                style={{ marginTop: '100px' }}
            />
        </div>
    )
}

export default Logout;