// import { handleJsonResponse, jsonHeaders, domain } from "./constants";
// import { TOGGLELIKE, REMOVELIKE, ADDLIKE } from "../actionTypes";
// import { getMessages } from ".";

// const url = domain + "/likes";

// export const toggleLike = messageId => (dispatch, getState) => {
//   const username = getState().auth.login.result.username;
//   // get the message associated with this messageId
//   const messages = getState().messages.getMessages.result.messages;
//   // with find: return true or false in the callback function
//   // the find loop is going to stop when you return true
//   // it will then return to the left-hand side that particular message object
//   const message = messages.find(message => message.id === messageId);
//   // if we didnt find a message, then we cant do the following task.
//   // this is also known as an "invariant"
//   if (!message) {
//     throw new Error(
//       "Expected to find message with id of " +
//         messageId +
//         " but it did not exist"
//     );
//   }

//   // look inside message.likes
//   // see if there is a like object that was created by the logged in user
//   const like = message.likes.find(like => like.username === username);

//   if (like) {
//     return dispatch(removeLike(like.id));
//   }
//   return dispatch(addLike(messageId));
// };

// const _addLike = messageId => (dispatch, getState) => {
//   dispatch({
//     type: ADDLIKE.START
//   });

//   const token = getState().auth.login.result.token;

//   return fetch(url, {
//     method: "POST",
//     headers: { Authorization: "Bearer " + token, ...jsonHeaders },
//     body: JSON.stringify({ messageId })
//   })
//     .then(handleJsonResponse)
//     .then(result => {
//       return dispatch({
//         type: TOGGLELIKE.SUCCESS,
//         payload: result
//       });
//     })
//     .catch(err => {
//       return Promise.reject(dispatch({ type: TOGGLELIKE.FAIL, payload: err }));
//     });
// };

import { handleJsonResponse, jsonHeaders, domain } from "./constants";
import { ADDLIKE, REMOVELIKE } from "../actionTypes";
import { getMessage } from "./messages";

const url = domain + "/likes";

export const toggleLike = messageId => (dispatch, getState) => {
  const username = getState().auth.login.result.username;
  // get the message associated with this messageId
  const messages = getState().messages.getMessages.result.messages;
  // with find: return true or false in the callback function
  // the find loop is going to stop when you return true
  // it will then return to the left-hand side that particular message object
  const message = messages.find(message => message.id === messageId);
  // if we didnt find a message, then we cant do the following task.
  // this is also known as an "invariant"
  if (!message) {
    throw new Error(
      "Expected to find message with id of " +
        messageId +
        " but it did not exist"
    );
  }

  // look inside message.likes
  // see if there is a like object that was created by the logged in user
  const like = message.likes.find(like => like.username === username);

  if (like) {
    return dispatch(removeLike(like.id, messageId));
  }
  return dispatch(addLike(messageId));
};

const _addLike = messageId => (dispatch, getState) => {
  dispatch({
    type: ADDLIKE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url, {
    method: "POST",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders },
    body: JSON.stringify({ messageId })
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: ADDLIKE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: ADDLIKE.FAIL, payload: err }));
    });
};

const addLike = messageId => (dispatch, getState) => {
  return dispatch(_addLike(messageId)).then(() =>
    dispatch(getMessage(messageId))
  );
};


const _removeLike = likeId => (dispatch, getState) => {
  dispatch({
    type: REMOVELIKE.START
  });

  const token = getState().auth.login.result.token;

  return fetch(url + "/" + likeId, {
    method: "DELETE",
    headers: { Authorization: "Bearer " + token, ...jsonHeaders }
  })
    .then(handleJsonResponse)
    .then(result => {
      return dispatch({
        type: REMOVELIKE.SUCCESS,
        payload: result
      });
    })
    .catch(err => {
      return Promise.reject(dispatch({ type: REMOVELIKE.FAIL, payload: err }));
    });
};

const removeLike = (likeId, messageId) => dispatch => {
  return dispatch(_removeLike(likeId,messageId)).then(() =>
    dispatch(getMessage(messageId))
  );
};

