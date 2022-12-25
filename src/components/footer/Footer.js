import "./style.css";

import vk from "./../../img/icons/vk.svg";
import instagram from "./../../img/icons/instagram.svg";
import twitter from "./../../img/icons/twitter.svg";
import linkedIn from "./../../img/icons/linkedIn.svg";
import gitHub from "./../../img/icons/gitHub.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <a href="https://vk.com/ernur_duysenbek" target="_blank">
                <img src={vk} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.instagram.com/ernur_duisenbek/"
                target="_blank"
              >
                <img src={instagram} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a href="https://github.com/duisenbekernur" target="_blank">
                <img src={gitHub} alt="Link" />
              </a>
            </li>
            <li className="social__item">
              <a
                href="https://www.linkedin.com/in/%D0%B5%D1%80%D0%BD%D2%B1%D1%80-%D0%B4%D2%AF%D0%B9%D1%81%D0%B5%D0%BD%D0%B1%D0%B5%D0%BA-72a616258/"
                target="_blank"
              >
                <img src={linkedIn} alt="Link" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
