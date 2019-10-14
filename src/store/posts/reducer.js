import {
  LOAD_POSTS_FAILURE,
  LOAD_POSTS_SUCCESS,
  LOAD_POSTS_PENDING,
  ADD_POST_FAILURE,
  ADD_POST_SUCCESS,
  ADD_POST_PENDING,
  DELETE_POST_FAILURE,
  DELETE_POST_SUCCESS,
  DELETE_POST_PENDING,
  EDIT_POST_FAILURE,
  EDIT_POST_SUCCESS,
  EDIT_POST_PENDING
} from "../constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_POSTS_PENDING:
      return state;

    case LOAD_POSTS_FAILURE:
      return { ...state, err: action.payload };

    case LOAD_POSTS_SUCCESS:
      return { ...state, all: action.payload };

    case ADD_POST_SUCCESS:
      return { ...state, all: [...state.all, action.payload] };

    case ADD_POST_FAILURE:
      return { ...state, err: action.payload };

    case ADD_POST_PENDING:
      return state;

    case DELETE_POST_SUCCESS:
      return {
        ...state,
        all: state.all.filter(post => post.id === action.payload.id)
      };

    case DELETE_POST_FAILURE:
      return { ...state, err: action.payload };

    case DELETE_POST_PENDING:
      return state;

    case EDIT_POST_SUCCESS:
      return { all: [...state.all, action.payload] };

    case EDIT_POST_FAILURE:
      return { ...state, err: action.payload };

    case EDIT_POST_PENDING:
      return state;

    default:
      return state;
  }
};
