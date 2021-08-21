import { SET_POSTS, SET_ERROR, SET_POST, DELETE_POST, UPDATE_POST} from "../actions/action.types";

const initialState = {
    posts : [],
    loading : true,
    error : false,
}
export default (state=initialState, action) => {
    switch ( action.type) {
        case SET_POSTS:
            return{
                ...state,
                posts : action.payload,
                loading : false
            }
        case SET_ERROR:
            return{
                ...state,
                loading : false,
                error : true
            }
        case SET_POST : 
            return{
                ...state,
                posts : state.posts.concat(action.payload)
                
            }
        case DELETE_POST:
            return{
                ...state,
                posts : state.posts.filter(post => post.id !== action.payload),
                
            }
        case UPDATE_POST:
            return{
                ...state,
                posts : state.posts.map((post) => post.id === action.id ? 
                    {...post, title:action.title,body : action.description} : post
                )
            }
        default:
            return state
    }
}