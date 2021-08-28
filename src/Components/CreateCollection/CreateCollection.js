import React from "react";
import './CreateCollection.scss';
import {errorHandler} from "../utils/errorHandler";

class CreateCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      name: '',
      aboutCollection: '',
      fileInput: React.createRef(),
    }

    if (this.state.id) {
      this.loadItem()
    }
  }

  onSave() {
    if (this.state.id) {
      this.edit();
    } else {
      this.create();
    }
  }

  edit() {
    fetch(`http://localhost:8000/collections/edit/` + this.state.id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        aboutCollection: this.state.aboutCollection,
        img: this.state.img,
      }),
    })
      .then(response => errorHandler(response))
      .then(() => {
        this.props.history.push("/")
      });
  }

  loadItem() {
    fetch('http://localhost:8000/collections/' + this.state.id)
      .then(response => response.json())
      .then(item => this.setState({...this.state, ...item}))
  }

  create() {
    fetch('http://localhost:8000/collections/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: this.state.name,
        aboutCollection: this.state.aboutCollection,
        userId: JSON.parse(localStorage.getItem('user')).id,
        img: this.state.img,
      }),
    })
      .then(() => {
        this.props.history.push('/')
      });
  };

  nameChange(event) {
    this.setState({
      ...this.state,
      name: event.target.value
    });
  }

  aboutCollectionChange(event) {
    this.setState({
      ...this.state,
      aboutCollection: event.target.value
    });
  }

  imageChange() {
    let reader = new FileReader();
    reader.readAsDataURL(this.state.fileInput.current.files[0]);
    reader.onload = () => {
      this.setState({
        img: reader.result
      });
    }
  };

  render() {
    return <div className="create-collection">
      <div className="form-group-container">
        <label>Name collection</label>
        <input type="text" className="form-control" value={this.state.name} onChange={this.nameChange.bind(this)}/>
      </div>
      <div className=" form-group-container">
        <label>About collection</label>
        <textarea rows="5" className="form-control" value={this.state.aboutCollection}
                  onChange={this.aboutCollectionChange.bind(this)}/>
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

export default CreateCollection;