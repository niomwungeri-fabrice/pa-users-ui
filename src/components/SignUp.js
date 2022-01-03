import { Input, Button, Form, Avatar, Menu, Dropdown, Select } from "antd";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import "../styles/login.css";
import "../styles/app.css";
import '../styles/shared.css';


const { Option } = Select;

export const SignUp = () => {
    const [names, setNames] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    function handleChange(value) {
        console.log(`selected ${value}`);
    }

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
                <div className="add-flex-view right-left">
                    <Input
                        prefix={<UserOutlined className="site-form-item-icon" />}
                        className="login-input"
                        size="large"
                        placeholder="Names"
                        name="email"
                        value={names}
                    // onChange={this.handleInput}
                    />
                    <Select size="large" className="component-width" defaultValue="FEMALE" onChange={handleChange}>
                        <Option value="FEMALE">FEMALE</Option>
                        <Option value="MALE">MALE</Option>
                        <Option value="OTHER">OTHER</Option>
                    </Select>
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
                <div className="add-flex-view right-left">
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        className="login-input space"
                        size="large"
                        placeholder="Password"
                        name="password"
                        value={password}
                        // onChange={this.handleInput}
                        // onKeyDown={this._handleKeyDown}
                        rules={[{ required: true, message: "Please input your password!" }]}
                    />
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        className="login-input space"
                        size="large"
                        placeholder="Confirm Password"
                        name="password"
                        value={password}
                        // onChange={this.handleInput}
                        // onKeyDown={this._handleKeyDown}
                        rules={[{ required: true, message: "Please input your password!" }]}
                    />
                </div>
                <Button
                    // onClick={this.handleSignInOnSubmit}
                    size="large"
                    type="primary"
                    block
                    loading={isLoading}
                >
                    <LoginOutlined />
                    Sign Up
                </Button>
            </Form>
        </div>
    )
}