import React, { Component } from 'react';

class FormAddExpenses extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
    };
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { value, description, currency, method, tag } = this.state;
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
              EUR
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
            Categoria - tag:
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
          <button type="button">Adicionar despesa</button>
        </form>
      </div>
    );
  }
}

export default FormAddExpenses;
