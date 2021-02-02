import React ,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Category1 from '../components/Categories/Category1';
import Category2 from '../components/Categories/Category2';
import Fade from 'react-reveal/Fade';
import * as actions from '../store/actions/index';
import Spinner from '../components/UI/Spinner';




const Div = styled.div`
width : 84% ;
margin:auto;`

const Div1 = styled.div`
display : flex;
margin-top: 40px;
`
const Div2 = styled.div`
max-width : 1080px;
height: 150px;
margin : auto ;
margin-left : 40px;
margin-top:12px;
background-color:black ;
overflow: auto;
//position:absolute;
  ::-webkit-scrollbar{
    display: none;
};`

const Div3 = styled.div`
  //margin-top : 180px;
`

const Ul= styled.ul`
display : flex;
align-items : center ;
list-style-type : none;
padding-top:5px;
padding-bottom:5px;

`
const Ul2 = styled.ul`
display : flex ;
flex-wrap : wrap ;
list-style-type : none;`

const Button = styled.button`
display:flex;
justify-content:center;
align-items:center;
padding : 0px 100px ;
margin-right : 20px ;
margin-left : 40px ;
background-color : white ;
color : black ;
border : solid 2px black ;
font-size:17px;
white-space:nowrap;
letter-spacing:3px;
opacity:0.9;
cursor:pointer;
`

const Input = styled.input`
padding : 0px 152px ;
border : solid 2px black ;
color : black ;
text-align:center;
font-size:20px;
white-space:nowrap;
letter-spacing:3px;
::-webkit-input-placeholder {
    font-weight: 500;
    color:black;
}

`
const Pdiv = styled.div`
display : flex;
justify-content :center ;
margin : auto;
margin-top : 40px;
margin-bottom:70px;
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

const Span = styled.span`
`


const Categories=(props)=> {

    useEffect(() => {
        props.onFetchCategories()
   }, []);

    const [show ,setShow] = useState(false);

    const handleClick=()=> {
        setShow(!show );
      };

    
    let categories1  = <Spinner/>;
    let categories2  = <Spinner/>;

    if(props.categ){
         categories2 = props.categ.slice(0,9).map(category=>{
            return <li key={category._id}>
                <Category2
                  image={category.image} 
                  icon={category.icon}
                  title={category.title}
                  desc={category.description}
                  link={category.link}/>
            </li>
        });

        categories1 = props.categ.map(category=>{
            return <li key={category._id}>
                <Category1 
                  icon={category.icon}
                  title={category.title}/>
            </li>
        });
    
    }
  

  

    return (
        <Div>
            <Div1>
                
                <Button onClick={handleClick}>FIND CATEGORIES HERE<Span><i style={{fontSize:'40px'}} class="material-icons">keyboard_arrow_down</i></Span></Button>
                <Input placeholder='SEARCH'/>
            </Div1>
            <Fade left when={show}>
              {show && <Div2>
                 
                 <Ul>{categories1}</Ul>
               </Div2>}
             </Fade>

            <Div3 id='catg'>
                <Ul2>{categories2}</Ul2>
            </Div3>
            <Pdiv>
           <Ap className='disabled' href="/">←Previous</Ap>
           <Ap className='active' href="/">1</Ap>         
           <Ap href="/">2</Ap>
           <Ap href="/">3</Ap>
           <Ap href="/">4</Ap>
           <Ap href="/">Next→</Ap>
        </Pdiv>
        </Div>
    )
}

const mapStateToprops = state =>{
    return{
        categ : state.cat.categories
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onFetchCategories : () => dispatch(actions.fetchCategories()) ,
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(Categories);


