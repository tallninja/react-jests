import { saveComment } from "actions/index";
import { SAVE_COMMENT } from "actions/action_types";

describe("save comment", () => {
  it("Has the correct action type", () => {
    const action = saveComment();
    expect(action.type).toEqual(SAVE_COMMENT);
  });

  it("Has the correct payload", () => {
    const action = saveComment("New Comment");
    expect(action.payload).toEqual("New Comment");
  });
});
