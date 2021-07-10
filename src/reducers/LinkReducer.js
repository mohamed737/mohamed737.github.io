export const LinkReducer = (state = initialState, action) => {
    
    switch (action.type) {
        case 'LINK_IN':
            console.log(action.payload)
            return {
                link: action.payload
                
            }; 
            default:
                return state;
                
    }
}
const initialState = {
    link: ''
}