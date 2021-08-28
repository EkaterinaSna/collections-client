import React from "react";
import './ItemsCollection.scss';
import {errorHandler} from "../utils/errorHandler";

class ItemsCollection extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      itemsCollection: [],
      collectionId: props.match.params.collectionId,
      id: props.match.params.id,
      userId: localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).id,
      user: JSON.parse(localStorage.getItem('user')),
      collection: [],
      users: [],
      firstname: '',
    };

    this.loadItemsCollection();
    this.loadCollection();
    this.loadUsers();
  }

  loadCollection() {
    fetch(`http://localhost:8000/collections/${this.state.collectionId}`)
      .then(response => response.json())
      .then(collection => this.setState({collection}))
  }

  loadItemsCollection() {
    fetch(`http://localhost:8000/collections/items/${this.state.collectionId}/list`)
      .then(response => response.json())
      .then(itemsCollection => this.setState({...this.state, itemsCollection}))
  }

  delete(id) {
    fetch('http://localhost:8000/collections/items/delete/' + id, {
      method: 'DELETE',
    })
      .then(() => this.loadItemsCollection())
  }

  getUserFirstname(userId) {
    return userId && this.state.users.length && this.state.users.find(item => item.id === userId).firstname;
  }

  loadUsers() {
    fetch('http://localhost:8000/users')
      .then(response => response.json())
      .then(users => this.setState({...this.state, users}))
  }

  render() {
    return <div className="items-collection container">
      {this.state.user && this.state.user.id === this.state.collection.userId && <a href={"/" + this.state.collectionId + "/add"}>
        <button type="button" className="btn btn-outline-dark">Add</button>
      </a>}

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {this.state.itemsCollection.map(item =>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <img src={item.img} className="card-img-top"/>
                <a href={'/' + this.state.collectionId + "/items/" + item.id}><h5 className="card-title" title={item.name}>{item.name}<i
                  className="bi bi-chevron-double-right"/></h5></a>
                <p className="card-text">{item.aboutItem}</p>
                <div>
                  <span className="text"> Creator: {this.getUserFirstname(item.userId)} <i className="bi bi-person-fill"/></span>
                </div>
                <h className="card-text">{new Date(item.createdAt).toDateString()}</h>
                {this.state.user && this.state.user.id === item.userId && <div className="actions">
                  <button type="button" className="btn btn-outline-danger" onClick={() => this.delete(item.id)}>Delete
                  </button>
                  <a className="nav-link" href={"/" + item.id + "/editItems"}>Edit</a>
                </div>}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  }
}

export default ItemsCollection;

