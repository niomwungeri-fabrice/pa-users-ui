import React, { useState } from "react";
import { logout, useAuthState } from "../stores/AuthStore";
import { Input, Button, Form, Avatar, Select, Table, Tag, Space, Tabs } from "antd";
import { PieChart } from 'react-minimal-pie-chart';
import { UserOutlined, LockOutlined, LoginOutlined } from "@ant-design/icons";
const { TabPane } = Tabs;

const { Option } = Select;

const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: 'Tags',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <>
                {tags.map(tag => {
                    let color = tag.length > 5 ? 'geekblue' : 'green';
                    if (tag === 'loser') {
                        color = 'volcano';
                    }
                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </>
        ),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];
const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['nice', 'developer'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['loser'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['cool', 'teacher'],
    },
];
export const Settings = () => {
    const [names, setNames] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const authState = useAuthState();

    return <div className="component-container">
        <Tabs defaultActiveKey="1" >
            <TabPane tab="Profile" key="1">
            <div
            className="component-container centered"
        >
            <Form className="login-form">
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
                    <Select size="large" className="component-width" defaultValue="FEMALE" 
                    // onChange={handleChange}
                    >
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
                <Button
                    // onClick={this.handleSignInOnSubmit}
                    size="large"
                    type="primary"
                    block
                    loading={isLoading}
                >
                    <LoginOutlined />
                   
                </Button>
            </Form>
        </div>
            </TabPane>
            <TabPane tab="Administration" key="2">
                <Tabs defaultActiveKey="1" tabPosition="left">
                    <TabPane tab="Users" key="1">
                        <Table columns={columns} dataSource={data} />
                    </TabPane>
                    <TabPane tab="Data" key="2">
                        <div>
                        Sign Up  - Hi, {JSON.stringify(authState.me.get().data)}! <br /> Welcome to our homepage
                            <PieChart
                                data={[
                                    { title: 'FEMALE', value: 30, color: '#E38627' },
                                    { title: 'MALE', value: 50, color: '#C13C37' },
                                    { title: 'OTHER', value: 20, color: '#6A2135' },
                                ]}
                            />;
                        </div>
                    </TabPane>
                </Tabs>
            </TabPane>
        </Tabs>
    </div>
}