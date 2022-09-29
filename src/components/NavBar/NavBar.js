import React from 'react'
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Login/LogoutButton'
import { getAuth } from 'firebase/auth';



export default function NavBar() {

    const auth = getAuth()
    const user = auth.currentUser;

    return (
        <div className='nav-root'>
            <nav className='nav-bar' >
                <div className='left'>
                    <Link to="/recipes">
                        <FontAwesomeIcon icon={faHouse} className='icon' />
                    </Link>
                    {user &&
                        <Link to={'/favorites'}>
                            <FontAwesomeIcon icon={faStar} className='icon' />
                        </Link>
                    }
                </div>
                <div className='right'>
                    {user
                        ? (
                            <>
                                <div className='active-user'>{user.displayName} </div>
                                <LogoutButton />
                            </>
                        )
                        :
                        <div className="logged-out">
                            <LoginButton />
                        </div>
                    }
                </div>
            </nav>
        </div>
    )
}
