import React, { Fragment } from "react";
import { BrowserRouter, Route, Switch, Routes } from "react-router-dom";
import { Login } from './components/Login';
import { NotFound } from "./presentational/NotFound";
import { Settings } from './components/Settings';
import { SignUp } from './components/SignUp';

import "./styles/app.css";
import "./styles/login.css";
import 'antd/dist/antd.css';

export const App = () => {

  return (
    <BrowserRouter>
      <Fragment>
        <div>
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/settings" exact element={<Settings />} />
            <Route exact element={<NotFound />} />
          </Routes>
        </div>
      </Fragment>
    </BrowserRouter>
  );
}

