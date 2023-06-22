import { FAIL, SUCCESS } from "../constants/allResturantConstants";

export const resturantReducer = (state = { allResturants: [] }, action) => {
  switch (action.type) {
    case SUCCESS:
      return {
        allResturants: action.payload,
      };

    case FAIL:
      return {
        allResturants: [],
      };
    default:
      return state;
  }
};
