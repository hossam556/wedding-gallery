import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchCategoriesSuccess = (categories)=> {
    return {
        type : actionTypes.FETCH_CATEGORIES_SUCCESS ,
        categories : categories ,
    }
};

export const fetchCategoriesFail = (error)=> {
    return {
        type : actionTypes.FETCH_CATEGORIES_FAIL,
        error : error
    }
};

export const fetchCategories =()=>{
    return dispatch=>{
          
     axios.get('https://wedding---cart-default-rtdb.firebaseio.com/categories.json').then(response=>{
             dispatch(fetchCategoriesSuccess(response.data))
     }).catch(error =>{
         dispatch(fetchCategoriesFail(error))
     })
 
     }
 }

export const openDrawer = ()=>{
    return{
    type : actionTypes.OPEN_DRAWER
    }
};