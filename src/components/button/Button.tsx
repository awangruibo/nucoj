import * as React from 'react';
import {useState} from "react";
import {NavLink} from "react-router-dom";

interface IButton {
    context: string | number, // 文字内容
    color: string, // 底色
    fontColor: string, // 文字颜色
    size : number//按钮大小
    enter : boolean,//鼠标是否放在按钮上，进入变色
    enterColor ?: string,//变色
    enterFontColor ?: string,//字体变色
    link ?: string,//链接
    onClick ?: Function,//点击函数
    style ?: object,//style对象
}

function Button(props : IButton) {
    const [enter, setEnter] = useState<boolean>(props.enter);

    return (
        <div style={{
            ...props.style,
            width:props.size + 'vw',
            height: props.size / 3 * 3 + "vh",
            lineHeight: props.size / 3 * 3 + "vh",
            backgroundColor: enter ? (props.enterColor === undefined ? 'orange' : props.enterColor) : props.color,
            cursor :'pointer',//鼠标放上去的样式
            borderRadius: "60px",//圆角
            boxShadow: "0 2px 2px 2px rgba(7, 17, 27, .15)",//背景阴影
            textAlign : 'center',//文本的对齐格式
            alignContent: "center",//交叉轴对齐方式
        }}
            //点击执行
            onClick={() => {
                props.onClick != null && props.onClick();
            }}

             //鼠标放上去执行
            onMouseEnter={() => {
                setEnter(true);
            }}

            //鼠标离开执行
            onMouseOut={() => {
                setEnter(false);
            }}

        >
            {
                props.link ?
                    <NavLink to={props.link}>
                        <p style={{
                            color: enter ? (props.enterFontColor === undefined ? 'green' : props.enterFontColor) : props.fontColor,
                            fontSize: props.size * 2 + "px",
                        }}>{props.context}</p>
                    </NavLink>
                :
                <p style={{
                    color: enter ? (props.enterFontColor === undefined ? 'green' : props.enterFontColor) : props.fontColor,
                    fontSize: props.size * 2 + "px",
                }}>{props.context}</p>
            }
        </div>
    );
}

export default Button;