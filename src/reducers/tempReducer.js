const tempReducer = (state={}, action) => {
    console.log(action)
    switch(action.type) {
        case "temp" :
            return action.payload
        default:
            return "default case"
    }
}

export const nextReducer = (state='', action) => {
    switch(action.type) {
        case "temp" :
            return action.payload
        default:
            return "next reducer";
    }
    
}

export default tempReducer;