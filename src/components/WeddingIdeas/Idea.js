import React from 'react';
import styled from 'styled-components';
import {NavLink} from 'react-router-dom';

const Div = styled.div`
margin-right : 10px;
margin-bottom : 40px;
cursor:pointer;`

const H3 = styled.h3`
color: black ;
`


const Img = styled.img`
width : 260px ;
float: left;
height: 230px;
object-fit: cover;
 margin-bottom : 10px;
`

const Idea=(props)=> {
    return (
        <Div>
            <NavLink style={{textDecoration:'none'}} to='/photo' onClick={props.openImage}>
                <div> 
                    <Img src={props.image} alt={props.title}/>
                    <H3>{props.title}</H3>
                </div>
            </NavLink>
        </Div>
    )
}

export default Idea;
