import { useState, useEffect } from "react";

export const usePersistentState = () => {
  const [text, setText] = useState(localStorage.getItem("text") || "");

  useEffect(() => {
    localStorage.setItem("text", text);
  }, [text]);

  const handleChange = (e) => setText(e.target.value);

  return { text, handleChange };
};
