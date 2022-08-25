import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import fetchApi from '../services/fetch';
import { addExpenseAsync } from '../store/actions';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';

class FormAddExpenses extends Component {
  constructor() {
    super();
    this.state = {
      value: 0,
      description: '',
      currency: 'USD',
      method: 'Cash',
      tag: 'Food',
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
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="value"
          label="Expense value"
          type="number"
          name="value"
          value={ value }
          onChange={ this.handleChange }
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField
          id="description"
          label="Description of expense"
          variant="outlined"
          name="description"
          value={ description }
          onChange={ this.handleChange }
        />
        <FormControl fullWidth>
          <InputLabel id="currency">Currency</InputLabel>
          <Select
            labelId="currency"
            id="currency"
            value={currency}
            label="currency"
            name="currency"
            onChange={this.handleChange}
          >
            {coins.map((coin) => (
              <MenuItem key={ coin } value={ coin }>{coin}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="method">Method</InputLabel>
          <Select
            labelId="method"
            id="method"
            value={method}
            label="method"
            name="method"
            onChange={this.handleChange}
          >
            <MenuItem value="Cash">Cash</MenuItem>
            <MenuItem value="Credit card">Credit card</MenuItem>
            <MenuItem value="Debit card">Debit card</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="dtag">Category</InputLabel>
          <Select
            labelId="tag"
            id="tag"
            value={tag}
            label="Category"
            name="tag"
            onChange={this.handleChange}
          >
            <MenuItem value="Food">Food</MenuItem>
            <MenuItem value="Leisure">Leisure</MenuItem>
            <MenuItem value="Work">Work</MenuItem>
            <MenuItem value="Transport">Transport</MenuItem>
            <MenuItem value="Health">Health</MenuItem>
          </Select>
        </FormControl>
        <Button variant="contained" onClick={ this.handleClick }>Add expense</Button>
      </Box>
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
