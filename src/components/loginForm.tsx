import { FC } from "react";
import { Form, Input, Button } from 'antd';
import { rules } from "../utils/rules";

const LoginForm:FC = () => {
    
    const submit = () => {
        console.log('123')
    }

    return(
        <div className="formWrapper">
            <Form
                onFinish={submit}
            >
                <Form.Item label='Username' 
                           name ='username'
                           rules={[rules.required('Please input your name here')]} 
                >
                    <Input/>
                </Form.Item>
                
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[rules.required('Enter your password')]}
                    >
                    
                    <Input.Password />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}

export default LoginForm;