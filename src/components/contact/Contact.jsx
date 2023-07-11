import React from "react"

import { Row, Col, Card, Input } from 'antd'
import {
    MailOutlined
} from '@ant-design/icons'

const Contact = () => {
    return (
        <>
            <Row justify="space-evenly">
                <Row style={{ width: "100%"}}>
                    <Col xs={24} md={24} lg={24}>
                        <h4>Get in Touch</h4>
                        <h1>Contact Me</h1>
                    </Col>
                </Row>
                <Row justify="space-evenly" style={{ width: "100%"}}>
                    <Col xs={24} md={24} lg={18}>
                        <Row gutter={[16, 16]} style={{ width: "100%"}}>
                            <Col xs={12} md={12} lg={12}>
                                <Card>
                                    <MailOutlined />
                                    <h3>Email</h3>
                                    <h5>nackwoung@gmail.com</h5>
                                    <h4>Send a messange</h4>
                                </Card>
                            </Col>
                            <Col xs={12} md={12} lg={12}>
                                <Input style={{ height: "40%"}}></Input>
                            </Col>
                        </Row>
                    </Col>                       
                 
                </Row>
            </Row>
        </>
    )
}

export default Contact