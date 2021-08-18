import React from "react";
import './ItemsCollection.scss';

class ItemsCollection extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      itemsCollection: [],
      collectionId: props.match.params.id,
    };
    this.loadItemsCollection();
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

  render() {
    return <div className="items-collection container">
      <a href={"/" + this.state.collectionId + "/add"}>
        <button type="button" className="btn btn-outline-dark">Add</button>
      </a>
      <div className="row row-cols-1 row-cols-md-2 g-4">
        {this.state.itemsCollection.map(item =>
          <div className="col">
            <div className="card">
              <div className="card-body">
                <a href={"/:id"}><h5 className="card-title">{item.name}</h5></a>
                <p className="card-text">{item.aboutItem}</p>

                <div className="actions">
                  <button type="button" className="btn btn-outline-danger" onClick={() => this.delete(item.id)}>Delete
                  </button>
                  <a className="nav-link" href={"/" + item.id + "/editItems"}>Edit</a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  }
}

export default ItemsCollection;