import { Row } from "antd";
import LoginForm from "../components/loginForm";
const Login = () => {
    return(
        <div>
            <Row justify="center" align="middle" className={'h100'}>
                <LoginForm />
            </Row>
        </div>
    )
}

export default Login;