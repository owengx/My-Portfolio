import '../styles/Navigation.css'
import React from 'react';
import { Link} from 'react-router-dom';
// import { Link, useLocation} from 'react-router-dom';

function Navigation ({ currentPage, handlePageChange }) {
  // const currentPage = useLocation().pathname;
    return (
      <ul className="nav">
         {/* <h1 className = "name">Owen Gayle</h1> */}
        <li className="nav">
          <Link
            to="#about"
            onClick={() => handlePageChange('About')}
            // This is a conditional (ternary) operator that checks to see if the current page is "Home"
            // If it is, we set the current page to 'nav-link-active', otherwise we set it to 'nav-link'
            className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
          >
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="#portfolio"
            onClick={() => handlePageChange('Portfolio')}
            // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
          >
            Portfolio
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="#contact"
            onClick={() => handlePageChange('Contact')}
            // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
          >
            Contact
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="#resume"
            onClick={() => handlePageChange('Resume')}
            // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
            className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
          >
            Resume
          </Link>
        </li>
      </ul>
    );
  }
  
  export default Navigation;