import React ,{useEffect , useState }from 'react';
import styled from 'styled-components';
import FixedNav from './FixedNav';
import Aux from '../../hoc/Auxilary';


const Div = styled.div`
position: relative;
width : 84% ;
margin : auto;
@media(max-width : 1125px){
    width : 90% ;
  };
`

const StyledDiv = styled.div`
   width : 100% ;
   display : flex;
   font-weight: 900;
    overflow: hidden;
   height : 160px;
   font-family: lato,sans-serif;
   font-size : 13px ;
  @media(max-width : 1125px){
    font-size : 10px ;
  };
    
   `  

   
const Div2 = styled.div`
   display : flex ;
   flex : 44% ;
   justify-content : space-between;
   align-items : center ;
   border-top : .1rem solid black ;
   border-bottom : .1rem solid black;
   padding-right : 20px;
   padding-left : 25px ;
   align-self: center;
   @media(max-width : 1125px){
    padding : 5px ;
    margin-left : 10px ;
    padding-left : 10px ;
  };`

const Div3 = styled.div`
    display : flex;
    flex :12% ;
    position: relative; 
    
    `
 const Img = styled.img`
    width : 108px ;
    max-width: 100% ;
    object-fit : contain ;
    position : absolute;
    bottom : 55px ;
    left : 7px ;
    
 `
const ItemsDiv = styled.div`
  width : 100% ;
  display : flex ;
  color : #024d4c;
  position: absolute;
  align-items : center;
  left : 20px ;
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
const Header = styled.header`
&.nav{
  opacity:0 ;
transition: all 0.7s;
transition-timing-function: ease-in;
};

&.nav_display{
   opacity:1 ;
};`

const Nav=()=> {

  const [show ,handleShow] = useState(false) ;

  useEffect(()=>{
      window.addEventListener('scroll',()=>{
          if(window.scrollY > 100){
              handleShow(true)
          }else handleShow(false) 
      });
      //return ()=>{
          //window.removeEventListener('scroll')
      //}
  },[])



       
     let fixednav = <FixedNav/>;

    return (
      <Aux>
         <Header className={`nav ${show && 'nav_display'}`}>{fixednav}</Header>

        <Div> 
          <ItemsDiv>
            <i class='fas fa-user-plus'></i>
            <AR><strong>العربية</strong></AR>
          </ItemsDiv>   
        <StyledDiv >
             <Div2> 
             <Idiv>
                <p>
                  <A href='/'>360 PLANNER</A>
                  </p>
                  <Ldiv >
                 <La href="/categories">CHECK LIST</La>
                 <La href="/categories">BUDGETER</La>
                 <La href="/categories">REGISTRY LIST</La>
                 <La href="/categories">GUEST LIST</La>
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
                 <La href="/categories">DESIGNERS</La>
                 <La href="/categories">BRIDAL BOUTIQUE</La>
                 <La href="/categories">RINGS</La>
                 <La href="/categories">MAKEUP ARTISTS</La>
                 <La className='last' href="/categories">MORE</La>
                </Ldiv>                 
              </Idiv>

              <Idiv>
                <p>
                  <A href='/'>HIM</A>
                  </p>
                  <Ldiv >
                 <La href="/categories">SUITS</La>
                 <La href="/categories"> HEALTH </La>
                 <La href="/categories"> MEN'S GROOMING </La>
                 <La href="/categories"> FITNESS </La>
                 <La className='last' href="/categories">MORE</La>
                </Ldiv>          
              </Idiv> 

              <Idiv>
                <p>
                  <A href='/'>THE WEDDING</A>
                  </p>
                  <Ldiv className='wedding'>
                 <La href="/categories">VENUES</La>
                 <La href="/categories">OUTDOOR WEEDING VENUES</La>
                 <La href="/">VIDEOGRAPHERS</La>
                 <La href="/">PHOTOGRAPHERS</La>
                 <La href="/">DJS</La>
                 <La className='last' href="/categories">MORE</La>
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
                 <La className='last' href="/categories">CREATE YOUR PROFILE</La>
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
                 <La href="/categories">TIPS & ETIQUETTE</La>
                 <La href="/">WEDDING OF THE WEEK</La>
                 <La className='last' href="/categories">MORE</La>
                </Ldiv>      
              </Idiv>   
            </Div2>

        </StyledDiv>
        </Div>
      </Aux>  
    )
}

export default Nav;
