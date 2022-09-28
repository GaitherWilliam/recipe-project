import { createContext, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import { useLocalStorage } from './hooks/useLocalStorage';

export const UserContext = createContext(null);

function App() {

  const [activeUser, setActiveUser] = useLocalStorage('activeUser');
  let location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname == '/') {
      navigate('/recipes')
    }
    // if the url is just 'domain.com/' -> nav to '/recipes'
  }, [location]);

  function login(newUser) {
    setActiveUser(newUser)
  };

  function logout() {
    setActiveUser(null);
  };

  return (

    <UserContext.Provider value={{ activeUser, login, logout }}>

      <div className="App">
        <NavBar />
        <h1 className='home-title'>Oooh, That Looks Good</h1>
        <Outlet />
      </div>
    </UserContext.Provider>
  );
}

export default App;
