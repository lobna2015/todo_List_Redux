

const initState = {input:[],
   filter:'all' }


const reducer = (state=initState, action) => { 
   
switch (action.type) {
    case 'ADD_TASK':
        return {...state, input : [...state.input, action.payload] }
     
        case 'DONE':
            return {...state, input :state.input.map(el => el.id === action.payload ?  {...el,isDone:!el.isDone} : el ) }    
         
            case 'DELETE':
                return {...state, input :  state.input.filter(el=>el.id !== action.payload) }
             
                case 'FILTER':
                    return {...state, filter : action.payload}

                    case 'UPDATE' :
                        return {...state, input : action.payload}
                 
    default:
        return state
}
    
 }
 export default reducer