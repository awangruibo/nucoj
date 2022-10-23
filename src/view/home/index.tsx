import * as React from 'react';
import {useEffect, useState} from "react";
import Container from "../../components/container";
import ContestIcon from "../../assets/icon/ContestIcon2";
import NoticeIcon from "../../assets/icon/NoticeIcon";
import UpdateIcon from "../../assets/icon/UpdateIcon2";
import NoticeTable from "../../components/table/NoticeTable";
import {INotice} from "../../interface/notice";

function Index() {
    console.log("home");
    const [noticeData,setnoticeData] = useState<INotice[]>([]);
    return (
        <div style={{
            marginTop : '7vh',
            display :'flex',
        }}>
            <div style={{
                marginLeft :'5vw',
            }}>
                <div style={{

                }}>
                    <Container title={'公告'} width={'52vw'} icon={<NoticeIcon/>} >
                        <NoticeTable data={noticeData}/>
                    </Container>

                    <Container style={{marginTop : '5vh',}} title={'近期比赛'} width={'52vw'} icon={<ContestIcon/>} >
                        <NoticeTable data={noticeData}/>
                    </Container>

                    <Container style={{marginTop : '5vh',}} title={'最近更新'} width={'52vw'} icon={<UpdateIcon/>} >
                        <NoticeTable data={noticeData}/>
                    </Container>
                </div>

            </div>

            <div style={{
                marginLeft :'2vw',
                width :'35vw',
                height:'90vh',
                background:'green',
            }}></div>

        </div>
    );
}

export default Index;