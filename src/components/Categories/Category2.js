import React from 'react';
import styled from 'styled-components';


const Modal = styled.div`
position: absolute;
background-color:white;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
top: 120px;
padding:35px;
width:58%;
height: 130px;
display:none;
`
const Div = styled.div`
position: relative;
text-align:center;
cursor:pointer ;
:hover ${Modal}{
   display : block;
};
`

const Img = styled.img`
max-width : 350px ;
float: left;
height: 240px;
object-fit: cover;
 margin-bottom : 10px;
 margin-right : 14px;
 filter: brightness(60%);
 
`
const Icon = styled.img`
width : 50px;
object-fit: contain ;
color : white;
background-color:none;
position:absolute;
right: 160px;
top:65px;
`

const A = styled.a`
text-decoration: none ;
color : white;


`
const P = styled.p`
position:absolute;
top: 50%;
left: 50%;
  transform: translate(-50%, -50%);
  top:125px;
//right: 130px;
//top:130px;
font-size:24px;
white-space: nowrap;
font-weight:bold;
`



const Span = styled.span`
background-color:black;
padding:9px 5px;
position: absolute;
top:18px ;
left: 50%;
transform: translate(-50%, -50%);
 `

//const H4 = styled.h4`
//
const P2 =styled.p`
font-size:12px;`

const A2 = styled.a`
font-size:12px;
text-decoration:none;
color:#337ab7;`

const Category2=(props)=> {
    return (
        <Div>
            <A href='/'>
             <Img src={props.image} alt={props.title}/>
             <Icon src={props.icon} alt={props.title}/> 
             <P>{props.title}</P>
            </A>
            <Modal>
                <Span><i  class='fas fa-home' style={{fontSize:'20px' ,color:'white'}}></i></Span>
                <h3>{props.title}</h3>
               <P2>{props.desc}</P2>
               <A2 href='/'>{props.link}</A2>
            </Modal>
        </Div>
    )
}

export default Category2;
