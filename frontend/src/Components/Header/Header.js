import React, { useContext, useEffect, useState } from 'react';
import LoginContext from '../../Context/Login/LoginContext';
import { useHistory } from 'react-router-dom';
import style from './style.module.css';
import API from '../../Api/api';

const LOGIN_URL = 'http://localhost:3001/login';

const Header = () => {
  const { userName, setUserName } = useContext(LoginContext);
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();
  const storageName = localStorage.getItem('user');

  useEffect(() => {
    if (userName.length >= 4 && password.length >= 8) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [userName, password]);

  const handleUserChange = ({ target }) => {
    setUserName(target.value);
  };

  const handlePasswordChange = ({ target }) => {
    setPassword(target.value);
  };

  const login = async () => {
    const data = {
      name: userName,
      password,
    };

    await axios
      .post(LOGIN_URL, data)
      .then((res) => localStorage.setItem('token', res.data.token));


    localStorage.setItem('user', userName);

    history.push('/tasks');
  };

  const logout = () => {
    setUserName('');
    setPassword('');
    localStorage.setItem('user', '');
    history.push('/');
  };

  return (
    <>
      {history.location.pathname === '/' ? (
        <header className={style.loginHeader}>
          <h1>Tasks Organizer</h1>
          <div className={style.profileContainer}>
            <input
              type='text'
              placeholder='Username'
              onChange={handleUserChange}
            />
            <input
              type='password'
              placeholder='Password'
              onChange={handlePasswordChange}
            />
            <button
              id='login-btn'
              type='submit'
              onClick={login}
              disabled={disabled}
            >
              Login
            </button>
          </div>
        </header>
      ) : (
        <header className={style.tasksHeader}>
          <h1>Tasks Organizer</h1>
          <div className={style.profileContainer}>
            {`User: ${storageName}`}
            <button type='submit' onClick={logout}>
              Logout
            </button>
          </div>
        </header>
      )}
    </>
  );
};

export default Header;
