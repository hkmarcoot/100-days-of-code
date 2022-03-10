import { DatePicker, Space, message } from "antd";
import React, { useState } from "react";
import "../../../node_modules/antd/dist/antd.css";
import { useAuth0 } from "@auth0/auth0-react";

function DatePickerA() {
  const [date, setDate] = useState(null);
  const { isAuthenticated } = useAuth0();
  const handleChange = (value) => {
    message.info(
      `Selected Date: ${value ? value.format("YYYY-MM-DD") : "None"}`
    );
    setDate(value);
  };

  return (
    isAuthenticated && (
      <>
        <Space direction="vertical">
          <DatePicker onChange={handleChange} />
        </Space>
        <div style={{ marginTop: 16 }}>
          Selected Date: {date ? date.format("YYYY-MM-DD") : "None"}
        </div>
      </>
    )
  );
}

export default DatePickerA;
