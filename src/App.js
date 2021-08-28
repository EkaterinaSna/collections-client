import React from 'react';
import './App.scss';
import {BrowserRouter as Router} from 'react-router-dom'
import Header from './Components/Header/Header';
import {Switch, Route} from 'react-router-dom';
import Registration from './Components/Registration/Registration'
import Login from "./Components/Login/Login";
import NotFound from "./Components/Not-found/Not-found";
import Collections from "./Components/Collections/Collections";
import CreateCollection from "./Components/CreateCollection/CreateCollection";
import ItemsCollection from "./Components/ItemsCollection/ItemsCollection";
import AddItems from "./Components/AddItems/AddItems";
import ItemPage from "./Components/ItemPage/ItemPage";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.getItem('user')
    }
  }

  render() {
    return <div className="content">
      <Header/>
      <Router basaname={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Collections}/>
          {!this.state.user && <Route exact path="/registration" component={Registration}/>}
          {!this.state.user && <Route exact path="/login" component={Login}/>}
          {this.state.user && <Route exact path="/create" component={CreateCollection}/>}
          <Route exact path="/:collectionId/items" component={ItemsCollection}/>
          <Route exact path="/:collectionId/items/:id" component={ItemPage}/>
          {this.state.user && <Route exact path="/:collectionId/add" component={AddItems}/>}
          {this.state.user && <Route exact path="/:id/edit" component={CreateCollection}/>}
          {this.state.user && <Route exact path="/:id/editItems" component={AddItems}/>}
          <Route component={NotFound}/>
          <Route/>
        </Switch>
      </Router>
    </div>
  };
}

export default App;
