import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component";
import DrinksList from "./components/drinks-list.component";
import EditDrink from "./components/edit-drink.component";
import CreateDrink from "./components/create-drink.component";
import CreateUser from "./components/create-user.component";

function App() {
  return (
    <Router>
      <div className="container">
      <Navbar />
      <br/>
      <Route path="/" exact component={DrinksList} />
      <Route path="/edit/:id" component={EditDrink} />
      <Route path="/create" component={CreateDrink} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
