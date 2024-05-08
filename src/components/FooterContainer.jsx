import "./footer.css";
import { GiManualJuicer } from "react-icons/gi";
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

function Logo() {
  return (
  <div className="flex justify-left p-2">
  <h1 className="font-bold text-5xl bg-slate-500 "> COOL BLOG </h1>
  </div> 
  );
  }

  function SocialMedia() {
    return (
    <div className="flex justify-center p-2">
    <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
    <a href="https://twitter.com"><i className="fab fa-twitter"></i></a>
    <a href="https://instagram.com"><i className="fab fa-instagram"></i></a>
    </div>
    );
    }


function FooterContainer() {
  return (
    <div>
      <GiManualJuicer />
      <Logo />
      
      < FaFacebookF/>
      < FaTwitter/>
      <  FaInstagram  />
      <SocialMedia />
    
    </div>
  );
}

export default FooterContainer;