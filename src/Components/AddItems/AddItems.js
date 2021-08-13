import React from "react";
import './AddItems.css';

class AddItems extends React.Component {
  constructor(props) {
    super(props);
    console.log(props)
    this.state = {
      name: '',
      aboutItem: '',
      collectionId: props.match.params.id
    }
  }

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
  }

  aboutItemChange(event) {
    this.setState({
      ...this.state,
      aboutItem: event.target.value
    });
  }

  render() {
    return <div>
      <form>
        <div className="form-group-container">
          <label>Name</label>
          <input type="text" class="form-control" value={this.state.name} onChange={this.nameChange.bind(this)}/>
        </div>
        <div class=" form-group-container">
          <label>About</label>
          <textarea rows="3" class="form-control" value={this.state.aboutItem}
                    onChange={this.aboutItemChange.bind(this)}/>
        </div>
        <button type="submit" class="btn btn-primary" onClick={this.add.bind(this)}>Save</button>
      </form>
    </div>
  }

}

export default AddItems;