import React ,{useState ,useEffect}from 'react';
import styled from 'styled-components';
import Chat from './Chat';
import Chat2 from './Chat2';

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
const Foot = styled.footer`
position : fixed ;
 `
const Span = styled.span`
position : fixed ;
bottom:90px;
padding : 12px ;
right: 33px;
color : #337ab7 ;
background-color: #fff;
box-shadow: 0 0 2px 0;
display : block;
cursor : pointer ;
border-radius: 50%;
opacity:0 ;
transition: all 0.7s;
transition-timing-function: ease-in;
&.icon_display{
   opacity:1 ;
};
`

const Footer=()=> {
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

    const scrollUp =()=>{
        let y = -10 
        setInterval(function() {
            window.scrollBy(0,y)
            if(window.scrollY === 0){
                y=0
            }
        }, 1);
    }

    return (
        <StyledDiv>
            
            <Foot><Chat/></Foot>
            <Span onClick={scrollUp} className={` ${show && 'icon_display'}`}><i class="material-icons" style={{fontSize:"26px"}}>keyboard_arrow_up</i></Span>
            
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
