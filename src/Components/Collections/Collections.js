import React from "react";
import './Collections.scss';

class Collections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
      users: [],
      firstname: '',
      user: JSON.parse(localStorage.getItem("user")),
      userId: localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).id,
    };
    this.loadCollection();
    this.loadUsers();
  }

  loadUsers() {
    fetch('http://localhost:8000/users')
      .then(response => response.json())
      .then(users => this.setState({...this.state, users}))
  }

  loadCollection() {
    fetch('http://localhost:8000/collections')
      .then(response => response.json())
      .then(collection => this.setState({collection}))
  }

  delete(id) {
    fetch('http://localhost:8000/collections/delete/' + id, {
      method: 'DELETE',
    })
      .then(() => this.loadCollection())
  }

  getUserFirstname(userId) {
    return userId && this.state.users.length && this.state.users.find(item => item.id === userId).firstname;
  }

  render() {
    return <div className="collection-list">
      <div className="col">
        {this.state.collection.map(collection =>
          <div className="card">
            <img src={collection.img} className="card-img-top"/>
            <div className="card-body">
              <div>
                <h5 className="card-title" title={collection.name}>{collection.name}</h5>
                <p className="card-text">{collection.aboutCollection}</p>
              </div>
              <span className="text">Creator: {this.getUserFirstname(collection.userId)} <i className="bi bi-person-fill"/></span>
              <div className="actions">
                {this.state.user && this.state.user.id === collection.userId &&
                <button type="button" className="btn btn-outline-danger"
                        onClick={() => this.delete(collection.id)}>Delete</button>}
                {this.state.user && this.state.user.id === collection.userId &&
                <a className="nav-link" aria-current="page" href={"/" + collection.id + "/edit"}>Edit</a>}
                <a className="nav-link active list-link" aria-current="page" href={"/" + collection.id + "/items"}>
                  List Collection
                  <i className="bi bi-chevron-double-right"></i> </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  }
}

export default Collections;