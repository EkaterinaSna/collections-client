import React from "react";
import './Comments.scss';
import {errorHandler} from "../utils/errorHandler";

class Comments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comment: '',
      id: props.id,
      commentsItems: [],
      users: [],
      firstname: '',
      userId: localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).id,
      user: JSON.parse(localStorage.getItem('user'))
    }
    this.loadComments();
    this.loadUsers();
  };

  loadComments() {
    fetch(`http://localhost:8000/collections/items/comments/${this.state.id}`)
      .then(response => response.json())
      .then(commentsItems => this.setState({...this.state, commentsItems}))
  }

  addComments() {
    fetch(`http://localhost:8000/collections/items/comments/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        comment: this.state.comment,
        itemId: this.state.id,
        userId: JSON.parse(localStorage.getItem('user')).id,
      }),
    })
      // .then(response => errorHandler(response))
      .then(() => {
        this.loadComments();
        this.setState({comments: ""});
      });
  }

  commentChange(event) {
    this.setState({
      ...this.state,
      comment: event.target.value
    });
  };

  delete(id) {
    fetch('http://localhost:8000/collections/items/comments/delete/' + id, {
      method: 'DELETE',
    })
      .then(() => this.loadComments())
  }

  loadUsers() {
    fetch('http://localhost:8000/users')
      .then(response => response.json())
      .then(users => this.setState({...this.state, users}))
  }

  getUserFirstname(userId) {
    return userId && this.state.users.length && this.state.users.find(item => item.id === userId).firstname;
  }

  render() {
    return (
      <div className="comments">
        <div className="input-group mb-3">
          <input type="text" className="form-control" placeholder="Enter a comment" value={this.state.comment}
                 onChange={this.commentChange.bind(this)}/>
          <button className="btn btn-outline-secondary" type="button" onClick={this.addComments.bind(this)}>Post
          </button>
        </div>

        {this.state.commentsItems.map(item =>
          <div className="comments-list">
            <div className="comment-header">
              {this.state.user && this.state.user.id === item.userId &&
              <button type="button" className="btn btn-outline-danger" onClick={() => this.delete(item.id)}>
                <i className="bi bi-trash"> </i>
              </button>}
              <span className="message">{this.getUserFirstname(item.userId)} <i className="bi bi-person-fill"></i></span>
            </div>
            <p className="message">{item.comment}</p>
          </div>
        )}
      </div>
    );
  }
}


export default Comments;