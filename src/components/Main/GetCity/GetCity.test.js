import React from "react";
import { shallow } from "enzyme";
import GetCity from "./GetCity";

describe("GetCity", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<GetCity />);
    expect(wrapper).toMatchSnapshot();
  });
});
