import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;

    // let total = 0;
    // for (let i = 0; i < expenses.length; i++) {
    //   const expense = expenses[i]
    //   total += parseFloat(expense.value) * parseFloat(expense.exchangeRates[expense.currency].ask)
    // }
    const total = expenses.reduce(
      (acc, expense) => acc + parseFloat(expense.value)
        * parseFloat(expense.exchangeRates[expense.currency].ask),
      0,
    );

    return (
      <div>
        <h3>Trybe Wallet</h3>
        <section>
          <p data-testid="email-field">{ email }</p>
          <p data-testid="total-field">{ total }</p>
          <p data-testid="header-currency-field">BRL</p>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  email: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(Header);
