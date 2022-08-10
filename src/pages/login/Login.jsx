import axios from "axios";
import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./login.css";
import { useTranslation } from "react-i18next";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isFetching } = useContext(Context);
  const { t } = useTranslation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <span className="loginTitle">{t('IS')}</span>
      <form className="loginForm" onSubmit={handleSubmit}>
        <label>{t('USER')}</label>
        <input
          type="text"
          className="loginInput"
          placeholder=""
          ref={userRef}
        />
        <label>{t('PASS')}</label>
        <input
          type="password"
          className="loginInput"
          placeholder=""
          ref={passwordRef}
        />
        <button className="loginButton" type="submit" disabled={isFetching}>
        {t('IS')}
        </button>
      </form>
      <button className="loginRegisterButton">
        <Link className="link" to="/register">
        {t('REG')}
        </Link>
      </button>
    </div>
  );
}
