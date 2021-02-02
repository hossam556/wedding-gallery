import React from 'react';
import Nav from '../components/Layout/Nav';
import Footer from '../components/Layout/Footer';
import Guides from '../components/Layout/Guides';
import styled from 'styled-components';

 const Container = styled.div`
    display: grid;
    grid-template-areas: 'header' 
                        'main'
                        'guide' 
                        'footer';
    //grid-template-rows: 140px 185vh 100vh 30px;
    grid-template-rows: 120px auto auto 50px;

    height: 100vh;`

 const Main = styled.main`
      grid-area: 'main';`
   
 const Header = styled.header`
    grid-area: 'header';` 

const Foot2 = styled.footer`
    grid-area: 'guide';` 

const Foot1 = styled.footer`
    grid-area: 'footer';`     

const Layout=(props)=> {
    return (
        <Container>
            <Header><Nav/></Header>
             <Main>{props.children}</Main>
             <Foot2><Guides/></Foot2>
            <Foot1><Footer/></Foot1>
        </Container>
    )
}

export default Layout;
