import React, { useState } from "react";

const FloatLabel = (props) => {
  const [focus, setFocus] = useState(false);
  const { children, label, value } = props;

  const labelClass =
    focus || (value && value.length !== 0)
      ? "text-[11px] absolute pointer-events-none left-[12px] top-[12px] top-[4px] text-[10px]"
      : "text-sm absolute pointer-events-none left-[12px] top-[12px]";

  return (
    <div
      className={
        "relative [&_input]:!text-sm [&_input]:h-11 [&_input]:pt-5 [&_select]:text-sm [&_.ant-select]:h-11 [&_.ant-select-selection-item]:text-sm [&_.ant-select-selection-item]:!pt-3 [&_.ant-select]:w-full [&_.ant-picker]:h-11 [&_.ant-picker]:w-full [&_.ant-picker]:pt-5 " +
        props.className
      }
      onBlur={() => setFocus(false)}
      onFocus={() => setFocus(true)}
    >
      {children}
      <label className={labelClass} style={{ transition: "0.2s ease all" }}>
        {label}
      </label>
    </div>
  );
};

export default FloatLabel;
