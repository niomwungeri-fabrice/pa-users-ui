import "../styles/app.css";
import "../styles/login.css";
import '../styles/shared.css';
import { Input, Button, Form, Alert } from "antd";
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
import { useState } from '@hookstate/core';
import { signUp, useAuthState } from "../stores/AuthStore";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";


export const SignUp = () => {
    const names = useState("");
    const email = useState("");
    const password = useState("");
    const confirmPassword = useState("");

    const authState = useAuthState();

    const navigate = useNavigate();

    const handleSignUp = () => signUp(email.get(), password.get(), confirmPassword.get(), names.get());

    useEffect(() => {
        if (authState.hasAccount.value) {
            navigate("/login");
        }
    }, [authState.hasAccount.value]);

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
                    placeholder="Names"
                    name="email"
                    value={names.get()}
                    onChange={(e) => names.set(e.target.value)}
                />

                <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    className="login-input"
                    size="large"
                    placeholder="Email"
                    name="email"
                    value={email.get()}
                    onChange={(e) => email.set(e.target.value)}
                />
                <div className="add-flex-view right-left">
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        className="login-input space"
                        size="large"
                        placeholder="Password"
                        name="password"
                        value={password.get()}
                        onChange={(e) => password.set(e.target.value)}
                    />
                    <Input.Password
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        className="login-input space"
                        size="large"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={confirmPassword.get()}
                        onChange={(e) => confirmPassword.set(e.target.value)}
                    />
                </div>
                <Button
                    size="large"
                    type="primary"
                    block
                    loading={authState.isLoading.get()}
                    onClick={handleSignUp}
                >
                    <LoginOutlined />
                    Sign Up
                </Button>
                <div>Do you have an account already?<Button type="link" onClick={()=> navigate('/login')} >Sign in here</Button> </div>
            </Form>
        </div>
    )
}