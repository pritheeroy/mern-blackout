import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Drink = props => (
  <tr>
    <td>{props.drink.username}</td>
    <td>{props.drink.description}</td>
    <td>{props.drink.amount}</td>
    <td>{props.drink.date.substring(0,10)}</td>
    <td>
      <Link to={"/edit/"+props.drink._id}>edit</Link> | <a href="#" onClick={() => { props.deleteDrink(props.drink._id) }}>delete</a>
    </td>
  </tr>
)

export default class DrinksList extends Component {
  constructor(props) {
    super(props);

    this.deleteDrink = this.deleteDrink.bind(this)

    this.state = {drinks: []};
  }

  componentDidMount() {
    axios.get('http://localhost:5000/drinks/')
      .then(response => {
        this.setState({ drinks: response.data })
      })
      .catch((error) => {
        console.log(error);
      })
  }

  deleteDrink(id) {
    axios.delete('http://localhost:5000/drinks/'+id)
      .then(response => { console.log(response.data)});

    this.setState({
      drinks: this.state.drinks.filter(el => el._id !== id)
    })
  }

  drinkList() {
    return this.state.drinks.map(currentdrink => {
      return <Drink drink={currentdrink} deleteDrink={this.deleteDrink} key={currentdrink._id}/>;
    })
  }

  render() {
    return (
      <div>
        <h3>Logged Drinks</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Amount</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            { this.drinkList() }
          </tbody>
        </table>
      </div>
    )
  }
}