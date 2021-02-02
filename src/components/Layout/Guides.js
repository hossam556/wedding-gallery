import React  from 'react';
import styled from 'styled-components';
import * as data from '../../guidData';
import Guide from './Guide';

const Container = styled.div`
   width : 84% ;
   margin : auto;`

const StyledDiv = styled.div`
   display : flex ;
   flex-wrap : wrap;
   padding-left:30px;`
   
const H2 = styled.h2`
   padding-bottom : 70px ;
   padding-top:90px;
   line-height: 1.25;
   text-align: center;`   

const Guides=()=> {

    let allGuides = data.guides.map(item => {
        return <Guide
                 key={item.title}
                 title={item.title}
                 text={item.text}
                 icon={item.icon}
                 link={item.link}/>
    });

    return (
        <Container>
            <H2>WEDDING PLANNING IS A PIECE OF CAKE WITH WEDS360. WE KNOW WHAT MATTERS MOST AND YOU CAN COUNT ON US EVERY STEP OF THE WAY.</H2>
            <StyledDiv>
                {allGuides}
            </StyledDiv>
        </Container>
    )
}

export default Guides;
