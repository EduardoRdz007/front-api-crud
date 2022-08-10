import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import "./topbar.css";
import { useTranslation } from "react-i18next";

export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "http://localhost:5000/images/"
  const {i18n, t} = useTranslation();
    function changeLaguage(language){
        i18n.changeLanguage(language);
      }

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  return (
    
    <div className="top">
      <p
         className={`App-link ${
           i18n.language === "es" ? "selected" : "unselected"
         }`}
         onClick={() => changeLaguage("es")}
       >
        <button class="btnMx">🇺🇸</button> 
       </p>
       <p
         className={`App-link ${
           i18n.language === "en" ? "selected" : "unselected"
         }`}
         onClick={() => changeLaguage("en")}
       >
         <button class="btnUs">🇲🇽</button>
       </p>
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              {t('Ini')}
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              {t('Abou')}
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              {t('Con')}
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/write">
              {t('Esc')}
            </Link>
          </li>
          <li className="topListItem" onClick={handleLogout}>
            {user && t("Sesion")}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={PF+user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
              {t('IS')}
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
              {t('REG')}
              </Link>
            </li>
          </ul>
        )}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
      
    </div>
  );
}
