import React from 'react';
import {connect} from 'react-redux';
import Aux from '../hoc/Auxilary';
import styled from 'styled-components';

const Container = styled.div`
display : flex ;
width : 84% ;
margin : auto ;
margin-bottom:80px;`

const Div1 = styled.div`
flex : 65% ;
padding-top : 10px;
padding-left : 15px;`

const Div2 = styled.div`
flex : 35% ;
`

const Div = styled.div`
display : flex ;
align-items: center ;
padding-left:120px ;
`
const Img = styled.img`
width : 700px ;
float: left;
height: 550px;
object-fit: cover;
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
    font-weight: 500;`

const H55 = styled.h5`
font-size: 23.6px;
color: #337ab7;`

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


const ImgDetails=(props)=> {
    return (
        <Aux>
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
                <div>
                    <Fspan><i class="fab fa-facebook-f" aria-hidden="true"></i></Fspan>
                    <Tspan><i class="fab fa-twitter" aria-hidden="true"></i></Tspan>
                </div>
            </Div2>
            </Container> 
        </Aux>
    )
}

const mapStateToprops = state =>{
    return{
        idea : state.WI.idea
    }
}

export default connect(mapStateToprops)(ImgDetails) ;
