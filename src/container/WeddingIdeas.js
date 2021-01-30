import React,{useEffect} from 'react';
import Aux from '../hoc/Auxilary';
import styled from 'styled-components';
import Idea from '../components/WeddingIdeas/Idea';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import Spinner from '../components/UI/Spinner';

const Div = styled.div`
display : flex ;
align-items: center ;
padding-left:115px ;
`

const Container = styled.div`
display : flex ;
width : 84% ;
margin : auto ;`

const Div1 = styled.div`
flex : 22% ;
padding-top : 40px;
padding-left : 15px;`

const Div2 = styled.div`
flex : 78% ;
`
const Ul = styled.ul`
display : flex ;
flex-wrap : wrap ;
list-style-type : none;`


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

const A = styled.a`
text-decoration : none ;
color :#008174;
padding-right : 7px;
transition: all ease 0.2s;
:hover{
 color : black;
};`

const Span = styled.span`
font-size :30px ;
color: #333;
padding-right : 7px;`

const Pdiv = styled.div`
display : flex;
justify-content :center ;
margin : auto;
margin-top : 30px;
`

const Ap = styled.a`
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



const WeddingIdeas =(props)=> {

    useEffect(() => {
         props.onFetchIdeas()
    }, []);



    let allIdeas = <Spinner/>;

    if(props.ideas){
        allIdeas =  props.ideas.map(idea=>{
            return <li key={idea._id}>
                <Idea
                   image={idea.image}
                   title={idea.title}
                   openImage={()=>props.onOpenImage(idea)}/>
            </li>
        });
    }
  

    return (
        <Aux>
        <Div>
            <h3><A href='/'>GALLERY</A></h3>
            <Span><i class="fa fa-angle-right " aria-hidden="true"></i></Span>
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
                <Ul>
                {allIdeas}
                </Ul>
            </Div2>
        </Container>
        <Pdiv>
           <Ap className='disabled' href="/">←Previous</Ap>
           <Ap className='active' href="/">1</Ap>         
           <Ap href="/">2</Ap>
           <Ap href="/">3</Ap>
           <Ap href="/">4</Ap>
           <Ap href="/">5</Ap>
           <Ap href="/">6</Ap>
           <Ap href="/">7</Ap>
           <Ap href="/">8</Ap>
           <Ap href="/">9</Ap>
           <Ap className='disabled' href="/">...</Ap>
           <Ap href="/">43</Ap>
           <Ap href="/">44</Ap>
           <Ap href="/">Next→</Ap>
        </Pdiv>
        </Aux>
    )
}

const mapStateToprops = state =>{
    return{
        ideas : state.ideas
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onFetchIdeas : () => dispatch(actions.fetchIdeas()) ,
        onOpenImage : (idea)=> dispatch(actions.openImage(idea))
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(WeddingIdeas) ;
