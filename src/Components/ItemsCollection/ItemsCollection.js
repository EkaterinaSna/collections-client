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
    fetch(`http://localhost:8000/collections/items/${this.state.collectionId}`)
      .then(response => response.json())
      .then(itemsCollection => this.setState({ ...this.state, itemsCollection }))
  }

  delete(id) {
    fetch('http://localhost:8000/collections/items/delete/' + id, {
      method: 'DELETE',})
      .then(() => this.loadItemsCollection())
  }

  render() {
    return <div className="items-collection">
      <a href={"/#/" + this.state.collectionId + "/add"}><button type="button" className="btn btn-outline-dark">Add</button></a>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        <div className="col">
           {this.state.itemsCollection.map(itemsCollection =>
          <div className="card">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
              <h5 className="card-title">{itemsCollection.name}</h5>
              <p className="card-text">{itemsCollection.aboutItem}</p>
              <div className="actions">
                <button type="button" className="btn btn-outline-danger" onClick={() => this.delete(itemsCollection.id)}>Delete</button>
                <a className="nav-link" href={"/#/" + this.state.collectionId + "/editItems"}>Edit</a>
              </div>
            </div>
             </div>
          )}
        </div>
      </div>
    </div>
  }
}

export default ItemsCollection;