import axios from "axios";
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

export const getUsers = () => {
  return dispatch => {
    dispatch({
      type: LOAD_USERS_PENDING
    });
    axios
      .get("http://localhost:8000/users")
      .then(res => {
        dispatch({
          type: LOAD_USERS_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: LOAD_USERS_FAILURE,
          payload: err
        })
      );
  };
};

export const addUser = user => {
  return dispatch => {
    dispatch({
      type: ADD_USER_PENDING
    });
    axios
      .post("http://localhost:8000/users", user)
      .then(res => {
        dispatch({
          type: ADD_USER_SUCCESS,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: ADD_USER_FAILURE,
          payload: err
        })
      );
  };
};

export const rmvUser = id => {
  return dispatch => {
    dispatch({
      type: DELETE_USER_PENDING
    });
    axios
      .delete(`http://localhost:8000/users/${id}`)
      .then(res => {
        dispatch({
          type: DELETE_USER_SUCCESS,
          payload: res.data
        });
        window.location.reload();
      })
      .catch(err =>
        dispatch({
          type: DELETE_USER_FAILURE,
          payload: err
        })
      );
  };
};

export const editUser = (user, id) => dispatch => {
  dispatch({
    type: EDIT_USER_PENDING
  });
  axios
    .patch(`http://localhost:8000/users/${id}`, user)
    .then(res => {
      dispatch({
        type: EDIT_USER_SUCCESS,
        payload: res.data
      });
    })
    .catch(err =>
      dispatch({
        type: EDIT_USER_FAILURE,
        payload: err
      })
    );
};
