import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./sidebar.css";

export default function Sidebar() {
  const [cats, setCats] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get('http://localhost:5000/api/categories');
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">{t("Abou")}</span>
        <img
          src="https://c.tenor.com/I63tFFidY2oAAAAC/doctor-strange-doctor-strange-in-the-multiverse-of-madness.gif"          alt=""
        />
        <br />
        <span className="sidebarTitle">Marvel Comics nació en 1939 como una editorial de cómics de superhéroes fundada por Martin Goodman, que entonces tenía 31 años. En un primer momento, se trataba de un proyecto secundario del emprendedor, que ya tenía otra editorial especializada en novelas ambientadas en el oeste americano.</span>
        <br />
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">Mas Informacion:</span>
        <ul className="sidebarList">
        <li className="topListItem">
            <Link className="link" to="/">
              {t('Abou')}
            </Link>
            </li>
        </ul>
      </div>
      {/*--<div className="sidebarItem">
        <span className="sidebarTitle">{t("Follow")}</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
          </div>*/}
    </div>
  );
}
