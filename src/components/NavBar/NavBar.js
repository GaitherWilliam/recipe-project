import React, { useContext } from 'react'
import './NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faStar } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import LoginButton from '../Login/LoginButton';
import LogoutButton from '../Login/LogoutButton'
import { UserContext } from '../../App';



export default function NavBar() {

    const { activeUser } = useContext(UserContext)

    return (

        <div className='nav-root'>
            <nav className='nav-bar' >
                <div className='left'>
                    <div>
                        <Link to="/">
                            <FontAwesomeIcon icon={faHouse} className='icon' />
                        </Link>
                    </div>
                    <Link to='/favorites'>
                        <FontAwesomeIcon icon={faStar} className='icon' />
                    </Link>
                </div>
                <div className='right'>
                    {activeUser
                        ? (
                            <>
                                <div className='active-user'>{activeUser.displayName} </div>
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
