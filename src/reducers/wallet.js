// This reducer will be responsible for handling all information related to expenses
import { SET_EXPENSES } from '../store/actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const wallet = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SET_EXPENSES:
    return {
      ...state,
      expenses: [...state.expenses, {
        ...payload,
        id: state.expenses.length,
      }],
    };

  default:
    return state;
  }
};

export default wallet;
