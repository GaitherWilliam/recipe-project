import { getAuth, signOut } from 'firebase/auth';
import React, { useContext } from 'react'
import { UserContext } from '../../App';

export default function LoginButton() {

    const { logout, user } = useContext(UserContext);
    const auth = getAuth();

    function onLogoutClicked() {
        signOut(auth).then(() => {
            // Sign-out successful.
            logout(user);
        }).catch((error) => {
            // An error happened.
        });
    }

    return (
        <button type='button' onClick={onLogoutClicked}>
            Sign&nbsp;out
        </button>
    )
}
