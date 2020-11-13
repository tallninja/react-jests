import { FETCH_COMMENTS, SAVE_COMMENT } from "actions/action_types";

export default function commentsReducer(state = [], action) {
  switch (action.type) {
    case SAVE_COMMENT:
      return [...state, action.payload];
    case FETCH_COMMENTS:
      const comments = action.payload.map((comment) => {
        return [...state, comment.name];
      });
      return comments;
    default:
      return state;
  }
}
