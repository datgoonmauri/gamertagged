import { DELETEMESSAGE } from "../../actionTypes";
import { withAsyncReducer } from "../../HORs";

const initialState = {
  loading: false,
  result: null,
  error: null
};

const deletMessage = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default withAsyncReducer(DELETEMESSAGE, deletMessage);
