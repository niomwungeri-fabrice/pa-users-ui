import { Input, Button, Form, Avatar } from "antd";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "../styles/login.css";
import "../styles/app.css";

export const Login = () => {
    const [email, setEmail]  = useState("");
    const [password, setPassword]  = useState("");
    const [isLoading, setIsLoading]  = useState(false);


    return (
        <div
            className="component-container centered"
        >
            <Form className="login-form">
                <div className="text-centered" style={{
                    textAlign: "center"
                }}>
                    <h2>P.A. User Management System</h2>
                    <Avatar
                        src={""}
                        shape="square"
                        size={70}
                        icon={<UserOutlined />}
                    />
                </div>
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    className="login-input"
                    size="large"
                    placeholder="Email"
                    name="email"
                    value={email}
                    // onChange={this.handleInput}
                />
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    className="login-input"
                    size="large"
                    placeholder="Password"
                    name="password"
                    value={password}
                    // onChange={this.handleInput}
                    // onKeyDown={this._handleKeyDown}
                    rules={[{ required: true, message: "Please input your password!" }]}
                />
                <Button
                    // onClick={this.handleSignInOnSubmit}
                    size="large"
                    type="primary"
                    block
                    loading={isLoading}
                >
                    <LoginOutlined />
                    Login
                </Button>
            </Form>
        </div>
    )
}