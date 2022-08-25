import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

class ExpensesTable extends Component {
  render() {
    const { expenses } = this.props;
    return (
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Description</TableCell>
            <TableCell>Tag</TableCell>
            <TableCell>Payment method</TableCell>
            <TableCell>Value</TableCell>
            <TableCell>Currency</TableCell>
            <TableCell>Exchange used</TableCell>
            <TableCell>Converted value</TableCell>
            <TableCell>Conversion currency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {expenses.map((expense) => {
            const value = parseFloat(expense.value);
            const ask = parseFloat(expense.exchangeRates[expense.currency].ask);
            return (
            <TableRow
              key={expense.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{expense.description}</TableCell>
              <TableCell>{expense.tag}</TableCell>
              <TableCell>{expense.method}</TableCell>
              <TableCell>R$ {value.toFixed(2)}</TableCell>
              <TableCell>Real</TableCell>
              <TableCell>R$ {ask.toFixed(2)}</TableCell>
              <TableCell>R$ {(ask * value).toFixed(2)}</TableCell>
              <TableCell>{expense.exchangeRates[expense.currency].name}</TableCell>

            </TableRow>
            )})}
        </TableBody>
      </Table>
    </TableContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  expenses: state.wallet.expenses,
});

ExpensesTable.propTypes = {
  expenses: PropTypes.arrayOf(Object).isRequired,
};

export default connect(mapStateToProps)(ExpensesTable);
