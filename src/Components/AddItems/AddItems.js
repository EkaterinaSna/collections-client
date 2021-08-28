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
      aboutItem: '',
      userId: JSON.parse(localStorage.getItem('user')).id,
      fileInput: React.createRef(),
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
      .then(item => this.setState({...this.state, ...item}))
  };

  editItems() {
    fetch(`http://localhost:8000/collections/items/editItems/` + this.state.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        aboutItem: this.state.aboutItem,
        img: this.state.img,
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
        aboutItem: this.state.aboutItem,
        userId: this.state.userId,
        img: this.state.img,
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

  imageChange() {
    let reader = new FileReader();
    reader.readAsDataURL(this.state.fileInput.current.files[0]);
    reader.onload = () => {
      this.setState({
        img: reader.result
      });
    }
  }

  render() {
    return <div className="add-collection-item">
      <div className="form-group-container">
        <label>Name</label>
        <input type="text" className="form-control" value={this.state.name} onChange={this.nameChange.bind(this)}/>
      </div>
      <div className=" form-group-container">
        <label>About</label>
        <textarea rows="3" className="form-control" value={this.state.aboutItem}
                  onChange={this.aboutItemChange.bind(this)}/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputDescription">Description</label>
        <input ref={this.state.fileInput} type="file" className="form-control"
               name="title" onChange={this.imageChange.bind(this)}/>
      </div>
      <button type="submit" className="btn btn-outline-dark" onClick={this.onSave.bind(this)}>Save</button>
    </div>
  }
}

export default AddItems;