import React from 'react';

const Navbar = () => {
  return (
    
    <nav className="navbar navbar-expand-lg navbar-light">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item active">
            <a className="nav-link ms-4" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ms-4" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ms-4" href="#">Dental Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ms-4 " href="#">Reviews</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ms-4 " href="#">Blogs</a>
          </li>
          <li className="nav-item">
            <a className="nav-link ms-4 " href="#">Contact Us</a>
          </li>
        </ul>
      </div>
      
    </nav>
    
  );
};

export default Navbar;