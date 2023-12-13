import "./Footer.scss";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";


export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div class="footer-links">
          <ul>
            <li>
              <a href="https://github.com/Flunder620" target="_blank"><FaGithub />Github</a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/jose-g-b6587a142/" target="_blank"><FaLinkedin />
LinkedIn</a>
            </li>
            <li>
              <a href="https://stackoverflow.com/users/21830099/flunder620" target="_blank"><FaStackOverflow />Stack Overflow</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
