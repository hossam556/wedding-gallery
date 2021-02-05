import React from 'react';
import {connect} from 'react-redux';
import styled from 'styled-components';
import * as actions from '../../store/actions/index';

const Div = styled.div`
    width: 35px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5px 5px;
    box-sizing: border-box;
    cursor: pointer;
    @media(max-width : 575px){
    width : 42px ;
  };`

const Idiv = styled.div`
  width: 90%;
    height: 3px;
    margin-top : 4px ;
    background-color: black;
    @media(max-width : 575px){
        margin-top : 6px ;

  };
`    

const DrawerToggle =(props)=> (
    <Div onClick={props.onOpenDrawer}>
        <Idiv></Idiv>
        <Idiv></Idiv>
        <Idiv></Idiv>
    </Div>
)


const mapDispatchToProps = dispatch =>{
  return{
      onOpenDrawer : () => dispatch(actions.openDrawer()) ,
  }
}

export default connect(null ,mapDispatchToProps)(DrawerToggle);