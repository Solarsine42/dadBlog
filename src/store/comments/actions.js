import axios from "axios";
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

export const getComments = () => {
  return dispatch => {
    dispatch({
      type: LOAD_COMMENTS_PENDING
    });
    axios
      .get("http://localhost:8000/comments")
      .then(res => {
        dispatch({
          type: LOAD_COMMENTS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: LOAD_COMMENTS_FAILURE,
          payload: err
        })
      );
  };
};

export const addComment = comment => {
  return dispatch => {
    dispatch({
      type: ADD_COMMENT_PENDING
    });
    axios
      .post("http://localhost:8000/comments", comment)
      .then(res => {
        dispatch({
          type: ADD_COMMENT_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: ADD_COMMENT_FAILURE,
          payload: err
        })
      );
  };
};

export const rmvComment = id => {
  return dispatch => {
    dispatch({
      type: DELETE_COMMENT_PENDING
    });
    axios
      .delete(`http://localhost:8000/comments/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_COMMENT_SUCCESS,
          payload: res.data
        });
        window.location.reload();
      })
      .catch(err =>
        dispatch({
          type: DELETE_COMMENT_FAILURE,
          payload: err
        })
      );
  };
};

export const editComment = (comment, id) => dispatch => {
  dispatch({
    type: EDIT_COMMENT_PENDING
  });
  axios
    .patch(`http://localhost:8000/comments/${id}`, comment)
    .then(res => {
      dispatch({
        type: EDIT_COMMENT_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: EDIT_COMMENT_FAILURE,
        payload: err
      })
    );
};
