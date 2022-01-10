import "../styles/app.css";
import "../styles/login.css";
import React, { useEffect } from "react";
import { Input, Button, Form, Alert } from "antd";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import { login, useAuthState } from "../stores/AuthStore";
import { useNavigate } from "react-router-dom";
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
    }, [authState.isLoggedIn.value]);

    const handleLogin = () => login(email.get(), password.get());

    return (
        <div
            className="component-container centered"
        >
            <Form className="login-form">
                <div className="text-centered" style={{
                    textAlign: "center"
                }}>
                    <h2>P.A. User Management System</h2>
                </div>
                {authState.message.get() && <Alert style={{ marginBottom: '10px' }} message={authState.message.get()} type="error" showIcon />}
                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    className="login-input"
                    size="large"
                    placeholder="Email"
                    value={email.get()}
                    onChange={(e) => email.set(e.target.value)}
                />
                <Input.Password
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    className="login-input"
                    size="large"
                    placeholder="Password"
                    name="password"
                    value={password.get()}
                    onChange={(e) => password.set(e.target.value)}
                />

                <Button
                    size="large"
                    type="primary"
                    block
                    loading={authState.isLoading.get()}
                    onClick={handleLogin}
                >
                    <LoginOutlined />
                    Login
                </Button>
                <div>{authState.message.get()}</div>
            </Form>
        </div>
    )
}