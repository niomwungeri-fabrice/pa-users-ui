import "../styles/app.css";
import "../styles/login.css";
import React, { useEffect, useState } from "react";
import { Input, Button, Form, Select, Table, Tabs, Alert } from "antd";
import { UserOutlined, LoginOutlined } from "@ant-design/icons";
import { api } from "../api/_DATA";
import { useAuthState, logout } from "../stores/AuthStore";
import { createUUID } from "../helpers";
import ReactApexChart from "react-apexcharts";
import { useNavigate } from "react-router-dom";

const { TabPane } = Tabs;

const { Option } = Select;


const columns = [
    {
        title: 'Names',
        dataIndex: 'names',
        key: 'names',
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: 'Gender',
        dataIndex: 'gender',
        key: 'gender',
    },
    {
        title: 'Phone Number',
        dataIndex: 'phoneNumber',
        key: 'phoneNumber',
    },
    {
        title: 'Email',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Is Admin',
        dataIndex: 'admin',
        key: 'admin',
    }
];

export const Settings = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isUserDataLoading, setIsUserDataLoading] = useState(false);
    const [isUpdating, setIsUpdating] = useState(false);
    const [users, setUsers] = useState([]);
    const [loggedInUser, setLoggedInUser] = useState({});

    const [updateSuccess, setUpdateSuccess] = useState("");
    const [updateError, setUpdateError] = useState("");

    const authState = useAuthState();
    const [pieData, setPieData] = useState({});

    const navigate = useNavigate();


    useEffect(() => {
        getAllUsers(authState.me.get().data);
        setLoggedInUser(authState.me.get().user);
        getDataByGender(authState.me.get().data);
    }, [isUpdating]);



    const getAllUsers = async (token) => {
        setIsUserDataLoading(true);
        const config = { headers: { Authorization: `Bearer ${token}` } };
        try {
            const { data } = await api.get("/users", config);
            setUsers(data.data);
            setIsUserDataLoading(false);
        } catch (error) {
            // handle errors
        } finally {
            setIsUserDataLoading(false);
        }
    };


    const getDataByGender = async (token) => {
        setIsLoading(true);
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        try {
            const { data } = await api.get("/count/gender", config);
            setPieData(
                {
                    series: data.data.map(a => a.value),
                    options: {
                        chart: {
                            width: 380,
                            type: 'pie',
                        },
                        labels: data.data.map(a => a.title),
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }]
                    },
                }

            );
            setIsLoading(false);
        } catch (error) {
            // handle errors
        } finally {
            setIsLoading(false);
        }
    };

    const handleUpdate = async () => {
        const userId = loggedInUser['userId'];

        // remove unnecessary fields for updating a records
        delete loggedInUser['systemId'];
        delete loggedInUser['updatedAt'];
        delete loggedInUser['createdAt'];
        delete loggedInUser['userId'];
        setIsUpdating(true);
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${authState.me.get().data}`
                }
            };
            const { data } = await api.post(`/complete/${userId}/form`, { ...loggedInUser }, config);
            setUpdateSuccess(data.message);
            setIsUpdating(false);
        } catch (error) {
            setUpdateError(error.response.data.error)
        } finally {
            setIsUpdating(false);
        }
    }

    const handleInput = ({ target: { value, name } }) => {
        setLoggedInUser({ ...loggedInUser, [name]: value });
    }

    const handleSelectChange = (value) => {
        setLoggedInUser({ ...loggedInUser, gender: value });
    }

    const handleLogout = () => {
        navigate(`/login`);
        logout();
    }


    return <div className="site-margin">
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between' }}>
            <span></span>
            <Button style={{marginTop: '15px'}}
                onClick={handleLogout}
                size="large"
                type="primary"
                loading={isUpdating}
            >
                <LoginOutlined />
                Log Out
            </Button>
        </div>
        <Tabs defaultActiveKey="1" >
            <TabPane tab="Profile" key="1">
                <div className="component-container centered">
                    <Form className="login-form">
                        {updateSuccess && <Alert style={{ marginBottom: '10px' }} message={updateSuccess} type="success" closeText="Close Now" showIcon />}
                        {updateError && <Alert style={{ marginBottom: '10px' }} message={updateError} type="error" closeText="Close Now" showIcon />}
                        <div className="add-flex-view right-left">
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                className="login-input"
                                size="large"
                                placeholder="Names"
                                name="names"
                                value={loggedInUser.names}
                                onChange={handleInput}
                            />
                            <Select size="large" className="component-width" defaultValue={loggedInUser.gender}
                                onChange={handleSelectChange}
                            >
                                <Option value="FEMALE">FEMALE</Option>
                                <Option value="MALE">MALE</Option>
                                <Option value="OTHER">OTHER</Option>
                            </Select>
                        </div>

                        <div className="add-flex-view right-left">
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                className="login-input"
                                size="large"
                                placeholder="Age"
                                name="age"
                                value={loggedInUser.age}
                                onChange={handleInput}
                            />
                            <Input
                                prefix={<UserOutlined className="site-form-item-icon" />}
                                className="login-input"
                                size="large"
                                placeholder="Phone Number"
                                name="phoneNumber"
                                value={loggedInUser.phoneNumber}
                                onChange={handleInput}
                            />
                        </div>
                        <Input
                            prefix={<UserOutlined className="site-form-item-icon" />}
                            className="login-input"
                            size="large"
                            placeholder="Email"
                            name="email"
                            value={loggedInUser.email}
                            onChange={handleInput}
                        />
                        <Button
                            onClick={handleUpdate}
                            size="large"
                            type="primary"
                            block
                            loading={isUpdating}
                        >
                            <LoginOutlined />
                            Update my profile
                        </Button>
                    </Form>
                </div>
            </TabPane>
            {!loggedInUser.admin &&
                <TabPane tab="Administration" key="2">
                    <Tabs defaultActiveKey="1" tabPosition="left">
                        <TabPane tab="Users" key="1">
                            {isUserDataLoading
                                ? <div>loading...</div>
                                : <Table rowKey={createUUID} columns={columns} dataSource={users} />}
                        </TabPane>
                        <TabPane tab="Data" key="2">
                            <div>
                                <h3>Count By Gender</h3>
                                <ReactApexChart options={pieData.options} series={pieData.series} type="pie" width={380} />
                            </div>
                        </TabPane>
                    </Tabs>
                </TabPane>
            }
        </Tabs>
    </div>
}