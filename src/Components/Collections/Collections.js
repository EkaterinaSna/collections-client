import React from "react";
import './Collections.css';

class Collections extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: [],
    };
    this.loadCollection();
  }

  loadCollection() {
    fetch('http://localhost:8000/collections')
      .then(response => response.json())
      .then(collection => this.setState({ collection }))
  }
  delete(id) {
    fetch('http://localhost:8000/collections/delete/' + id, {
      method: 'DELETE',})
      .then(() => this.loadCollection())
  }
  render() {
    return <div>
      <h1>MY COLLECTIONS</h1>
        <div className="col">
          {this.state.collection.map(collection =>
          <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
              <div className="card-body">
                  <div>
                    <h5 className="card-title">{collection.name}</h5>
                    <p className="card-text">{collection.aboutCollection}</p>
                  </div>
                <button type="button" className="btn btn-outline-danger" onClick={() => this.delete(collection.id)}>Delete</button>
                <ul className="nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href={"/#/" + collection.id + "/items"}>List Collection</a>
                  </li>
                </ul>
              </div>
          </div>
          )}
        </div>
      </div>
  }
}

export default Collections;