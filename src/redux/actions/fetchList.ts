import {
  EXAMPLE_FEATCH_LIST_BEGIN,
  EXAMPLE_FEATCH_LIST_SUCCESS,
  EXAMPLE_FEATCH_LIST_FAIL
} from "../constants";
import axios from "axios";

// async dispatch action
export const fetchList = () => {
  return (dispatch) => {
    dispatch({
      type: EXAMPLE_FEATCH_LIST_BEGIN
    });

    return new Promise(async (resolve, reject) => {
      try {
        const { result }: any = await axios.get(
          "https://api.apiopen.top/musicRankings"
        );
        dispatch({
          type: EXAMPLE_FEATCH_LIST_SUCCESS,
          data: result
        });
        resolve(result);
      } catch (err) {
        dispatch({
          type: EXAMPLE_FEATCH_LIST_FAIL,
          data: { error: err }
        });
        reject(err);
      }
    });
  };
};
