import React from "react";
import styless from "./Input.module.css";

function Input(props) {
  return (
    <label>
      <input className={styless.Input} {...props} />
    </label>
  );
}

export default Input;
