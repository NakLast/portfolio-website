import React from "react"

import { Row, Col, Card } from "antd"
import {
    RadarChartOutlined,
    UserOutlined,
    ProjectOutlined
} from '@ant-design/icons';

import Profile from "../../assets/skull-dark-minimalism-4k-ru-1920x1080.jpg"

const About = () => {
    return (
        <>
            <Row justify="space-evenly">
                <Row>
                    <Col xs={24} md={24} lg={24}>
                        <h5>Get To Know</h5>
                        <h1>About Me</h1>
                    </Col>
                </Row>
                <Row justify="space-evenly">
                    <Col xs={24} md={24} lg={8}>
                        <img src={Profile} style={{ height: "100%", width: "100%" }}/>
                    </Col>
                    <Col xs={24} md={24} lg={12}>
                        <Row gutter={[10, 10]}>
                            <Col xs={8} md={8} lg={8}>
                                <Card>
                                    <RadarChartOutlined />
                                    <h4>Experience</h4>
                                    <h5>2+ Years Working</h5>
                                </Card>
                            </Col>
                            <Col xs={8} md={8} lg={8}>
                                <Card>
                                    <UserOutlined />
                                    <h4>Clients</h4>
                                    <h5>10+ worldwide</h5>
                                </Card>
                            </Col>
                            <Col xs={8} md={8} lg={8}>
                                <Card>
                                    <ProjectOutlined />
                                    <h4>Project</h4>
                                    <h5>10+ complete</h5>
                                </Card>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={24} md={24} lg={12}>
                                <h5>My name is Tammsorn Nackwoung, my nickname is Sorn,</h5>
                                <h5>My name is Tammsorn Nackwoung, my nickname is Sorn,</h5>
                                <h5>My name is Tammsorn Nackwoung, my nickname is Sorn,</h5>
                                <h5>My name is Tammsorn Nackwoung, my nickname is Sorn,</h5>
                                <h5>My name is Tammsorn Nackwoung, my nickname is Sorn,</h5>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Row>
        </>
    )
}

export default About