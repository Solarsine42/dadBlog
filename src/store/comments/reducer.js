import {
  LOAD_COMMENTS_FAILURE,
  LOAD_COMMENTS_SUCCESS,
  LOAD_COMMENTS_PENDING,
  ADD_COMMENT_FAILURE,
  ADD_COMMENT_SUCCESS,
  ADD_COMMENT_PENDING,
  DELETE_COMMENT_FAILURE,
  DELETE_COMMENT_SUCCESS,
  DELETE_COMMENT_PENDING,
  EDIT_COMMENT_FAILURE,
  EDIT_COMMENT_SUCCESS,
  EDIT_COMMENT_PENDING
} from "../constants";

const initialState = {
  all: [],
  err: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_COMMENTS_PENDING:
      return state;

    case LOAD_COMMENTS_FAILURE:
      return { ...state, err: action.payload };

    case LOAD_COMMENTS_SUCCESS:
      return { ...state, all: action.payload };

    case ADD_COMMENT_SUCCESS:
      return { ...state, all: [...state.all, action.payload] };

    case ADD_COMMENT_FAILURE:
      return { ...state, err: action.payload };

    case ADD_COMMENT_PENDING:
      return state;

    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        all: state.all.filter(comment => comment.id === action.payload.id)
      };

    case DELETE_COMMENT_FAILURE:
      return { ...state, err: action.payload };

    case DELETE_COMMENT_PENDING:
      return state;

    case EDIT_COMMENT_SUCCESS:
      return { all: [...state.all, action.payload] };

    case EDIT_COMMENT_FAILURE:
      return { ...state, err: action.payload };

    case EDIT_COMMENT_PENDING:
      return state;

    default:
      return state;
  }
};
