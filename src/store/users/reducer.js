import {
  LOAD_USERS_FAILURE,
  LOAD_USERS_SUCCESS,
  LOAD_USERS_PENDING,
  ADD_USER_FAILURE,
  ADD_USER_SUCCESS,
  ADD_USER_PENDING,
  DELETE_USER_FAILURE,
  DELETE_USER_SUCCESS,
  DELETE_USER_PENDING,
  EDIT_USER_FAILURE,
  EDIT_USER_SUCCESS,
  EDIT_USER_PENDING
} from "../constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_PENDING:
      return state;

    case LOAD_USERS_FAILURE:
      return { ...state, err: action.payload };

    case LOAD_USERS_SUCCESS:
      return { ...state, all: action.payload };

    case ADD_USER_SUCCESS:
      return { ...state, all: [...state.all, action.payload] };

    case ADD_USER_FAILURE:
      return { ...state, err: action.payload };

    case ADD_USER_PENDING:
      return state;

    case DELETE_USER_SUCCESS:
      return {
        ...state,
        all: state.all.filter(user => user.id === action.payload.id)
      };

    case DELETE_USER_FAILURE:
      return { ...state, err: action.payload };

    case DELETE_USER_PENDING:
      return state;

    case EDIT_USER_SUCCESS:
      return { all: [...state.all, action.payload] };

    case EDIT_USER_FAILURE:
      return { ...state, err: action.payload };

    case EDIT_USER_PENDING:
      return state;

    default:
      return state;
  }
};
