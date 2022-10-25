import React from "react";
import { shallow } from "enzyme";
import CityWeather from "./CityWeather";

describe("CityWeather", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<CityWeather />);
    expect(wrapper).toMatchSnapshot();
  });
});
