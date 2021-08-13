import React from 'react';
import './Header.css';

class Header extends React.Component {


  render() {
    return <div>
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <a className="navbar-brand" href="/">COLLECTION</a>
          <a href="/#/create"><button type="button" className="btn btn-outline-light me-2">Create collection</button></a>

            <div className="text-end">
              <a href="/#/login"><button type="button" className="btn btn-outline-light me-2">Login</button></a>
              <a href="/#/registration"><button type="button" className="btn btn-warning">Sign up</button></a>
            </div>
          </div>
      </header>
    </div>
  }
}

export default Header;