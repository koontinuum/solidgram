import React from "react";
import styless from "./Input.module.css";

function Input(props) {
  return (
    <label>
      <input
        className={styless.Input}
        type={props.type}
        placeholder={props.placeholder}
      />
    </label>
  );
}

export default Input;
