import { MdEmail } from "react-icons/md";
import { ImPhone } from "react-icons/im";
import { BsLinkedin } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import "./footer-section.css";
import Button from "../../reusable-components/button-component/button-component.jsx";

function Footer() {
  function getYear() {
    let date = new Date();
    return date.getFullYear();
  }
  return (
    <div className="Footer bg-black text-light  px-3">
      <footer className="d-flex justify-content-center align-items-center gap-2 h-100 ">
        <div className="col-4  d-flex flex-column justify-content-center align-items-start p-5">
          <h2>Get In Touch</h2>
          <ul className="list-unstyled">
            <li className="gap-2 d-flex justify-content-center align-items-center">
              <span>
                <MdEmail />
              </span>
              <span>hr1@hotamil.com</span>
            </li>
            <li className="gap-2 d-flex justify-content-center align-items-center">
              <span>
                <ImPhone />
              </span>
              <span>717-555-1234</span>
            </li>
          </ul>
        </div>
        <div className="col-4 ">
          <Button color="btn-light " text="Contact Me"></Button>
        </div>
        <div className="col-4 d-flex flex-column justify-content-center align-items-end p-5">
          <ul className="list-unstyled gap-3 d-flex justify-content-center align-items-center">
            <li>
              <BsLinkedin />
            </li>
            <li>
              <ImFacebook2 />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
          <div>
            <span>
              Copy Right © <span>{getYear()}</span> KR
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
