import React,{useEffect} from 'react';
import Idea from '../components/WeddingIdeas/Idea';
import {connect} from 'react-redux';
import * as actions from '../store/actions/index';
import Spinner from '../components/UI/Spinner';
import {Divv ,Div ,Container ,Div1,Div2,Ul,Bdiv ,
          Button1,Button2,Input ,A,Span,Pdiv ,Ap ,Li} from './Wstyle';





const WeddingIdeas =(props)=> {

    useEffect(() => {
         props.onFetchIdeas()
    }, []);



    let allIdeas = <Spinner/>;

    if(props.ideas){
        allIdeas =  props.ideas.map(idea=>{
            return <Li key={idea._id}>
                <Idea
                   image={idea.image}
                   title={idea.title}
                   openImage={()=>props.onOpenImage(idea)}/>
            </Li>
        });
    }
  

    return (
        <Divv>
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
        </Divv>
    )
}

const mapStateToprops = state =>{
    return{
        ideas : state.WI.ideas
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        onFetchIdeas : () => dispatch(actions.fetchIdeas()) ,
        onOpenImage : (idea)=> dispatch(actions.openImage(idea))
    }
}

export default connect(mapStateToprops,mapDispatchToProps)(WeddingIdeas) ;
