// This Footer Component should cover the following pages:
import { Link } from "react-router-dom";
import "./ComponentStyling.css";

function Footer() {
  return (
    <div className="footer">
      <Link className="footerLink" to="/About Us">
        About Us
      </Link>
      <Link className="footerLink" to="/Terms & Conditions">
        Terms & Conditions
      </Link>
      <Link className="footerLink" to="/Help">
        Help
      </Link>
      <Link className="footerLink" to="/Contact Us">
        Contact Us
      </Link>
    </div>
  );
}

export default Footer;
