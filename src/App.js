import React, { useEffect, useState } from "react";
import InputMask from 'react-input-mask';
import "./App.css";

function App() {
  const [state, setState] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
    repeatPassword: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (state.userName.length > 19)
      setError("Введено максимальное количество символов");
  }, [state.userName]);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
    // console.log(e.target.value);
  };

  const onBlurHandle = (e) => {
    if (!e.target.value) setError("Введите данные");
    else setError("");
  };

  const validateForm = (email, phone) => {
    const regEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(!regEmail.test(String(email).toLowerCase()))
    setError("Некорректно введен email");
    else setError ("");
    if(!regPhone.test(Number(phone)))
    setError("Некорректно введен телефон");
    else setError ("");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm(state.email, state.phone);
    if (state.password !== state.repeatPassword)
      setError("Пароли не совпадают!");
    console.log(
      "name: " + state.userName,
      "email: " + state.email,
      "phone: " + state.phone,
      "password: " + state.password,
      "repeatPassword: " + state.repeatPassword
    );
  };

  return (
    <div className="App">
      <div className="error">{error}</div>
      <form className="form" onSubmit={handleSubmit}>
        <label>Введите имя</label>
        <input
          name="userName"
          value={state.userName}
          onChange={handleChange}
          onBlur={onBlurHandle}
          
        />
        <label>Введите email</label>
        <input
          name="email"
          value={state.email}
          onChange={handleChange}
          onBlur={onBlurHandle}
        />
        <label>Введите телефон</label>
        {/* <InputMask mask="+7 (111)1111111" maskChar={" "} name="phone"
          value={state.phone}
          onChange={handleChange}
          onBlur={onBlurHandle}/> */}
        <input
          name="phone"
          value={state.phone}
          onChange={handleChange}
          onBlur={onBlurHandle}
          
        />
        <label>Введите пароль</label>
        <input
          name="password"
          value={state.password}
          onChange={handleChange}
          onBlur={onBlurHandle}
        />
        <label>Повторите пароль</label>
        <input
          name="repeatPassword"
          value={state.repeatPassword}
          onChange={handleChange}
          onBlur={onBlurHandle}
        />
        <button type="submit" className="button">
          Зарегистрироваться
        </button>
      </form>
    </div>
  );
}

export default App;
