import * as React from 'react';
import {useEffect} from "react";
import Button from "../../components/button/Button";

function Index(){

    useEffect(() => {
        document.title = "中北大学yyds"
    },[]);

    return (
        <div style={{
            //用require可以显示图片的样子,直接写没显示,
            background:"url(" + require('../../assets/images/coverBackground.JPG') + ")",
            width:'100vw',
            height:'100vh',
            display:'flex',//弹性盒子
            justifyContent:'center',//弹性盒子中主轴的对齐方式，为弹性盒子时才有效
            alignItems:'center',//弹性盒子中交叉轴的对齐方式，为弹性盒子时才有效
            flexWrap:'wrap',//让弹性盒元素在必要的时候拆行
        }}>
            <h1 style={{
                fontWeight:'bold',//字体粗细
                fontSize:'100px',//大小
                fontFamily:'arial',//字体
                color: 'white',
                animationName :'shake',//动画名称，需要自己实现
                animationDuration:'0.8s',//动画时长
                animationIterationCount: 'infinite',//动画执行次数
                animationTimingFunction:'linear',//执行速度
            }}>
                中北大学ACM实验室
            </h1>

            <div style={{
                flexBasis: '100%',//弹性盒初始长度,100%为重新开一行并全占
                display:'flex',
                alignItems:'center',
                justifyContent:'space-around',//主轴均分
            }}>
                <Button color={"#D6E9CA"} fontColor={"#7B8D42"} context={"前往OJ"} size={10} link={"/oj/index"}
                        enter={false}></Button>
                <Button color={"#FFFFE5"} fontColor={"#E3D7A3"} context={"历届经历"} size={10} link={"/past"}
                        enter={false}></Button>
            </div>

        </div>
    );
}

export default Index;