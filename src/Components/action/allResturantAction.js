import axios from "axios";
import { base_url } from "../../baseUrl";
import { FAIL, SUCCESS } from "../../constants/allResturantConstants";

export const resturantListAction = () => async (dispatch) => {
  try {
    const { data } = await axios.get(`${base_url}/restaurants`);
    console.log(data);
    dispatch({
      payload: data,
      type: SUCCESS,
    });
  } catch (error) {
    dispatch({
      payload: error,
      type: FAIL,
    });
  }
};
