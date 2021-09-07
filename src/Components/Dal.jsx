import React from "react";
import { Input, Checkbox } from "antd";
export default function Dal(props) {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          Наименование:
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Input
            onChange={(Event) => {
              props.ProfileHandler("ChangeCaption", Event.target.value);
            }}
            size="small"
            style={{ width: "160px" }}
            value={props.Profile.title}
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "10px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>Статус:</div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Checkbox
            onChange={(Event) => {
              console.log(Event);
              props.ProfileHandler("ChangeCheckbox", Event.target.checked);
            }}
            size="small"
            style={{ width: "160px" }}
            checked={props.Profile.completed}
          />
        </div>
      </div>
    </>
  );
}
