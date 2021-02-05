import * as actionTypes from '../actions/actionTypes';

const initialState ={
    ideas :null ,
    error : null ,
    idea : JSON.parse(localStorage.getItem('idea')) ?
    JSON.parse(localStorage.getItem('idea')) : null ,
}

const reducer= (state = initialState , action)=>{
    switch(action.type){
        case actionTypes.FETCH_IDEAS_SUCCESS :
            return {
                ...state ,
                ideas : action.ideas
            };
        case actionTypes.FETCH_IDEAS_FAIL : 
            return {
                ...state ,
                error : action.error ,
            };
        case actionTypes.OPEN_IMAGE :
            localStorage.setItem('idea',JSON.stringify(action.idea))
            return {
                ...state ,
                idea : action.idea
            }      
        default : return state ;    
    }
}

export default reducer;