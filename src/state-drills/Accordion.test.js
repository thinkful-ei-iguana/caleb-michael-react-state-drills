import React from "react";
import { configure } from "enzyme";
import { shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Accordion from "./Accordion";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });

const testArray = [
  {
    title: "Section 1",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    title: "Section 2",
    content:
      "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!"
  },
  {
    title: "Section 3",
    content:
      "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?"
  }
];

describe("<Accordion />", () => {
  it("renders this UI with default props, no props sent in", () => {
    const wrapper = shallow(<Accordion />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders no sections as active by default with section props input", () => {
    const wrapper = shallow(<Accordion sections={testArray} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders the first section when clicked", () => {
    const wrapper = mount(<Accordion sections={testArray} />);
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders only the last section opened after multiple sections have been clicked", () => {
    const wrapper = mount(<Accordion sections={testArray} />);
    console.log(wrapper.find("button"));
    wrapper
      .find("button")
      .at(1)
      .simulate("click");
    wrapper
      .find("button")
      .at(2)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
