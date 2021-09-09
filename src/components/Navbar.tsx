import { Layout, Row, Menu } from "antd";
import { FC } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {useHistory} from "react-router-dom";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { RouteNames } from "../Routes";

const Navbar:FC = () => {
    
    const router = useHistory();
    
    const {isAuth} = useTypedSelector(state=>state.auth);

    return(
        <Layout.Header>
            <Row justify="end">
                 <Menu theme='dark' selectable={false} mode="horizontal" >
                    {isAuth 
                        ?
                        <Menu.Item>
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