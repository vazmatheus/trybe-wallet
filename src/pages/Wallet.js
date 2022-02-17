import React, { Component } from 'react';
import FormAddExpenses from '../components/FormAddExpenses';
import Header from '../components/Header';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormAddExpenses />
      </div>
    );
  }
}

export default Wallet;
