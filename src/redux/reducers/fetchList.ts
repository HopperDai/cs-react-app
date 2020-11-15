import {
  EXAMPLE_FEATCH_LIST_BEGIN,
  EXAMPLE_FEATCH_LIST_SUCCESS,
  EXAMPLE_FEATCH_LIST_FAIL
} from "../constants";

export const fetchListReducer = (state, action) => {
  switch (action.type) {
    case EXAMPLE_FEATCH_LIST_BEGIN:
      return {
        ...state,
        fetchPending: true,
        fetchError: false
      };
    case EXAMPLE_FEATCH_LIST_SUCCESS:
      return {
        ...state,
        list: action.data,
        fetchPending: false,
        fetchError: false
      };
    case EXAMPLE_FEATCH_LIST_FAIL:
      return {
        ...state,
        fetchPending: false,
        fetchError: true,
        errorInfo: action.data.error
      };
    default:
      return state;
  }
};
