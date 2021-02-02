import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
   width : 82% ;
   display : flex;
   margin : auto ;
   font-weight: 900;
   height : 160px;
   //height: 80px;
   font-family: lato,sans-serif;
   font-size : 13px ;
    ;
   `  
const Div = styled.div`
position: relative;`

   
const Div2 = styled.div`
   display : flex ;
   flex : 44% ;
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
    bottom : 55px ;
    left : 15px ;
    
 `
const ItemsDiv = styled.div`
  width : 100% ;
  display : flex ;
  color : #024d4c;
  position: absolute;
  align-items : center;
  left : 145px ;
  top : 30px ;
` 
const AR = styled.a`
padding-left: 5px;
padding-right: 5px;
margin-left : 10px ;
border-right: 1px solid #000;
border-left: 1px solid #000;`

const Ldiv = styled.div`
position: absolute;
  background-color: white;
  width: 100px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
  margin-top : 3px;
  margin-right:10px;
  display :none ;
  &.wedding{
     width : 140px;
  };
  `

const La = styled.a`
  float: none;
  color: black;
  padding: 10px 14px;
  text-decoration: none;
  display: block;
  text-align: center;
  border-bottom : 1px solid #000;
  &.last{
       border-bottom:none;
  };
`

const Idiv = styled.div`
float: left;
overflow: hidden;
:hover ${Ldiv}{
   display : block;
};
`
const A = styled.a`
color : black;
text-decoration: none;

`

const Nav=()=> {
    return (
        <Div> 
          <ItemsDiv>
            <i class='fas fa-user-plus'></i>
            <AR><strong>العربية</strong></AR>
          </ItemsDiv>   
        <StyledDiv>
             <Div2> 
             <Idiv>
                <p>
                  <A href='/'>360 PLANNER</A>
                  </p>
                  <Ldiv >
                 <La href="/">CHECK LIST</La>
                 <La href="/">BUDGETER</La>
                 <La href="/">REGISTRY LIST</La>
                 <La href="/">GUEST LIST</La>
                 <La href="/">WEDDING WEBSITE</La>
                 <La href="/">COUPLE WEBSITE</La>
                 <La className='last' href="/">MORE</La>
                </Ldiv> 
                 
              </Idiv> 
              <Idiv>
                <p>
                  <A href='/'>HER</A>
                  </p>
                  <Ldiv >
                 <La href="/">DESIGNERS</La>
                 <La href="/">BRIDAL BOUTIQUE</La>
                 <La href="/">RINGS</La>
                 <La href="/">MAKEUP ARTISTS</La>
                 <La className='last' href="/">MORE</La>
                </Ldiv> 
                 
              </Idiv> 
              <Idiv>
                <p>
                  <A href='/'>HIM</A>
                  </p>
                  <Ldiv >
                 <La href="/">SUITS</La>
                 <La href="/"> HEALTH </La>
                 <La href="/"> MEN'S GROOMING </La>
                 <La href="/"> FITNESS </La>
                 <La className='last' href="/">MORE</La>
                </Ldiv> 
                 
              </Idiv> 
              <Idiv>
                <p>
                  <A href='/'>THE WEDDING</A>
                  </p>
                  <Ldiv className='wedding'>
                 <La href="/">VENUES</La>
                 <La href="/">OUTDOOR WEEDING VENUES</La>
                 <La href="/">VIDEOGRAPHERS</La>
                 <La href="/">PHOTOGRAPHERS</La>
                 <La href="/">DJS</La>
                 <La className='last' href="/">MORE</La>
                </Ldiv> 
                 
              </Idiv> 
            </Div2>
            
            <Div3>
             <Img src= 'https://weds360.com/assets/logo-230bd37b1825e38607ce1c61b6d90db4b882249ec903fba33728119249a9036f.png' alt='360Weds'/>
            </Div3>
            <Div2>
               
            <Idiv>
                <p>
                  <A href='/'>VENDORS</A>
                  </p>
                  <Ldiv >
                 <La className='last' href="/">CREATE YOUR PROFILE</La>
                </Ldiv> 
                 
              </Idiv> 

               <Idiv>
                <p>
                  <A href='/'>GALLERY</A>
                  </p>
                  <Ldiv >
                 <La href="/">WEDDING IDEAS</La>
                 <La className='last' href="/categories">MORE</La>
                </Ldiv> 
                 
              </Idiv> 
              <Idiv>
                <p>
                  <A href='/'>IDEAS & MORE</A>
                  </p>
                  <Ldiv >
                 <La href="/">TIPS & ETIQUETTE</La>
                 <La href="/">WEDDING OF THE WEEK</La>
                 <La className='last' href="/">MORE</La>
                </Ldiv> 
                 
              </Idiv> 
               
            </Div2>
        </StyledDiv>
        </Div>
    )
}

export default Nav;
