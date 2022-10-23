import React,{ReactNode} from 'react';

interface IContainer {
    icon ?: ReactNode,
    title : string,
    style ?: object,
    width : string,
    children ?: ReactNode,
}

function Index(props : IContainer) {
    return (
        <div style={{
            width : props.width,
            boxShadow : '0 4px 4px 4px rgba(7, 17, 27, .05)',
            borderRadius : '10px',
            ...props.style,
        }}>
            <div style={{
                borderRadius: '10px 10px 0 0',
                display : 'flex',
                alignItems: 'baseline',
                justifyContent: 'center',
                margin: 'auto' ,
                marginTop :'3px',
                backgroundColor:'#f3f4f5',
                minHeight : '40px',
                paddingTop : '10px',
            }}>
                {props.icon} &nbsp;&nbsp;
                <p style={{
                    fontSize : '24px',
                    position : 'relative',
                    top : '-5px',
                }}>{props.title}</p>
            </div>
            <div style={{
                minHeight :'40px',
                padding : '10px',
            }}>
                {props.children}
            </div>
        </div>
    );
}

export default Index;