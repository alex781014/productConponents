import React from "react";
import { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
const options = [
  {
    label: "Afrikaans",
    value: "af",
  },
  {
    label: "Arabic",
    value: "ar",
  },
  {
    label: "Hindi",
    value: "hi",
  },
  {
    label: "Chinese (Traditional)",
    value: "zh-TW",
  },
];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text,setText] = useState('')
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>請輸入文字進行翻譯</label>
          <input
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
          />
        </div>
      </div>

      <Dropdown
        label="選個語言"
        selected={language}
        onSelectChange={setLanguage}
        options={options}
      />
      <h3 className="ui header">輸出</h3>
      <Convert text={text} language={language} setText={setText} />
    </div>
  );
};

export default Translate;
