import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
//import middlewate aka thunk
import thunk from "redux-thunk";

import { DataReducer } from "./reducers/DataReducers";
import { UserReducer } from "./reducers/UserReducer";
import { LinkReducer } from "./reducers/LinkReducer";

//create combine reducers to store all reducers
const reducers = combineReducers({
    Data: DataReducer,
    User: UserReducer,
    Link: LinkReducer
})

//create initial state wher all data
const initialState = {}

//create middleware
const middleware = [thunk]

const store = createStore(
    reducers,
    initialState,
   composeWithDevTools(applyMiddleware(...middleware))
)
store.subscribe(()=>{
    console.log('State Updated')
    console.log(store.getState())
})
console.log(store.getState())


export default  store
