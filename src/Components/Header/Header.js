import React from 'react';
import './Header.scss';

class Header extends React.Component {
    constructor(props) {
      super(props);

      this.onApplyTheme();
    }

    onDark() {
      localStorage.setItem('theme', 'dark');
      this.onApplyTheme();

    }

    onLight() {
      localStorage.setItem('theme', 'light');
      this.onApplyTheme();
    }

    onApplyTheme() {
      document.body.className = localStorage.getItem('theme') === 'dark' ? 'theme-dark' : 'theme-light'
    }

  render() {
    return <div className="header-collection">
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <a className="navbar-brand" href="/">COLLECTION</a>
           <div className="dropdown">
             <a href="/#/create"><button type="button" className="btn btn-outline-light me-2">Create collection</button></a>
             <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                     data-bs-toggle="dropdown" aria-expanded="false">
               Theme
             </button>
             <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
               <li><button className="dropdown-item" type="button" onClick={this.onDark.bind(this)}>Dark</button></li>
               <li><button className="dropdown-item" type="button" onClick={this.onLight.bind(this)}>Light</button></li>
             </ul>
             <div className="text-end">
               <a href="/#/login"><button type="button" className="btn btn-outline-light me-2">Login</button></a>
               <a href="/#/registration"><button type="button" className="btn btn-warning">Sign up</button></a>
             </div>
           </div>
          </div>
      </header>
    </div>
  }
}

export default Header;