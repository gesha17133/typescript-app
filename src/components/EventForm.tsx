import React, { FC } from "react";
import {Form,Select, Button, Input, DatePicker, Row} from "antd";
import { rules } from "../utils/rules";

const EventForm:FC = () => {
    
    const submit = () => {

    }

    return(
        <Form
            onFinish={submit} >

            <Form.Item label='Description of the event' 
                    name ='username'
                    rules={[rules.required('Please input your name here')]} >
                <Input />
            </Form.Item>
            
            <Form.Item>
                <Row justify="end">
                    <DatePicker 
                        name="Event Date" />
                </Row>
            </Form.Item>
            <Form.Item>
                <Row justify="end">
                    <Select />
                </Row>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Row justify="end">
                        <Button type="primary" htmlType="submit" >
                            Create
                        </Button>
                </Row>
            </Form.Item>

        </Form>
    )
}
export default EventForm;