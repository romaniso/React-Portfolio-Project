import { AiFillFacebook, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import "../styles/FixedSocials.css";

export default function FixedSocials() {
  return (
    <section className="socials">
      <p>Follow</p>
      <div className="socials-indicator">
        <IoIosArrowDown />
      </div>
      <div className="socials-text">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/roman.isopenko"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/romaniso"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/roman-isopenko-b481b11ba/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
