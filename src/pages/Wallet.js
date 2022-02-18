import React, { Component } from 'react';
import ExpensesTable from '../components/ExpensesTable';
import FormAddExpenses from '../components/FormAddExpenses';
import Header from '../components/Header';

class Wallet extends Component {
  render() {
    return (
      <div>
        <Header />
        <FormAddExpenses />
        <ExpensesTable />
      </div>
    );
  }
}

export default Wallet;
