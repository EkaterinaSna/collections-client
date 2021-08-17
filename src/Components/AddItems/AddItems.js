import React from "react";
import './AddItems.scss';
import {errorHandler} from "../utils/errorHandler";

class AddItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      aboutItem: '',
      collectionId: props.match.params.id
    }

  if (this.state.collectionId) {
      this.loadItems()
  }
}

onSave() {
  if (this.state.collectionId) {
    this.editItems();
  } else {
    this.add();
  }
};

 loadItems() {
  fetch('http://localhost:8000/collections/items/' + this.state.collectionId)
    .then(response => response.json())
    .then(item => this.setState({...this.state, ...item}))
};

 editItems() {
  fetch(`http://localhost:8000/collections/items/editItems/` + this.state.collectionId, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: this.state.name,
      aboutItem: this.state.aboutItem
    }),
  })
    .then(response => errorHandler(response))
    .then(() => {
      this.props.history.push(process.env.PUBLIC_URL + "/#/items")
    });
};

  add() {
    fetch(`http://localhost:8000/collections/items/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        aboutItem: this.state.aboutItem,
        collectionId: this.state.collectionId
      }),
    })
      .then(() => {
        window.open(process.env.PUBLIC_URL + "/#/items", '_self')
        // document.location.reload();
      });
  };


  nameChange(event) {
    this.setState({
      ...this.state,
      name: event.target.value
    });
  };

  aboutItemChange(event) {
    this.setState({
      ...this.state,
      aboutItem: event.target.value
    });
  };

  render() {
    return <div className="add-collection-item">
      <form>
        <div className="form-group-container">
          <label>Name</label>
          <input type="text" className="form-control" value={this.state.name} onChange={this.nameChange.bind(this)}/>
        </div>
        <div class=" form-group-container">
          <label>About</label>
          <textarea rows="3" className="form-control" value={this.state.aboutItem}
                    onChange={this.aboutItemChange.bind(this)}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.onSave.bind(this)}>Save</button>
      </form>
    </div>
  }
}

export default AddItems;