import React from "react";
import Accordion from "./components/Accordion";
import Search from "./components/Search";
import Dropdown from "./components/Dropdown";
import { useState } from "react";

const items = [
  {
    title: "Q1 find Work",
    content: "A1",
  },
  {
    title: "Q2 make money",
    content: "A2",
  },
  {
    title: "Q3 happy",
    content: "A3",
  },
];

const options = [
  {
    label: "The Color Red",
    value: "Red",
  },
  {
    label: "The Color Green",
    value: "Green",
  },
  {
    label: "The Color Blue",
    value: "Blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  const [showDropdown, setShowDropdown] = useState(true);
  return (
    <div>
      <button
        onClick={() => {
          setShowDropdown(!showDropdown);
        }}
      >
        下拉選單
      </button>
      {showDropdown ? (
        <Dropdown
          options={options}
          selected={selected}
          onSelectChange={setSelected}
        />
      ) : null}
    </div>
  );
};

export default App;
