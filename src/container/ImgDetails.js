import React from 'react';
import {connect} from 'react-redux';
import Aux from '../hoc/Auxilary';
import styled from 'styled-components';

const Divv = styled.div`
width : 84% ;
margin : auto ;
@media(max-width : 1125px){
    width : 90%  ;
  };`

const Container = styled.div`
display : flex ;
width : 100% ;
margin-bottom:80px;
@media(max-width : 769px){
    flex-direction : column ;
  };
  `

const Div1 = styled.div`
flex : 65% ;
padding-top : 10px;
padding-left : 15px;`

const Div2 = styled.div`
flex : 35% ;
@media(max-width : 1125px){
    padding-left : 20px ;
  };
@media(max-width : 990px){
    font-size:12px;
  };
  
`

const Div = styled.div`
width : 100% ;
display : flex ;
align-items: center ;
padding-left:10px ;
padding-top : 20px;
@media(max-width : 575px){
    font-size:10px;
};
`
const Img = styled.img`
width : 700px ;
object-fit : contain;
max-width : 100%;
`

const Span = styled.span`
font-size :30px ;
color: #333;
padding-right : 7px;`

const A = styled.a`
text-decoration : none ;
color :#008174;
padding-right : 7px;
transition: all ease 0.2s;
:hover{
 color : black;
};`

const H3 = styled.h3`
text-transform: uppercase;`

const H5 = styled.h5`
    font-size: 23.6px;
    line-height: 1.42;
    font-family: inherit;
    font-weight: 500;
    @media(max-width : 990px){
    font-size:18px;
  };`

const H55 = styled.h5`
font-size: 23.6px;
color: #337ab7;
@media(max-width : 990px){
    font-size:18px;
  };`

const Fspan = styled.span`
    border-radius: 50%;
    background-color: #000;
    font-size: 22px;
    padding: 4px 10px;
    color: #fff;
    margin-right: 10px;`

const Tspan = styled.span`
border-radius: 50%;
background-color: #000;
font-size: 22px;
padding: 4px 5px;
color: #fff;
`   
const Idiv  = styled.div`
@media(max-width : 769px){
    width : 100% ;
    text-align : center ;
  };
`

const ImgDetails=(props)=> {
    return (
        <Divv>
            <Div>
               <h3><A href='/'>GALLERY</A></h3>
               <Span><i class="fa fa-angle-right " aria-hidden="true"></i></Span>
               <h3><A href='/'>WEDDING IDEAS</A></h3>
               <Span><i class="fa fa-angle-right " aria-hidden="true"></i></Span>
               <H3>{props.idea.title}</H3>
            </Div>
            <Container>   
            <Div1>
               <Img src={props.idea.image} alt={props.idea.title}/>
            </Div1>
            <Div2>
                <h1>{props.idea.title}</h1>
                <H5>{props.idea.description}</H5>
                <H55>{props.idea.related}</H55>
                <Idiv>
                    <Fspan><i class="fab fa-facebook-f" aria-hidden="true"></i></Fspan>
                    <Tspan><i class="fab fa-twitter" aria-hidden="true"></i></Tspan>
                </Idiv>
            </Div2>
            </Container> 
        </Divv>
    )
}

const mapStateToprops = state =>{
    return{
        idea : state.WI.idea
    }
}

export default connect(mapStateToprops)(ImgDetails) ;
