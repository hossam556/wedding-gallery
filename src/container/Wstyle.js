import styled from 'styled-components';

export const Divv = styled.div`
width : 82% ;
margin : auto ;
@media(max-width : 1125px){
    width : 84% ;
  };
  @media(max-width : 575px){
    width : 98% ;
  };`

export const Div = styled.div`
display : flex ;
align-items: center ;
margin : auto ;

  @media(max-width : 769px){
     padding-left : 20px ;
  };
  @media(max-width : 575px){
    font-size:18px ;
    padding-left : 15px ;

  };
`

export const Container = styled.div`
display : flex ;
//width : 82% ;
margin : auto ;
//@media(max-width : 1125px){
   // width : 90% ;
 // };
@media(max-width : 769px){
     flex-direction : column ;
     //width : 96% ;
  };`

export const Div1 = styled.div`
flex : 22% ;
padding-top : 40px;
padding-left : 5px ;
@media(max-width : 769px){
    width : 90% ;
    margin : auto ;
    padding-top : 20px;
    padding-left : 25px ;
  };
  @media(max-width : 575px){
    padding-top : 5px;
    padding-left : 20px ;

  };
`

export const Div2 = styled.div`
flex : 78% ;
@media(max-width : 769px){
    width : 100% ;
  };
`
export const Ul = styled.ul`
width : 100% ;
display : flex ;
flex-wrap : wrap ;
list-style-type : none;
`


export const Bdiv = styled.div`
padding-bottom : 30px;
`

export const Input = styled.input`
width : 100% ;
padding : 5px ;
border: 0.1rem  solid black ;
@media(max-width : 575px){
  padding : 10px ;
  font-size : 18px;
  };
`

export const Button1 = styled.button`
padding : 1px 10px ;
margin-right : 4px ;
background-color : white ;
color : black ;
border : solid 1px black ;
@media(max-width : 575px){
  padding : 5px 20px ;
  font-size: 16px ;
  };
`

export const Button2 = styled.button`
padding : 1px 10px ;
background-color : black ;
color : white ;
border : solid 1px black ;
@media(max-width : 575px){
  padding : 5px 20px ;
  font-size: 16px ;

  };
`

export const A = styled.a`
text-decoration : none ;
color :#008174;
padding-right : 7px;
transition: all ease 0.2s;
:hover{
 color : black;
};`

export const Span = styled.span`
font-size :30px ;
color: #333;
padding-right : 7px;`

export const Pdiv = styled.div`
display : flex;
justify-content :center ;
margin : auto;
margin-top : 30px;
`

export const Ap = styled.a`
color: black;
  float: left;
  padding: 7px 12px;
  text-decoration: none;
  transition: background-color .3s;
  color :#024d4c;
  border: 1px solid #ddd;
  :hover:not(.disabled , .active) {background-color: #ddd;};
  &.active {
  background-color:#024d4c ;
  color: white;
  cursor :context-menu;
};
&.disabled{
    cursor : not-allowed ;
  }
`
export const Li = styled.li`
width : 31.5% ;
@media(max-width : 1125px){
    padding-left : 10px ;
  };
@media(max-width : 990px){
    width : 45% ;
  };
  
`