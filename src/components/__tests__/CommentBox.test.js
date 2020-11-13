import React from "react";
import { mount } from "enzyme";

import Root from "Root";
import CommentBox from "components/CommentBox";

let component;
let test_comment;

beforeEach(() => {
  component = mount(
    <Root>
      <CommentBox />
    </Root>
  );
  test_comment = "test comment";
});

afterEach(() => {
  component.unmount();
});

it("Contains a text area and a button", () => {
  expect(component.find("textarea").length).toEqual(1);
  expect(component.find("button").length).toEqual(1);
});

describe("the text area", () => {
  beforeEach(() => {
    component.find("textarea").simulate("change", {
      target: { value: test_comment },
    });
    component.update();
  });

  it("contains a text area that users can type in", () => {
    expect(component.find("textarea").prop("value")).toEqual(test_comment); // get the input value of the text area
  });

  it("empties the text area when submitted", () => {
    const empty_comment = "";
    expect(component.find("textarea").prop("value")).toEqual(test_comment);
    component.find("form").simulate("submit"); // only the form has the onSubmit event
    component.update();
    expect(component.find("textarea").prop("value")).toEqual(empty_comment);
  });
});
