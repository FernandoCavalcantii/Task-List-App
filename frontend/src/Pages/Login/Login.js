import React from 'react';
import Header from '../../Components/Header';
import style from './style.module.css';
import Footer from '../../Components/Footer/Footer';

const Login = () => {
  return (
    <>
      <Header />
      <main className={style.mainContainer}>
        <h2 className={style.firstHeader}>Organize your work and your life.</h2>
        <h2 className={style.secondHeader}>
          Align your team with Tasks Organizer!
        </h2>
      </main>
      <Footer />
    </>
  );
};

export default Login;
