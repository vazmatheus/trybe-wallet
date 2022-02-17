// Esse reducer será responsável por tratar as informações da pessoa usuária
import { SET_USER_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SET_USER_EMAIL:
    return {
      ...state,
      email: payload,
    };

  default:
    return state;
  }
};

export default user;
