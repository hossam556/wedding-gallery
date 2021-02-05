import React from 'react'
import styled from 'styled-components';

const Div = styled.div`
width : 100% ;
height: 100%;
//margin-right : 5px;
//margin-bottom:5px ;
background-color : #282828	 ;
position: relative;`

const Img = styled.img`
width : 35px;
max-width :100% ;
object-fit: contain ;
color : white;
background-color:none;
position:absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -100%);
`
const P = styled.p`
position:absolute;
top : 90px ;
left: 50%;
transform: translate(-50%, -50%);
font-size:18px;
white-space: nowrap;
`

const A = styled.a`
text-decoration: none ;
color : white;`

const DrawerItem=(props) =>{
    return (
        <Div>
            <A href='/'>
                <Img src={props.icon} alt={props.title}/>
                <P>{props.title}</P>
            </A>
        </Div>
    )
}

export default DrawerItem;
