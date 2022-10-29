import React from "react";
import { shallow } from "enzyme";
import CurrenPosition from "./CurrenPosition";

describe("CurrenPosition", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CurrenPosition />);
    expect(wrapper).toMatchSnapshot();
  });
});
