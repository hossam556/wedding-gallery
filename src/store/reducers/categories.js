import * as actionTypes from '../actions/actionTypes';

const initialState ={
    categories :null ,
    error : null ,
    open : false ,
}

const reducer= (state = initialState , action)=>{
    switch(action.type){
        case actionTypes.FETCH_CATEGORIES_SUCCESS :
            return {
                ...state ,
                categories : action.categories
            };
        case actionTypes.FETCH_CATEGORIES_FAIL : 
            return {
                ...state ,
                error : action.error ,
            };
        case actionTypes.OPEN_DRAWER :
            return{
                ...state ,
                open : !state.open
            }    
        default : return state ;    
    }
}

export default reducer;