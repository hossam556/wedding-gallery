import React ,{useState,useEffect} from 'react';
import styled from 'styled-components';
import {connect} from 'react-redux';
import Category1 from '../components/Categories/Category1';
import Category2 from '../components/Categories/Category2';
import * as actions from '../store/actions/index';
import Spinner from '../components/UI/Spinner';



const Div = styled.div`
width : 84% ;
margin:auto;
@media(max-width : 1125px){
    width : 94% ;
  };
  @media(max-width : 550px){
    width : 100% ;
  };`

const Div1 = styled.div`
display : flex;
width : 100% ;
margin-top: 40px;
@media(max-width : 550px){
  margin-top: 2px;
  };
`
const Div2 = styled.div`
transition-timing-function: linear ;
transition: height 2s ease-in-out;
width : 100% ;
margin : auto ;
margin-left : 40px;
margin-top:12px;
background-color:black ;
overflow: auto;
  ::-webkit-scrollbar{
    display: none;
};
&.catg{
  width :0px ;
  height: 0px;
 
};
&.catg_display{
  width : 1080px;
  max-width : 100% ;
  height: 150px;
   @media(max-width : 550px){
    width : 500px;

  };
  @media(max-width : 360px){
    width : 320px;

  };
  @media(max-width : 330px){
    width : 280px;

  };


};
`

const Div3 = styled.div`
  width : 100% ;
`

const Ul= styled.ul`
display : flex;
align-items : center ;
list-style-type : none;
padding-top:5px;
padding-bottom:5px;
width : 1005 ;
`
const Ul2 = styled.ul`
display : flex ;
flex-wrap : wrap ;
list-style-type : none;`

const Button = styled.button`
width : 47% ;
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
@media(max-width : 1125px){
  padding : 0px 80px ;

  };
  @media(max-width : 990px){
  padding : 0px 50px ;

  };
  @media(max-width : 550px){
    padding : 4px 7px; ;
    font-size:8px;
    width : 54% ;
    letter-spacing:1px;
    margin-left : 30px ;
    margin-right : 10px ;

  };
  @media(max-width : 365px){
    width:48%;
  };
  @media(max-width : 365px){
    width:45%;
    font-size:7px;

  };
`

const Input = styled.input`
width : 47% ;
padding : 0px 120px ;
border : solid 2px black ;
color : black ;
text-align:center;
font-size:23px;
white-space:nowrap;
letter-spacing:3px;
::-webkit-input-placeholder {
    font-weight: 500;
    color:black;
}
@media(max-width : 1125px){
  padding : 0px 120px ;

  };
  @media(max-width : 990px){
  padding : 0px 70px ;

  };
  @media(max-width : 550px){
    padding : 4px 17px  ;
    font-size:8px;
    width : 44% ;
    letter-spacing:1px;

  };
  @media(max-width : 365px){
    width : 48% ;
  };
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
const Li = styled.li`
width : 33% ;
@media(max-width : 990px){
    width : 48% ;
  };
  @media(max-width : 550px){
    width : 98% ;
  };
  @media(max-width : 365px){
    width:100%;
  };
`
const Li2 = styled.li`
width : 10% ;
@media(max-width : 990px){
    width : 13% ;
  };
  @media(max-width : 550px){
    width : 25% ;
  };
  @media(max-width : 365px){
    width:33%;
  };
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
            return <Li key={category._id}>
                <Category2
                  image={category.image} 
                  icon={category.icon}
                  title={category.title}
                  desc={category.description}
                  link={category.link}/>
            </Li>
        });

        categories1 = props.categ.map(category=>{
            return <Li2 key={category._id}>
                <Category1 
                  icon={category.icon}
                  title={category.title}/>
            </Li2>
        });
    
    }
  

  

    return (
        <Div>
            <Div1>
                
                <Button onClick={handleClick}>FIND CATEGORIES HERE<Span><i style={{fontSize:'30px'}} class="material-icons">keyboard_arrow_down</i></Span></Button>
                <Input placeholder='SEARCH'/>
            </Div1>
            
               <Div2 className={`catg ${show && 'catg_display'}`}>
                 
                 <Ul>
                   {categories1}
                </Ul>
               </Div2>
             

            <Div3>
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
