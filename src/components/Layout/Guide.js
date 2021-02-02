import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width : 350px ;
  display : flex ;
  justify-content : center;
  align-items : center ;
  font-size : 12px;
  letter-spacing: .5px;
  margin-bottom : 50px;
  margin-right : 8px;`

const Img = styled.img`
  width : 60px ;
  object-fit : contain ;`
  
const Div1 = styled.div`
    width : 220px ;
    margin-left : 20px ;`

const Span = styled.span`
    line-height: 1.6;
    font-weight: 100;
`
const A = styled.a`
text-decoration:none;
color:#337ab7;`

const Guide=(props)=> {
    return (
        <Container>
            <div>
                <Img src= {props.icon} alt='icon' />
            </div>
            <Div1>
                <h2>{props.title}</h2>
                <Span>{props.text}</Span><br/>
                <A href='https://weds360.com/en/build_your_website' >{props.link}</A>
            </Div1>
        </Container>
    )
}

export default Guide;
