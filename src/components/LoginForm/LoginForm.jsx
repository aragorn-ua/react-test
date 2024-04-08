import { useId } from "react";
import css from "./LoginForm.module.css"
import { useState } from 'react';


const LoginForm = ({ onLogin }) => {
/*****************************СSS */
const [background, setBackground] = useState('linear-gradient(45deg, rgba(255, 0, 0, 0.6), rgba(17, 0, 255, 0.37))');
const handleMouseMove = (e) => {
  const xPos = (e.nativeEvent.offsetX / e.target.offsetWidth) * 100;
  setBackground(`linear-gradient(-${xPos}deg, rgba(255, 0, 0, 0.6), rgba(17, 0, 255, 0.37))`);
};
/******************************** */


  const loginId = useId();
  const passwordId = useId();


    const handleSubmit = (evt) => {
      evt.preventDefault();

      const form = evt.target;
      const { login, password } = form.elements;

      // Викликаємо пропс onLogin
      onLogin({
        login: login.value,
        password: password.value,
      });

      form.reset();
    };

    return (
      <form onSubmit={handleSubmit}
      style={{ background }}
      onMouseMove={handleMouseMove}
      className={css.loginForm}
      >
        <label htmlFor={loginId}>Login</label>
        <input type="text" name="login" id={loginId} className={css.inputForm}/>
        <label htmlFor={passwordId}>Password</label>
        <input type="password" name="password" id={passwordId} className={css.inputForm}/>
        <button type="submit" style={{ background }} onMouseMove={handleMouseMove} className={css.btnForm}>Login</button>
      </form>
    );
  };

export default LoginForm;