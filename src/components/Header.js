import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

class Header extends Component {
  render() {
    const { email, expenses } = this.props;
    console.log(expenses);
    const total = expenses.reduce(
      (acc, expense) => acc + parseFloat(expense.value)
        * parseFloat(expense.exchangeRates[expense.currency].ask),
      0,
    );

    return (
      <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Trybe Wallet
          </Typography>
          <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
            E-mail: { email }
          </Typography>
          <Typography variant="h8" component="div" sx={{ flexGrow: 1 }}>
            Total expense: R$ { total.toFixed(2) }
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
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
