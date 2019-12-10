import { domain, jsonHeaders, handleJsonResponse } from "./constants";
import { GETUSER, POSTUSER, DELETEUSER, PUTUSERPIC } from "../actionTypes";
import { login } from "./auth";

const url = domain + "/users";

export const getUser = username => dispatch => {
  dispatch({ type: GETUSER.START });

  return fetch(url + "/" + username, {
    method: "GET",
    headers: jsonHeaders
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: GETUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: GETUSER.FAIL, payload: err }));
    });
};

const _postUser = registerData => dispatch => {
  dispatch({ type: POSTUSER.START });

  return fetch(url, {
    method: "POST",
    headers: jsonHeaders,
    body: JSON.stringify(registerData)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: POSTUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: POSTUSER.FAIL, payload: err }));
    });
};

export const postUser = registerData => dispatch => {
  return dispatch(_postUser(registerData)).then(() =>
    dispatch(
      login({
        username: registerData.username,
        password: registerData.password
      })
    )
  );
};

export const deleteUser = () => (dispatch, getState) => {
  dispatch({ type: DELETEUSER.START });

  const { username, token } = getState().auth.login.result;

  return fetch(url + "/" + username, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: DELETEUSER.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: DELETEUSER.FAIL, payload: err }));
    });
};

const _putUserPic = formElement => (dispatch, getState) => {
  dispatch({ type: PUTUSERPIC.START });

  const { username, token } = getState().auth.login.result;

  return fetch(`${url}/${username}/picture`, {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      Accept: "application/json"
    },
    body: new FormData(formElement)
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: PUTUSERPIC.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(
        dispatch({ type: PUTUSERPIC.FAIL, payload: err })
      );
    });
};

export const putUserPic = formElement => (dispatch, getState) => {
  return dispatch(_putUserPic(formElement)).then(() => {
    const username = getState().auth.login.result.username;
    return dispatch(getUser(username));
  });
};
