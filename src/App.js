import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from './components/Login';
import { NotFound } from "./presentational/NotFound";
import { Settings } from './components/Settings';
import { SignUp } from './components/SignUp';

import "./styles/app.css";
import "./styles/login.css";
import 'antd/dist/antd.css';

import { PrivateRoute } from "./routes";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" exact element={<Login />} />
        <Route path="/signup" exact element={<SignUp />} />
        <Route path="/" exact element={
          <PrivateRoute>
            <Settings />
          </PrivateRoute>} />
        <Route exact element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

