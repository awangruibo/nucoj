import * as React from 'react';
import {Route, Routes} from "react-router";
import Loading from "./Loading";
import Index from "../view/404";

interface IRoute {
    path : string,
    component : Function,
    meta : object,
}

// @ts-ignore
const RouterIndexList : Array[IRoute] = [
    {
        path : '/',
        component : Loading(() => import('../view/cover')),
        meta : {
            title : '封面',
        }
    },

    {
        path : '/past',
        component : Loading(() => import('../view/past')),
        meta : {
            title : '历届队员',
        }
    },

    {
        //oj的主页面
        path : '/oj/*',
        component : Loading(() => import('../view/bar/Topbar')),
        meta : {
            title : 'OJ导航',
        }
    },

]

// @ts-ignore
const RouterOjList : Array[IRoute] = [
    {
        path : '/oj/index',
        component : Loading(() => import('../view/home')),
        meta : {
            title : '主界面',
        }
    },

    {
        path : '/oj/problem',
        component : Loading(() => import('../view/problem')),
        meta : {
            title : '题库',
        }
    },

    {
        path : '/oj/train',
        component : Loading(() => import('../view/train')),
        meta : {
            title : '题单',
        }
    },

    {
        path : '/oj/contest',
        component : Loading(() => import('../view/contest')),
        meta : {
            title : '比赛',
        }
    },

    {
        path : '/oj/solution',
        component : Loading(() => import('../view/solution')),
        meta : {
            title : '题解',
        }
    },

]

export function RouterIndexView() {
    return (
        <Routes>
                {
                    RouterIndexList.map((item : IRoute) => (
                        <Route
                            key = {item.path}
                            path = {item.path}
                            element={<item.component/>}
                        ></Route>
                    ))
                }
                {/*<Route path={'/oj/*'} element={<Index/>}></Route>*/}
                <Route path={"*"} element={<Index/>}></Route>
        </Routes>
    );
}

export function RouterOjView() {
    return (
        <Routes>
            {
                RouterOjList.map((item : IRoute) => (
                    <Route
                        key = {item.path}
                        path = {item.path}
                        element={<item.component/>}
                    ></Route>
                ))
            }
            {/*<Route path={'/oj/*'} element={<Index/>}></Route>*/}
            <Route path={"*"} element={<Index/>}></Route>
        </Routes>
    );
}