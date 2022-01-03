import React from "react";
import { Link } from "react-router-dom";
import { Result } from 'antd'
export const NotFound = () => {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle={`Sorry, the page you visited does not exist.`}
                extra={<Link className="ant-btn ant-btn-primary" to="/">Back Home</Link>}>
            </Result>
        </div>
    )
};