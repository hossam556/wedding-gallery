import * as actionTypes from '../actions/actionTypes';

const initialState ={
    categories :null ,
    error : null ,

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
        default : return state ;    
    }
}

export default reducer;