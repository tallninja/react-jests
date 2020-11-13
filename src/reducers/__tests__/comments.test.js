import commentsReducer from "reducers/comments";

it("Handles action types of SAVE_COMMENT", () => {
  const action = {
    type: "SAVE_COMMENT",
    payload: "New Comment",
  };
  const newState = commentsReducer([], action);
  expect(newState).toEqual(["New Comment"]);
});

it("Hantles unknown action types", () => {
  const newState = commentsReducer([], { type: "UNKNOWN" });
  expect(newState).toEqual([]);
});
