import React from 'react';
import './Registration.scss';
import {errorHandler} from "../utils/errorHandler";


class Registration extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      email: '',
      password: ''
    }
  }
  registration() {
    fetch('http://localhost:8000/users/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({firstname: this.state.firstname, email: this.state.email, password: this.state.password}),
    })
      .then(() => {
        this.props.history.push(`/login`)
      });

  };

  emailChange(event) {
    this.setState({
      ...this.state,
      email: event.target.value
    });
  }

  passwordChange(event) {
    this.setState({
      ...this.state,
      password: event.target.value
    });
  }

  firstnameChange(event) {
    this.setState({
      ...this.state,
      firstname: event.target.value
    });
  }

  render() {
    return <div className='form-container'>
      <div className="mb-3">
        <label className="form-label">Email address</label>
        <input type="email" value={this.state.email} onChange={this.emailChange.bind(this)} className="form-control"
               aria-describedby="emailHelp"/>
      </div>
      <div className="mb-3">
        <label className="form-label">First Name</label>
        <input type="text" value={this.state.firstname} onChange={this.firstnameChange.bind(this)} className="form-control"/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
        <input type="password" value={this.state.password} onChange={this.passwordChange.bind(this)} className="form-control" id="exampleInputPassword1"/>
      </div>
      <button type="submit" className="btn btn-outline-dark" onClick={this.registration.bind(this)}>Sing up</button>
    </div>
  };
}

  export default Registration;