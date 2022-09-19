import React, { useState, useEffect } from "react";
import axios from "axios";
// "https://translation.googleapis.com/language/translate/v2",
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
const Convert = ({ language, text }) => {
  const [translated, setTranslated] = useState("");
  const [debouncedText, setDebouncedText] = useState(text);
  //   0.8秒後沒有在搜尋任何內容才發請求 2步驟↓
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 800);
    return () => {
      clearTimeout(timerId);
    };
  }, [text]);
  useEffect(() => {
    const doTanslation = async () => {
      const { data } = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: debouncedText,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslated(data.data.translations[0].translatedText);
    };
    doTanslation();
  }, [language, debouncedText]);

  return <div>{translated}</div>;
};

export default Convert;
