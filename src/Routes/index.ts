import React from "react";
import Login from "../pages/Login";
import Event from "../pages/Event";
export interface IRoute {
    path: string,
    component: React.ComponentType;
    exact?: boolean;
}

export const publicRoutes: IRoute[] = [
    { path: '/login', exact: true, component: Login }
]

export const priveateRoutes: IRoute[] = [
    { path: '/event', exact: true, component: Event }
]

export enum RouteNames {
    LOGIN = '/login',
    EVENT = '/event'
}