import {
  faFacebook,
  faGithub,
  faYoutube
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Footer.css';
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div className="bg-danger ">
      <div className="container footer fs-3 ">
    
        <div>
          
          <p  className="mt-3 copyright">Copyright&copy; {date}. All rights reserved. </p>
        </div>
        <div className="icons ">
          <a href="https://www.facebook.com/" target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon></a>
          <a href="https://www.youtube.com/"  target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faYoutube}></FontAwesomeIcon></a>
          <a href="https://github.com/dmshikder"  target={'_blank'} rel="noreferrer"><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
          
          
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
