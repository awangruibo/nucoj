import * as React from 'react';
import {INotice} from '../../interface/notice/index'
import { Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
/**
 * 公告表格
 * @constructor
 */
function NoticeTable(props:{data:INotice[]}) {
    return (
        //datasource是数据源
        <Table<INotice> dataSource={props.data} pagination={false}>
            {/*title是显示在页面的值,dataIndex是数据对应dataSource中的哪一个*/}
            <Table.Column<INotice> key="title" title="标题" dataIndex="title" align={'center'} />
            <Table.Column<INotice> key="time" title="发布时间" dataIndex="time" align={'center'}/>
            <Table.Column<INotice> key="author" title="作者" dataIndex="author" align={'center'}/>
        </Table>
    );
}

export default NoticeTable;