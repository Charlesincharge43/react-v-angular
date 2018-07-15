
/* -----------  ACTION TYPES ----------- */

const ADD_MESSAGE = 'ADD_MESSAGE';
const CLEAR_MESSAGES = 'CLEAR_MESSAGES';

/* -----------  ACTION CREATORS ----------- */

export const addMessage = (message) => ({ type: ADD_MESSAGE, message });
export const clearMessages = () => ({ type: CLEAR_MESSAGES });

/* -----------  REDUCER ----------- */

export default function reducer(state = [], action) {
  switch (action.type) {
    case ADD_MESSAGE:
      return [...state, action.message];
    case CLEAR_MESSAGES:
      return [];
    default:
      return state;
  }
}