import { Input, Button, Form, Avatar } from "antd";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import { login, useAuthState } from "../stores/AuthStore";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css";
import "../styles/app.css";
import { useState } from '@hookstate/core';


export const Login = () => {

    const authState = useAuthState();
    const email = useState("");
    const password = useState("");

    const navigate = useNavigate();

    useEffect(() => {

        if (authState.isLoggedIn.value) {
            navigate("/");
        }
        // eslint-disable-next-line
    }, [authState.isLoggedIn.value]);

    const handleLogin = () => login(email.get(), password.get());
    // you can do redirect here base on result from login function
    // instead of using useEffect()

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
                    value={email.get()}
                    onChange={(e) => email.set(e.target.value)}
                // onChange={this.handleInput}
                />
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    className="login-input"
                    size="large"
                    placeholder="Password"
                    name="password"
                    value={password.get()}
                    onChange={(e) => password.set(e.target.value)}
                    rules={[{ required: true, message: "Please input your password!" }]}
                />

                <Button
                    // onClick={this.handleSignInOnSubmit}
                    size="large"
                    type="primary"
                    block
                    loading={authState.isLoading.get()}
                    onClick={handleLogin}
            >
                    <LoginOutlined />
                    Login
                </Button>
                <div> {authState.message.get()}</div>
            </Form>
        </div>
    )
}