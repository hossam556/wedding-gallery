import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
display : flex ;
justify-content : space-between ;
left : 0 ;
bottom : 0 ;
width : 100% ;
background-color : black ;
color : white ;
font-family: lato,sans-serif;
font-size: 14px;
` 

const A = styled.a`
    color: #337ab7;
    text-decoration: none;
`



const Footer=()=> {
    return (
        <StyledDiv>
            <div>
              <h1>Weds360</h1>
              <div>
                  <a href='https://www.facebook.com/Weds360/'><i class='fab fa-facebook-f' ></i></a>
                  <a href='https://www.instagram.com/weds360/'><i class='fab fa-instagram'></i></a>
              </div>
            </div>
            <div>@Copy right <A href='http://plus360.xyz/'>Plus360</A>All Rights Reserved</div>
            <div>
                <ul>
                  <li>Terms & Conditions</li>
                  <li>Privacy Policy</li>
                </ul>
            </div>
        </StyledDiv>
    )
}

export default Footer;
