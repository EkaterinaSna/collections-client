import React from "react";
import './AddItems.scss';
import {errorHandler} from "../utils/errorHandler";

class AddItems extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collectionId: props.match.params.collectionId,
      id: props.match.params.id,
      name: '',
      aboutItem: ''
    }
  }

  componentWillMount() {
    if (this.state.id) {
      this.loadItem()
    }
  }

  onSave() {
    if (this.state.id) {
      this.editItems();
    } else {
      this.add();
    }
  };

  loadItem() {
    fetch('http://localhost:8000/collections/items/' + this.state.id)
      .then(response => response.json())
      .then(item => this.setState({ ...this.state, ...item}))
  };

  editItems() {
    fetch(`http://localhost:8000/collections/items/editItems/` + this.state.id, {
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
        this.props.history.push(`/${this.state.collectionId}/items`)
      });
  };

  add() {
    fetch(`http://localhost:8000/collections/items/add`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        collectionId: this.state.collectionId,
        name: this.state.name,
        aboutItem: this.state.aboutItem
      }),
    })
      .then(() => {
        this.props.history.push(`/${this.state.collectionId}/items`)
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
    </div>
  }
}

export default AddItems;