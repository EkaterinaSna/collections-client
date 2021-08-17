import React from "react";
import './Collections.scss';

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
    return <div className="collection-list">
      {/*<h1>MY COLLECTIONS</h1>*/}
        <div className="col">
          {this.state.collection.map(collection =>
          <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
              <div className="card-body">
                  <div>
                    <h5 className="card-title">{collection.name}</h5>
                    <p className="card-text">{collection.aboutCollection}</p>
                  </div>
                <div className="actions">
                  <button type="button" className="btn btn-outline-danger" onClick={() => this.delete(collection.id)}>Delete</button>
                  <a className="nav-link active" aria-current="page" href={"/#/" + collection.id + "/edit"}>Edit</a>
                  <a className="nav-link active list-link" aria-current="page" href={"/#/" + collection.id + "/items"}>List Collection</a>
                </div>
              </div>
          </div>
          )}
        </div>
      </div>
  }
}

export default Collections;