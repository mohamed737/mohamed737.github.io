
//action pass an action type and a payload is data
export const UserReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'LOG_USER_IN':
            console.log(action.payload)
            return {
                user: action.payload,
                logedIn: true,
   
            };
        case 'LOG_USER_OUT':
            return {
                user: '',
                logedIn: false
                
            };
        default:
            return state;
            
    }
   
}
const initialState = {
    user: '',
    logedIn: false
}