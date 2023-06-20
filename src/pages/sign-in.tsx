import React, { useState } from "react";
import { Form, Input, Button } from "antd";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          width: "400px",
          borderRadius: "4px",
          padding: "16px",
          background: "#c1c1c1",
        }}
      >
        <Form layout="vertical" onFinish={handleSubmit}>
          <Form.Item label="Email">
            <Input type="email" value={email} onChange={handleEmailChange} />
          </Form.Item>
          <Form.Item label="Password">
            <Input.Password value={password} onChange={handlePasswordChange} />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Sign In
            </Button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default SignInPage;
