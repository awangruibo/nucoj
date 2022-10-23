import * as React from 'react';
import Websiteicon from "../../assets/icon/websiteicon";
import ProblemIcon from "../../assets/icon/ProblemIcon";
import TrainIcon from "../../assets/icon/TarinIcon";
import SolutionIcon from "../../assets/icon/SolutionIcon";
import ContestIcon from "../../assets/icon/ContestIcon";
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
interface ILink {
    name : string,
    icon : any,
    link : string,
}

const MenuLink : Array<ILink> = [
    {
        name : '首页',
        icon : <Websiteicon width={1} style={{margin: 'auto'}}/>,
        link : '/oj/index',
    },
    {
        name : '题库',
        icon : <ProblemIcon width={1} style={{margin: 'auto'}}/>,
        link : '/oj/problem',
    },
    {
        name : '题单',
        icon : <TrainIcon width={1} style={{margin: 'auto'}}/>,
        link : '/oj/train',
    },
    {
        name : '比赛',
        icon : <ContestIcon width={1} style={{margin: 'auto'}}/>,
        link : '/oj/contest',
    },
    {
        name : '题解',
        icon : <SolutionIcon width={1} style={{margin: 'auto'}}/>,
        link : '/oj/solution',
    },

]

function Topbar(){
    useEffect(() => {
        document.title = "Online Judge";
    },[]);
    return(
        <div style={{
            display :'flex',
            background:'#fff',
            height:'5vh',
            width:'100vw',
            left : '0',
            top : '0',
            justifyContent: 'flex-start',
            flexDirection: 'column',
            flexWrap: 'wrap',
            alignContent: 'space-around',
            //生成固定定位的元素，相对于浏览器窗口进行定位。
            //元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。
            position :'fixed',
            boxShadow: "0 4px 4px 4px rgba(7, 17, 27, .15)",//阴影
        }}>
            <div style={{
                display :'flex',
                width :'50%',
                height : '100%',
                justifyContent: 'space-evenly',
                flexDirection: 'column',
                flexWrap: 'wrap',
                alignContent: 'space-around',
            }}>
                {
                    MenuLink.map((item :ILink) => <div style={{
                        display : "flex",
                        justifyContent : 'space-around',
                        alignItems : 'center',
                    }} key={item.link}>
                        <NavLink key={item.link} to={item.link} style={{
                            color :'black',
                            width : '100%',
                            height : '100%',
                            marginTop : '0.4vh',
                            display :'flex',
                            alignItems: 'center',
                            justifyItems: 'center',
                        }}>
                            {item.icon}
                            <p key={item.link} style={{flexBasis: '100%', textAlign: 'center', marginLeft : '0.5vw'}}>{item.name}</p>
                        </NavLink>
                    </div>)
                }
            </div>
        </div>
    )
}

export default Topbar;