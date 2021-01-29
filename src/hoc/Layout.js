import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Guides from '../components/Guides';
import styled from 'styled-components';

 const Container = styled.div`
    display: grid;
    grid-template-areas: 'header' 
                        'main'
                        'guide' 
                        'footer';
    grid-template-rows: 140px 200vh 90vh 30px;
    height: 100%;`

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
