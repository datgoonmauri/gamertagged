import { DELETEUSERMESSAGE } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  loading: false,
  result: null,
  error: null
};

const deleteUserMessage = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default withAsyncReducer(DELETEUSERMESSAGE, deleteUserMessage);
