// This Footer Component should cover the following pages:
import { Link } from "react-router-dom";

// The Footer bar should make sure that it is in line with the UI and design. (Colours and such)

function Footer() {
  return (
    <div className="footer">     
      <ul>
        <li>
          <Link to="/About Us" className="grey-text text-lighten-3">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/Terms & Conditions" className="grey-text text-lighten-3">
            Terms & Conditions
          </Link>
        </li>
        <li>
          <Link to="/Help" className="grey-text text-lighten-3">
            Help
          </Link>
        </li>
        <li>
          <Link to="/Contact Us" className="grey-text text-lighten-3">
            Contact Us
            © 2023 Copyright
          </Link>
          
        </li>
      </ul>
    </div>
  );
}

export default Footer;
