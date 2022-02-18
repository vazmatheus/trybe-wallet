import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class ExpensesTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <th>Descrição</th>
            <th>Tag</th>
            <th>Método de pagamento</th>
            <th>Valor</th>
            <th>Moeda</th>
            <th>Câmbio utilizado</th>
            <th>Valor convertido</th>
            <th>Moeda de conversão</th>
            <th>Editar/Excluir</th>
          </tr>
        </thead>
        <tbody>
          {expenses.map((expense) => {
            const value = parseFloat(expense.value);
            const ask = parseFloat(expense.exchangeRates[expense.currency].ask);

            return (
              <tr key={ expense.id }>
                <td>{expense.description}</td>
                <td>{expense.tag}</td>
                <td>{expense.method}</td>
                <td>{value.toFixed(2)}</td>
                <td>Real</td>
                <td>{ask.toFixed(2)}</td>
                <td>{ask * value}</td>
                <td>{expense.exchangeRates[expense.currency].name}</td>
                <td>...</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  }
}

/**
 * value(pin):"23"
description(pin):"Test"
currency(pin):"CAD"
method(pin):"Cartão de crédito"
tag(pin):"Lazer"
id(pin):0
 */

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(ExpensesTable);
