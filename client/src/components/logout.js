import { GoogleLogout } from 'react-google-login';

const clientId = "358078563939-e9hg9bno3tla0v7kould76hnr2hvm5j3.apps.googleusercontent.com";

function Logout() {

    const onSuccess = () => {
        console.log('Logout made successfully');
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