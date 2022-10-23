import * as React from 'react';
import Loading from "../view/loading/Loading";
// @ts-ignore
import Loadable from 'react-loadable';
/**
 * 过渡函数
 */
const loading = () => <Loading/>

//接收一个配置对象为参数,第一个属性名为loader，是一个方法，用于动态加载我们所需要的模块
//第二个参数就是Loading组件，在动态加载还未完成的过程中会有该组件占位。
export default (loader: any,load = loading)=>{
    return Loadable({
        loader: loader,
        loading: load
    });
}