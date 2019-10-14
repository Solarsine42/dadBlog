import axios from "axios";
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

export const getPosts = () => {
  return dispatch => {
    dispatch({
      type: LOAD_POSTS_PENDING
    });
    axios
      .get("http://localhost:8000/posts")
      .then(res => {
        dispatch({
          type: LOAD_POSTS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: LOAD_POSTS_FAILURE,
          payload: err
        })
      );
  };
};

export const addPost = post => {
  return dispatch => {
    dispatch({
      type: ADD_POST_PENDING
    });
    axios
      .post("http://localhost:8000/posts", post)
      .then(res => {
        dispatch({
          type: ADD_POST_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: ADD_POST_FAILURE,
          payload: err
        })
      );
  };
};

export const rmvPost = id => {
  return dispatch => {
    dispatch({
      type: DELETE_POST_PENDING
    });
    axios
      .delete(`http://localhost:8000/posts/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_POST_SUCCESS,
          payload: res.data
        });
        window.location.reload();
      })
      .catch(err =>
        dispatch({
          type: DELETE_POST_FAILURE,
          payload: err
        })
      );
  };
};

export const editPost = (post, id) => dispatch => {
  dispatch({
    type: EDIT_POST_PENDING
  });
  axios
    .patch(`http://localhost:8000/posts/${id}`, post)
    .then(res => {
      dispatch({
        type: EDIT_POST_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: EDIT_POST_FAILURE,
        payload: err
      })
    );
};
