import { Switch, Route, Redirect } from "react-router-dom";
import React from "react";
import { priveateRoutes, publicRoutes, RouteNames } from "../Routes";
import { useTypedSelector } from "../hooks/useTypedSelector";

const AppRouter = () => {
    
    const {isAuth} = useTypedSelector( state => state.auth ); 
    console.log( isAuth );
    return(
        isAuth ? 
        <Switch>
            { priveateRoutes.map( route =>
                <Route path={route.path} 
                       exact={route.exact}
                       component={route.component}
                       key={route.path}
                />
            ) } 
            <Redirect to={RouteNames.EVENT} />
        </Switch>
        :  
        <Switch>
            { publicRoutes.map( route =>
                <Route path={route.path} 
                       exact={route.exact}
                       component={route.component}
                       key={route.path}
                />
            ) }
            <Redirect to={RouteNames.LOGIN} />
        </Switch>
    )
}
export default AppRouter;