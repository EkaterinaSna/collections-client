import React from "react";
import './CreateCollection.scss';
import {errorHandler} from "../utils/errorHandler";

class CreateCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.id,
      name: '',
      aboutCollection: ''
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
        aboutCollection: this.state.aboutCollection
      }),
    })
      .then(response => errorHandler(response))
      .then(() => {
        this.props.history.push(process.env.PUBLIC_URL + "/#")
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
        userId: JSON.parse(localStorage.getItem('user')).id
      }),
    })
      .then(() => {
        window.open(process.env.PUBLIC_URL + "/#", '_self')
        document.location.reload();
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

  render() {
    return <div className="create-collection">
      <form>
        <div className="form-group-container">
          <label>Name collection</label>
          <input type="text" className="form-control" value={this.state.name} onChange={this.nameChange.bind(this)}/>
        </div>
        <div className=" form-group-container">
          <label>About collection</label>
          <textarea rows="5" className="form-control" value={this.state.aboutCollection}
                    onChange={this.aboutCollectionChange.bind(this)}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={this.onSave.bind(this)}>Save</button>
      </form>
    </div>
  }
}

export default CreateCollection;