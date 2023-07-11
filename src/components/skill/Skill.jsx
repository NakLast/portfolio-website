import React from "react"

import { Row, Col, Card } from 'antd'
import {
    CheckCircleOutlined
} from '@ant-design/icons'

const Skill = () => {
    return (
        <>
            <Row justify="space-evenly">
                <Col xs={24} md={24} lg={24}>
                    <h5>What Skills I Have</h5>
                    <h1>My Experience</h1>
                </Col>
                <Row justify="space-evenly" gutter={[10, 10]} style={{ width: "100%"}}>
                    <Col xs={24} md={24} lg={11}>
                        <Card>
                            <h3>Frontend Development</h3>
                            <br />
                            <Row justify="space-evenly">
                                <Col xs={5} md={5} lg={5}>
                                    <h4><CheckCircleOutlined /> HTML</h4>
                                    <h5>Experinced</h5>
                                </Col>
                                <Col xs={5} md={5} lg={5}>
                                    <h4><CheckCircleOutlined /> CSS</h4>
                                    <h5>Experinced</h5>
                                </Col>
                            </Row>
                            <Row justify="space-evenly">
                                <Col xs={5} md={5} lg={5}>
                                    <h4><CheckCircleOutlined /> Bootstrap</h4>
                                    <h5>Experinced</h5>
                                </Col>
                                <Col xs={5} md={5} lg={5}>
                                    <h4><CheckCircleOutlined /> React</h4>
                                    <h5>Experinced</h5>
                                </Col>
                            </Row>
                            <Row justify="space-evenly">
                                <Col xs={5} md={5} lg={5}>
                                    <h4><CheckCircleOutlined /> JavaScript</h4>
                                    <h5>Experinced</h5>
                                </Col>
                                <Col xs={5} md={5} lg={5}>
                                    <h4><CheckCircleOutlined /> TypeScript</h4>
                                    <h5>Experinced</h5>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col xs={24} md={24} lg={11}>
                        <Card>
                            <h3>Backend Development</h3>
                            <br />
                            <Row justify="space-evenly">
                                <Col xs={5} md={5} lg={5}>
                                    <h4><CheckCircleOutlined /> Node JS</h4>
                                    <h5>Experinced</h5>
                                </Col>
                                <Col xs={5} md={5} lg={5}>
                                    <h4><CheckCircleOutlined /> Django</h4>
                                    <h5>Experinced</h5>
                                </Col>
                            </Row>
                            <Row justify="space-evenly">
                                <Col xs={5} md={5} lg={5}>
                                    <h4><CheckCircleOutlined /> PHP</h4>
                                    <h5>Experinced</h5>
                                </Col>
                                <Col xs={5} md={5} lg={5}>
                                    <h4><CheckCircleOutlined /> MySQL</h4>
                                    <h5>Experinced</h5>
                                </Col>
                            </Row>
                            <Row justify="space-evenly">
                                <Col xs={5} md={5} lg={5}>
                                    <h4><CheckCircleOutlined /> Python</h4>
                                    <h5>Experinced</h5>
                                </Col>
                                <Col xs={5} md={5} lg={5}>
                                    <h4><CheckCircleOutlined /> Docker</h4>
                                    <h5>Experinced</h5>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    
                </Row>
            </Row>
        </>
    )
}

export default Skill