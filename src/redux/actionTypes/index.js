const createActionTypes = actionName => {
  const ACTIONNAME = actionName.toUpperCase();
  return {
    START: ACTIONNAME + ".START",
    SUCCESS: ACTIONNAME + ".SUCCESS",
    FAIL: ACTIONNAME + ".FAIL"
  };
};

export const LOGIN = createActionTypes("LOGIN");
export const LOGOUT = createActionTypes("LOGOUT");
export const GETMESSAGES = createActionTypes("GETMESSAGES");
export const POSTMESSAGE = createActionTypes("POSTMESSAGE");
export const DELETEMESSAGE = createActionTypes("DELETEMESSAGE");
export const DELETEUSERMESSAGE = createActionTypes("DELETEUSERMESSAGE");
export const GETUSER = createActionTypes("GETUSER");
export const POSTUSER = createActionTypes("POSTUSER");
export const DELETEUSER = createActionTypes("DELETEUSER");
export const PUTUSERIMAGE = createActionTypes("PUTUSERIMAGE");
export const ADDLIKE = createActionTypes("ADDLIKE");
export const REMOVELIKE = createActionTypes("REMOVELIKE");
// export const TOGGLELIKE = createActionTypes("ADDLIKE");
export const REGISTERUSERTHENGOTOHOMEPAGE = createActionTypes(
  "REGISTERUSERTHENGOTOHOMEPAGE"
);
