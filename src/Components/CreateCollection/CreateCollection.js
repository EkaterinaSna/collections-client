import React from "react";
import './CreateCollection.css';

class CreateCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      aboutCollection: ''
    }
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
        // document.location.reload();
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
    return <div>
      <form>
        <div className="form-group-container">
          <label>Name collection</label>
          <input type="text" class="form-control" value={this.state.name} onChange={this.nameChange.bind(this)}/>
        </div>
        <div class=" form-group-container">
          <label>About collection</label>
          <textarea rows="5" class="form-control" value={this.state.aboutCollection}
                    onChange={this.aboutCollectionChange.bind(this)}/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={this.create.bind(this)}>Save</button>
      </form>
    </div>
  }
}

export default CreateCollection;