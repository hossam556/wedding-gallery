import React from 'react';
import {connect} from 'react-redux';
import Nav from '../components/Layout/Nav';
import Footer from '../components/Layout/Footer';
import Guides from '../components/Layout/Guides';
import MobileNav from '../components/Layout/MobileNav';
import SideDrawer from '../components/Layout/SideDrawer';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';



 const Container = styled.div`
    display: grid;
    width : 100% ;
    grid-template-areas: 'header'
                          
                        'main'
                        'guide' 
                        'footer';
   grid-template-rows: 120px auto auto 50px;

    height: 100vh;
    @media(max-width : 769px){
        grid-template-rows: 60px auto auto auto 50px;
  };
  @media(max-width : 575px){
    grid-template-rows: 80px auto auto auto 50px;

  };
`

 const Main = styled.main`
      grid-area: 'main';`

const Main2 = styled.main`
grid-area: 'main2';
width : 100% ;
@media(min-width : 769px){
    display : none ; 
  };`
  
   
 const Header = styled.header`
    grid-area: 'header';
    @media(max-width : 769px){
    display : none ; 
  };` 

const Header2 = styled.header`
grid-area: 'header';
@media(min-width : 769px){
display : none ; 
};` 


const Foot2 = styled.footer`
    grid-area: 'guide';` 

const Foot1 = styled.footer`
    grid-area: 'footer';`  



const Layout=(props)=> {

    return (
        <Container>
            <Header2><MobileNav/></Header2>
            <Header><Nav/></Header>
            <Main2>><Fade left when={props.open}>{props.open &&<SideDrawer/>}</Fade></Main2>
             <Main>{props.children}</Main>
             <Foot2><Guides/></Foot2>
            <Foot1><Footer/></Foot1>
        </Container>
    )
}

const mapStateToprops = state =>{
  return{
      open : state.cat.open
  }
}

export default connect(mapStateToprops)(Layout);
