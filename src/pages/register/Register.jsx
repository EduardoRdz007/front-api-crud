import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./register.css";
import { useTranslation } from "react-i18next";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { t} = useTranslation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    try {
      const res = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        email,
        password,
      });
      res.data && window.location.replace("/login");
    } catch (err) {
      setError(true);
    }
  };
  return (
    <div className="register">
      <span className="registerTitle">{t('REG')}</span>
      <form className="registerForm" onSubmit={handleSubmit}>
        <label>{t('USER')}</label>
        <input
          type="text"
          className="registerInput"
          placeholder=""
          onChange={(e) => setUsername(e.target.value)}
        />
        <label>{t('EMAIL')}</label>
        <input
          type="text"
          className="registerInput"
          placeholder=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>{t('PASS')}</label>
        <input
          type="password"
          className="registerInput"
          placeholder=""
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="registerButton" type="submit">
        {t('REG')}
        </button>
      </form>
      <button className="registerLoginButton">
        <Link className="link" to="/login">
        {t('IS')}
        </Link>
      </button>
      {error && <span style={{color:"red", marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}
