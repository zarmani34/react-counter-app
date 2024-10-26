import React from 'react';

const NavBar = ({totalCounter}) => {
    return ( <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar{" "}
            <span className="bg bg-pill bg-secondary p-2">
              {totalCounter}
            </span>
          </a>
        </div>
      </nav> );
}
 
export default NavBar;