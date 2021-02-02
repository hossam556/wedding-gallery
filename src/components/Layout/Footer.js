import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
display : flex ;
justify-content : space-between ;
position: relative;
width : 100% ;
background-color : black ;
color : white ;
font-family: lato,sans-serif;
font-size: 14px;
align-items:center;
` 
const Div1=styled.div`
padding-left : 15px;
padding-bottom:10px;

`

const Div2 = styled.div`
padding-top :40px;
font-size:10px;
padding-left:140px;`

const Ul =styled.ul`
list-style-type:none;
font-size:10px;
display:flex;
flex-direction:column;

padding-right:100px;
padding-top:20px;
align-items:flex-end;`

const Li =styled.li`
padding-bottom:5px;`

const A2 = styled.a`
    color: #337ab7;
    text-decoration: none;
    padding : 2px;
`
const A = styled.a`
    color: white;
    text-decoration: none;
    padding-right:7px;
`


const Footer=()=> {
    return (
        <StyledDiv>
            <Div1>
              <h2>Weds360</h2>
              <div>
                  <A href='https://www.facebook.com/Weds360/'><i class='fab fa-facebook-f' style={{fontSize:'15px'}}></i></A>
                  <A href='https://www.instagram.com/weds360/'><i class='fab fa-instagram' style={{fontSize:'15px'}}></i></A>
              </div>
            </Div1>
            <Div2>@Copy right <A2 href='http://plus360.xyz/'>Plus360</A2>All Rights Reserved</Div2>
            <div>
                <Ul>
                  <Li>Terms & Conditions</Li>
                  <li>Privacy Policy</li>
                </Ul>
            </div>
        </StyledDiv>
    )
}

export default Footer;
