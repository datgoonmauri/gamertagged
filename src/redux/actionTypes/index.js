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
export const GETUSER = createActionTypes("GETUSER");
export const POSTUSER = createActionTypes("POSTUSER");
export const ADDLIKE = createActionTypes("ADDLIKE");
export const DELETEUSER = createActionTypes("DELETEUSER");
export const REMOVELIKE = createActionTypes("REMOVELIKE");

export const PUTUSERPIC = createActionTypes("PUTUSERPIC");
export const GETUSERPIC = createActionTypes("GETUSERPIC")