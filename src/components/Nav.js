import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
   width : 80% ;
   display : flex;
   margin : auto ;
   font-weight: 900;
   height : 80px;
   font-family: lato,sans-serif;
   font-size : 13px ;
   `  

const Div1 = styled.div`
   display : flex ;
   flex : 43% ;
   justify-content : space-between;
   align-items : center ;
   border-top : .1rem solid black ;
   border-bottom : .1rem solid black;
   padding-left : 20px ;
   padding-right : 25px ;
   align-self: center ;`
   
const Div2 = styled.div`
   display : flex ;
   flex : 43% ;
   justify-content : space-between;
   align-items : center ;
   border-top : .1rem solid black ;
   border-bottom : .1rem solid black;
   padding-right : 20px;
   padding-left : 25px ;
   align-self: center;`

const Div3 = styled.div`
    display : flex;
    flex :14% ;
    position: relative; 
    
    `
 const Img = styled.img`
    width : 108px ;
    object-fit : contain ;
    position : absolute;
    bottom : 20px ;
    left : 15px ;
    
 `
const ItemsDiv = styled.div`
  width : 100% ;
  display : flex ;
` 
const I = styled.i`
//position: relative;
 
`



const Nav=()=> {
    return (
        <div> 
          <ItemsDiv>
            <i class='fas fa-user-plus'></i>
            <p>|العربية|</p>
          </ItemsDiv>   
        <StyledDiv>
             <Div1> 
               <p>360 PLANNER</p>
               <p>HER</p>
               <p>HIM</p>
               <p>THE WEDDING</p>
            </Div1>
            
            <Div3>
             <Img src= 'https://weds360.com/assets/logo-230bd37b1825e38607ce1c61b6d90db4b882249ec903fba33728119249a9036f.png' alt='360Weds'/>
            </Div3>
            <Div2>
               <p>VENDORS</p>
               <p>GALLERY</p>
               <p>IDEAS & MORE</p>
            </Div2>
        </StyledDiv>
        </div>
    )
}

export default Nav;
