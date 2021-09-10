import { Layout, Row, Menu } from "antd";
import { FC } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../Routes";
import { allActionCreators } from "../store/reducers/action-craetors";
import { AuthActionCreators } from "../store/reducers/auth/action-creators";

const Navbar:FC = () => {
    
    const router = useHistory();
    const dispatch = useDispatch();

    const {isAuth} = useTypedSelector(state=>state.auth);
    
    const {logout} = useActions();

    return(
        <Layout.Header>
            <Row justify="end">
                 <Menu theme='dark' selectable={false} mode="horizontal" >
                    {isAuth 
                        ?
                        <Menu.Item onClick={logout}>
                            Logout
                        </Menu.Item>   
                        :
                        <Menu.Item>
                            Login
                        </Menu.Item>
                    }
                </Menu>
            </Row>
        </Layout.Header>
    )
}

export default Navbar;