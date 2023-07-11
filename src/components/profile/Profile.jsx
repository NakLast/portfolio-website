import React from "react"

import { Row, Col, Button, Space, Card, Divider  } from "antd"
import {
    LinkedinOutlined,
    GithubOutlined
} from "@ant-design/icons"

import Profiler from "../../assets/skull-dark-minimalism-4k-ru-1920x1080.jpg"

const Profile = () => {
    return (
        <>
            <Row justify="center" gutter={[16, 16]}>
                <Col xs={24} md={24} lg={24}>
                    <h4>Hello, I'm</h4>
                    <h1>Tammsorn Nackwoung</h1>
                    <h5>Frontend Developer</h5>
                </Col>
                <Col xs={24} md={24} lg={24}>
                    <Space wrap>
                        <Button
                            style={{
                                background: "none",
                                borderColor: "#5ED5D1",
                                color: "white",
                                fontSize: "16px",
                                height: "100%"
                            }}
                        >
                            Download CV
                        </Button>
                        <br />
                        <Button
                            style={{
                                backgroundColor: "#5ED5D1",
                                border: "none",
                                fontSize: "16px",
                                height: "100%"
                            }}
                        >
                            Let's Talk
                        </Button>
                    </Space>
                </Col>
                <Row justify="space-between">
                    <Col xs={2} md={2} lg={2} style={{ marginTop: "8.5%"}}>
                        <Col>
                            <LinkedinOutlined />
                        </Col>
                        <br />
                        <Col>
                            <GithubOutlined />
                        </Col>
                        <br />
                        <Col>
                            <Divider type="vertical" style={{ borderColor: "white", height: "100px"}}></Divider>
                        </Col>
                    </Col>
                    <Col xs={10} md={10} lg={10}>
                        <Card
                            cover={<img src={Profiler} style={{ height: "100%", width: "100%"}}/>}
                            style={{
                                background: "none",
                                border: "none"
                            }}
                        ></Card>
                    </Col>
                    <Col xs={2} md={2} lg={2} style={{ marginTop: "17%"}}>
                        <h4 style={{ writingMode: "vertical-lr"}}>Scoll Down</h4>
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default Profile