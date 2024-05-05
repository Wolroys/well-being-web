import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import EventList from './components/Event';
import {login, register, getToken} from './auth/auth';


function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedToken = getToken();
    setIsLoggedIn(!!storedToken);
  }, []);
  
const handleLogin = async (email, password) => {
  try {
    const response = await login(email, password);
    const { token } = response;
    localStorage.setItem('jwtToken', token);
    setIsLoggedIn(true);
  } catch (error) {
    console.error(error);
  }
};

  return (
    <Router>
      <Routes>
        {!isLoggedIn && (
          <>
            <Route path='/register' element={<RegistrationForm />}/>
            <Route path='/login' element={<LoginForm />} />
          </>
        )}
        {isLoggedIn && <Route path='/' element={<EventList />} />}
      </Routes>
    </Router>
  );
}

export default App;
