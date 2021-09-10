import { FC, useState } from "react";
import { Form, Input, Button } from 'antd';
import { rules } from "../utils/rules";
import { useDispatch } from "react-redux";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";
import { useTypedSelector } from "../hooks/useTypedSelector";
const LoginForm:FC = () => {

    
    const dispatch = useDispatch();

    const submit = () => {
        dispatch( AuthActionCreators.login( username, password ) );
    }

    const { error, isLoading } = useTypedSelector(state => state.auth);
    
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    
    return(

        <div className="formWrapper">
            
            {error && <div style={{color: 'red'}}>
                {error}
            </div>}

            <Form
                onFinish={submit}
            >
                <Form.Item label='Username' 
                           name ='username'
                           rules={[rules.required('Please input your name here')]} 
                >
                    <Input value={username} onChange={ e => setUsername(e.target.value) }/>
                </Form.Item>
                
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[rules.required('Enter your password')]}
                    >
                    
                    <Input.Password value={password} onChange={ e => setPassword( e.target.value ) }/>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit" loading={isLoading}>
                        Submit
                    </Button>
                </Form.Item>

            </Form>
        </div>
    )
}

export default LoginForm;