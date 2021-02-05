import React from 'react';
import DrawerToggle from './DrawerToggle';
import styled from 'styled-components';

const Div = styled.div`
display : flex ; 
width : 100%;
justify-content : space-between;
align-items:center ;
padding : 10px ;
`

const ItemsDiv = styled.div`
  display : flex ;
  color : #024d4c;
  align-items : center;
  margin-left : 20px ;
` 
const AR = styled.a`
padding-left: 5px;
padding-right: 5px;
margin-left : 10px ;
border-right: 1px solid #000;
font-size: 15px;
border-left: 1px solid #000;
@media(max-width : 575px){
   font-size : 19px ;
  };
`

const Img = styled.img`
    width : 55px ;
    object-fit : contain ;
    max-width : 100% ;
    @media(max-width : 575px){
    width : 65px ;
    padding-right : 15px;
  };
 `

 const Tdiv = styled.div`
 margin-right : 20px ;
 @media(max-width : 575px){
  margin-right : 20px ;
  };`

const Idiv = styled.div`
 margin-top : 10px ;
 @media(max-width : 575px){
  margin-top : 5px ;
  };`

const MobileNav=()=> {
    return (
        <Div>
          <ItemsDiv>
            <i class='fas fa-user-plus' style={{fontSize:'20px'}}></i>
            <AR><strong>العربية</strong></AR>
          </ItemsDiv> 
          <Idiv>
             <Img src= 'https://weds360.com/assets/logo-230bd37b1825e38607ce1c61b6d90db4b882249ec903fba33728119249a9036f.png' alt='360Weds'/>
          </Idiv> 
          <Tdiv>
            <DrawerToggle/>
          </Tdiv> 
        </Div>
    )
}

export default MobileNav;
