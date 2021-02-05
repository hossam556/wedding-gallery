import React from 'react';
import DrawerItem from './DrawerItem';
import styled from 'styled-components';

const Div = styled.div`
position : absolute ;
display : flex ;
flex-wrap : wrap ;
width : 640px ;
height:610px ;
background-color : white;
`
const Div1 = styled.div`
display : flex ;
flex-direction : column ;
width :50%; `

const Div2 = styled.div`
display : flex ;
flex-direction : column ;
width :50%; `

const Cdiv = styled.div`
display : flex ;
flex-direction : row ;
width : 99% ;
height: 100%;
margin-right : 5px;
margin-bottom:4px ;`


const Idiv = styled.div`
width : 99% ;
height: 100%;
background-color : #282828;
margin-right : 10px;
margin-bottom:4px ;`

const Sdiv = styled.div`
background-color : #282828;
width : 50% ;
margin-right : 2px;
`

const SideDrawer=()=> {
    return (
        <Div>
           <Div1>
             <Idiv><DrawerItem
             icon ='https://weds360.com/assets/planningtools-e27783fe8e0ed7bf48b9e63a977b6357fc8a64064828a4c5a005470263d9d7dc.png'
             title='360 planner'/></Idiv>
             <Idiv><DrawerItem
             icon ='https://weds360.com/assets/forhim-27ec12d8032c54ce06f2e1c5c5d0a07745cc45b5f13584c693bbfc1b5bb02889.png'
             title='Him'/></Idiv>
             <Cdiv>
               <Sdiv><DrawerItem
                 icon ='https://weds360.com/assets/checklist-5d1de44899b7031df27ea413c3b12e912f5bbf6a917ee47f0898f035de79c5d9.png'
               title='Check list'
               small={true}/></Sdiv>
               <Sdiv><DrawerItem
               icon ='https://weds360.com/assets/guestlist-6b09f4690b2e2782f1d453654e3e4660043e6ed0068ca419b2a423022ad9628b.png'
              title='Guest list'
              small={true}/></Sdiv>
             </Cdiv>
             <Idiv><DrawerItem
              icon ='https://weds360.com/assets/icons/tools-vision-white-28d34c7bf940dca78a1217508870e3d1c64fed89add64751e7180c9d78b868e5.png'
              title='Gallery'/></Idiv>
           </Div1>
           <Div2>
            <Idiv><DrawerItem
              icon ='https://weds360.com/assets/forthewedding-b5002312f0a4f29574cb0cfcd4dc3809e9074cb8d717103e77dbf670952a4531.png'
              title='For The Wedding'/></Idiv>
            <Idiv><DrawerItem
             icon ='https://weds360.com/assets/forher-942ae5c8439a2590a20e51cd7c246077be3059f66f636a7af7cc6bfc1dbd454b.png'
             title='Her'/></Idiv>
            <Cdiv>
              <Sdiv><DrawerItem
              icon ='https://weds360.com/assets/registry-b306895e7cd0e760b67ab55b883e8dfdcf7cfc284e9bdf8b6b560a325965411b.png'
             title='Registry list'
             small={true}/></Sdiv>
              <Sdiv><DrawerItem
             icon ='https://weds360.com/assets/budgeter-fd97545a9478c304d4427ec1e7b8583f028d56a642111e124a40a44442012191.png'
             title='Budgeter'
             small={true}/></Sdiv>
            </Cdiv>
            <Idiv><DrawerItem
             icon ='https://weds360.com/assets/white-articles-6582f1a71029081a3d38b9928bd4d66f7b2e3604c06867118dc8e024a785c251.png'
             title='Ideas & More'/></Idiv>
           </Div2>
        </Div>
    )
}

export default SideDrawer
