import { FETCH_SURVEYS, FETCH_USER } from "../Actions/types";

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload;
    default:
      return state;
  }
}
