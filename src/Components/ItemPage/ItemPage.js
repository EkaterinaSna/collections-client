import React from "react";
import './ItemPage.scss';
import Comments from "../Comments/Comments";

class ItemPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      aboutItem: '',
      id: props.match.params.id,
      collectionId: props.match.params.collectionId,
      likes: [],
      userId: localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).id,
      user: JSON.parse(localStorage.getItem('user')),
      createdAt: '',
      users: [],
      firstname: '',
    };
  }

  loadUsers() {
    fetch('http://localhost:8000/users')
      .then(response => response.json())
      .then(users => this.setState({...this.state, users}))
  }

  componentWillMount() {
    if (this.state.id) {
      this.loadItem();
      this.loadLikes();
      this.loadUsers();
    }
  };



  loadItem() {
    fetch(`http://localhost:8000/collections/items/${this.state.id}`)
      .then(response => response.json())
      .then(item => {
        this.setState({...this.state, ...item})
      })
  }

  delete(id) {
    fetch('http://localhost:8000/collections/items/delete/' + id, {
      method: 'DELETE',
    })
      .then(() => {
        this.props.history.push(`/${this.state.collectionId}/items`)
      });
  }

  like() {
    fetch(`http://localhost:8000/collections/items/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        userId: this.state.userId,
        itemId: this.state.id,
      }),
    })
      .then(() => this.loadLikes())
  }

  hasLike(userId) {
    return userId && this.state.likes.length && this.state.likes.find(item => item.userId === userId);
  }

  loadLikes() {
    fetch(`http://localhost:8000/collections/items/likes/${this.state.id}`)
      .then(response => response.json())
      .then(likes => this.setState({likes}))
  }

  getUserFirstname(userId) {
    return userId && this.state.users.length && this.state.users.find(item => item.id === userId).firstname;
  }

  render() {
    return <div className="item-page">
      <div className="col">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.state.name}</h5>
            <p className="card-text">{this.state.aboutItem}</p>
            <h className="card-text">{new Date(this.state.createdAt).toDateString()}</h>
            <div>
              <span className="text">Creator: {this.getUserFirstname(this.state.userId)}<i className="bi bi-person-fill"></i></span>
            </div>
            <div className="icons">
              <div className="heart">
                {this.state.user &&
                <i className={this.hasLike(this.state.userId) ? 'bi bi-heart-fill -active' : 'bi bi-heart-fill'}
                   onClick={this.like.bind(this)}>{this.state.likes.length}</i>}
              </div>
              {this.state.user && this.state.user.id === this.state.userId &&
              <a href={"/" + this.state.id + "/editItems"}><i className="bi bi-pencil-square"> </i></a>}
              {this.state.user && this.state.user.id === this.state.userId &&
              <i className="bi bi-trash" onClick={() => this.delete(this.state.id)}> </i>}
            </div>
          </div>
        </div>
      </div>
      {this.state.user && <Comments id={this.state.id}/>}
    </div>
  }
}

export default ItemPage;