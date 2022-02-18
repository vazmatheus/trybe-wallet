import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchApi from '../services/fetch';
import { addExpenseAsync } from '../store/actions';

class FormAddExpenses extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      coins: [],
    };
  }

  componentDidMount() {
    this.requestApi();
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  requestApi = async () => {
    const coins = await fetchApi();
    this.setState({
      coins: Object.keys(coins).filter((coin) => coin !== 'USDT'),
    });
  }

  handleClick = async () => {
    const { addExpense } = this.props;
    const { value, description, currency, method, tag } = this.state;

    addExpense({
      value,
      description,
      currency,
      method,
      tag,
    });
    this.setState({ value: '', description: '' });
  }

  render() {
    const { value, description, currency, method, tag, coins } = this.state;
    return (
      <div>
        <form>
          <label htmlFor="value">
            Valor da despesa:
            <input
              type="number"
              name="value"
              value={ value }
              id="value"
              data-testid="value-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="description">
            Descrição da despesa:
            <input
              type="text"
              name="description"
              value={ description }
              id="description"
              data-testid="description-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="currency">
            Moeda:
            <select
              name="currency"
              value={ currency }
              id="currency"
              data-testid="currency-input"
              onChange={ this.handleChange }
            >
              {coins.map((coin) => (
                <option key={ coin } data-testid={ coin } value={ coin }>{coin}</option>
              ))}
            </select>
          </label>
          <label htmlFor="method">
            Método de pagamento:
            <select
              name="method"
              value={ method }
              id="method"
              data-testid="method-input"
              onChange={ this.handleChange }
            >
              <option value="Dinheiro">Dinheiro</option>
              <option value="Cartão de crédito">Cartão de crédito</option>
              <option value="Cartão de débito">Cartão de débito</option>
            </select>
          </label>
          <label htmlFor="tag">
            Categoria:
            <select
              name="tag"
              value={ tag }
              id="tag"
              data-testid="tag-input"
              onChange={ this.handleChange }
            >
              <option value="Alimentação">Alimentação</option>
              <option value="Lazer">Lazer</option>
              <option value="Trabalho">Trabalho</option>
              <option value="Transporte">Transporte</option>
              <option value="Saúde">Saúde</option>
            </select>
          </label>
          <button type="button" onClick={ this.handleClick }>Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

FormAddExpenses.propTypes = {
  addExpense: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  addExpense: (payload) => dispatch(addExpenseAsync(payload)),
});

export default connect(null, mapDispatchToProps)(FormAddExpenses);
