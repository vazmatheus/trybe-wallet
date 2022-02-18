import fetchApi from '../../services/fetch';

// Coloque aqui suas actions
export const SET_USER_EMAIL = 'SET_USER_EMAIL';
export const SET_EXPENSES = 'SET_EXPENSES';

export const setUserEmail = (email) => ({
  type: SET_USER_EMAIL,
  payload: email,
});

export const addExpense = (expense) => ({
  type: SET_EXPENSES,
  payload: expense,
});

export const addExpenseAsync = (expense) => async (dispatch) => {
  const exchangeRates = await fetchApi();
  dispatch(addExpense({ ...expense, exchangeRates }));
};
