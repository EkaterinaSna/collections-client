import React from 'react';
import './Header.scss';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: JSON.parse(localStorage.getItem("user")),
    }
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

  logOut() {
    localStorage.removeItem("user")
    window.open('/login', '_self')
  }

  render() {
    return <div className="header-collection">
      <header className="p-3 bg-dark text-white">
        <div className="container">
          <a className="navbar-brand" href="/">COLLECTIONS
            <i className="bi bi-chevron-double-right"> </i>
          </a>
          <a href="/create">
            <button type="button" className="btn btn-outline-warning">Create collection</button>
          </a>
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                  data-bs-toggle="dropdown" aria-expanded="false">
            Theme
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
            <li>
              <button className="dropdown-item" type="button" onClick={this.onDark.bind(this)}>Dark</button>
            </li>
            <li>
              <button className="dropdown-item" type="button" onClick={this.onLight.bind(this)}>Light</button>
            </li>
          </ul>
          <div className="auth-actions">
            {!this.state.user && <div className="log">
              <a href="/login">
                <button type="button" className="btn btn-outline-light me-2">Login</button>
              </a>
              <a href="/registration">
                <button type="button" className="btn btn-warning">Sign up</button>
              </a>
            </div>}
            {this.state.user && <div className="noLog">
              <button className="btn btn-outline-light me-2" onClick={this.logOut.bind(this)}>Log Out</button>
              {this.state.user && <a className="navbar-brand">{this.state.user.firstname} <i
                className="bi bi-person-square"></i></a>}

            </div>}
          </div>
        </div>
      </header>
    </div>
  }
}

export default Header;