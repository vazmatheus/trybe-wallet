import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { setUserEmail } from '../store/actions';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      btnDisabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value }, this.checkLogin);
  };

  checkLogin = () => {
    const { email, password } = this.state;
    const emailFormat = email.includes('@') && email.includes('.com');
    const MIN_LENGTH_PASSWORD = 6;
    const passwordFormat = password.length >= MIN_LENGTH_PASSWORD;
    this.setState({
      btnDisabled: !emailFormat || !passwordFormat,
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { setEmail, history } = this.props;
    const { email } = this.state;
    setEmail(email);
    history.push('/wallet');
  };

  render() {
    const { email, password, btnDisabled } = this.state;
    return (
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="sm">
          <Box
            component="form"
            onSubmit={ this.handleSubmit }
            sx={ {
              '& > :not(style)': { m: 1, width: '25ch' },
            } }
            noValidate
            autoComplete="off"
          >
            <TextField
              label="Email"
              variant="standard"
              type="email"
              id="email"
              name="email"
              value={ email }
              data-testid="email-input"
              placeholder="user@example.com"
              onChange={ this.handleChange }
            />
            <TextField
              label="Password"
              variant="standard"
              type="password"
              id="password"
              name="password"
              value={ password }
              data-testid="password-input"
              onChange={ this.handleChange }
            />
            <Stack spacing={ 2 } direction="row">
              <Button
                variant="contained"
                type="submit"
                disabled={ btnDisabled }
              >
                Login
              </Button>
            </Stack>
          </Box>
        </Container>
      </React.Fragment>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  setEmail: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  setEmail: (email) => dispatch(setUserEmail(email)),
});

export default connect(null, mapDispatchToProps)(Login);
