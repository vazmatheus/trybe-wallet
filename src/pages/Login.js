import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
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

  handleClick = () => {
    const { setEmail, history } = this.props;
    const { email } = this.state;
    setEmail(email);
    history.push('/carteira');
  };

  render() {
    const { email, password, btnDisabled } = this.state;
    return (
      <div>
        Login
        <form>
          <label htmlFor="email">
            E-mail
            <input
              type="email"
              id="email"
              name="email"
              value={ email }
              data-testid="email-input"
              onChange={ this.handleChange }
            />
          </label>
          <label htmlFor="password">
            Senha
            <input
              type="password"
              id="password"
              name="password"
              value={ password }
              data-testid="password-input"
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            disabled={ btnDisabled }
            onClick={ this.handleClick }
          >
            Entrar
          </button>
        </form>
      </div>
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
