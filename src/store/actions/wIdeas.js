import * as actionTypes from './actionTypes';
import axios from 'axios';

export const fetchIdeasSuccess = (ideas)=> {
    return {
        type : actionTypes.FETCH_IDEAS_SUCCESS ,
        ideas : ideas ,
    }
};

export const fetchIdeasFail = (error)=> {
    return {
        type : actionTypes.FETCH_IDEAS_FAIL,
        error : error
    }
};



export const fetchIdeas =()=>{
   return dispatch=>{
         
    axios.get('https://wedding---cart-default-rtdb.firebaseio.com/ideas.json').then(response=>{
            dispatch(fetchIdeasSuccess(response.data))
    }).catch(error =>{
        dispatch(fetchIdeasFail(error))
    })

    }
}

export const openImage =(idea)=>{
    return {
          type :actionTypes.OPEN_IMAGE ,
          idea : idea 
    }
};