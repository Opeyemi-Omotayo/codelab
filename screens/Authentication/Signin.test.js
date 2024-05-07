import React from "react";
import { shallow } from "enzyme";
import Signin from "./Signin";

describe("<Signin />", () => {
  it("renders without crashing", () => {
    const wrapper = shallow(<Signin />);
    expect(wrapper).toBeTruthy();
  });

  it("updates username state on change", () => {
    const wrapper = shallow(<Signin />);
    const usernameInput = wrapper.find("TextInput").at(0);
    usernameInput.simulate("changeText", "opeyemi");
    expect(wrapper.state("username")).toEqual("opeyemi");
  });

  it("updates password state on change", () => {
    const wrapper = shallow(<Signin />);
    const passwordInput = wrapper.find("TextInput").at(1);
    passwordInput.simulate("changeText", "password123");
    expect(wrapper.state("password")).toEqual("password123");
  });

  it("toggles password visibility", () => {
    const wrapper = shallow(<Signin />);
    const toggleButton = wrapper.find("TouchableOpacity").at(0);
    toggleButton.simulate("press");
    expect(wrapper.state("passwordVisible")).toEqual(true);
  });

  it("handles login", async () => {
    axios.post = jest.fn().mockResolvedValue({ data: { token: "token123" } });

    const wrapper = shallow(<Signin />);
    wrapper.setState({ username: "test@example.com", password: "password123" });

    const loginButton = wrapper.find("TouchableOpacity").at(1);
    await loginButton.simulate("press");

    expect(wrapper.state("loading")).toEqual(false);
    expect(wrapper.state("username")).toEqual("");
    expect(wrapper.state("password")).toEqual("");
  });
});
