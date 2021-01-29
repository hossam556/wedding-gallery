import React from 'react';
import Aux from '../hoc/Auxilary';
import styled from 'styled-components';

const Div = styled.div`
display : flex ;
align-items: center ;
padding-bottom : 20px;
padding-left:120px ;`

const Container = styled.div`
display : flex ;
width : 80% ;
margin : auto ;`

const Div1 = styled.div`
flex : 25% ;
margin-right : 30px;`

const Div2 = styled.div`
flex : 75% ;
display : flex ;
flex-wrap : wrap ;`

const Bdiv = styled.div`
padding-bottom : 30px;
`

const Input = styled.input`
width : 100% ;
padding : 5px ;
border: 0.1rem  solid black ;
`

const Button1 = styled.button`
padding : 1px 10px ;
margin-right : 4px ;
background-color : white ;
color : black ;
border : solid 1px black ;
`

const Button2 = styled.button`
padding : 1px 10px ;
background-color : black ;
color : white ;
border : solid 1px black ;

`

const WeddingIdeas =()=> {
    return (
        <Aux>
        <Div>
            <h3>GALLERY</h3>
            <i></i>
            <h3>WEDDING IDEAS</h3>
        </Div>    
        <Container>
            <Div1>
                <Bdiv>
                    <Button1>Clear</Button1>
                    <Button2>Apply</Button2>
                </Bdiv>
                <Input placeholder='Search'/>
            </Div1>
            <Div2>
                IDEAS
            </Div2>
        </Container>
        </Aux>
    )
}

export default WeddingIdeas;
