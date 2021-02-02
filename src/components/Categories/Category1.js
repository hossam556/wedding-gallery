import React from 'react';
import styled from 'styled-components';

const Div = styled.div`
padding-right:50px;
`

const Img = styled.img`
background-color : black;
width : 32px;
object-fit: contain ;`

const  P = styled.p`
font-size: 12px ;
color : white;
text-align:center;
`

const A = styled.a`
text-decoration: none ;
display: flex ;
flex-direction:column;
justify-content : center;
align-items:center;
`

const Gategory1=(props)=> {
    return (
        <Div>
            <A href='/'>
                <Img src={props.icon} alt={props.title}/>
                <P>{props.title}</P>
            </A>
        </Div>
    )
}

export default Gategory1;
