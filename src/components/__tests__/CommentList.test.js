import React from "react";
import { mount } from "enzyme";

import Root from "Root";
import CommentList from "components/CommentList";

let commentList;
let innitialState;

beforeEach(() => {
  innitialState = {
    comments: ["comment 1", "comment 2"],
  };

  commentList = mount(
    <Root innitialState={innitialState}>
      <CommentList />
    </Root>
  );
});

it("Contains one li element per comment", () => {
  expect(commentList.find("li").length).toEqual(innitialState.comments.length);
});

it("Has the same text content as the initial state", () => {
  expect(commentList.render().text()).toContain(innitialState.comments[0]);
  expect(commentList.render().text()).toContain(innitialState.comments[1]);
});
