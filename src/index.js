import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Accordion from "./state-drills/Accordion";

const sectionsArray = [
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

ReactDOM.render(
  <Accordion sections={sectionsArray} />,
  document.getElementById("root")
);
