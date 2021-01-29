import React , {useState} from 'react';
import styled from 'styled-components';
import * as data from '../guidData';
import Guide from './Guide';

const Container = styled.div`
   width : 81% ;
   margin : auto;`

const StyledDiv = styled.div`
   display : flex ;
   flex-wrap : wrap;`
   
const H2 = styled.h2`
   margin-bottom : 70px ;`   

const Guides=()=> {
    const [guidesData , setGuides]= useState(data.guides) ;

    let allGuides = guidesData.map(item => {
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
