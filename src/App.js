import React from 'react';
import './App.scss';
import { HashRouter as Router } from 'react-router-dom'
import Header from './Components/Header/Header';
import { Switch, Route } from 'react-router-dom';
import Registration from './Components/Registration/Registration'
import Login from "./Components/Login/Login";
import NotFound from "./Components/Not-found/Not-found";
import Collections from "./Components/Collections/Collections";
import CreateCollection from "./Components/CreateCollection/CreateCollection";
import ItemsCollection from "./Components/ItemsCollection/ItemsCollection";
import AddItems from "./Components/AddItems/AddItems";


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: localStorage.getItem('user')
    }
  };


  render() {
    return <div className="content">
      <Header/>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Collections} />
          <Route exact path="/registration" component={Registration}/>
          <Route exact path="/login" component={Login}/>
          <Route exact path="/create" component={CreateCollection}/>
          <Route exact path="/:id/items" component={ItemsCollection}/>
          <Route exact path="/:id/add" component={AddItems}/>
          <Route exact path="/:id/edit" component={CreateCollection}/>
          <Route exact path="/:id/editItems" component={AddItems}/>
          <Route  component={NotFound} />
          <Route/>
        </Switch>
      </Router>
    </div>
  };
}


export default App;
