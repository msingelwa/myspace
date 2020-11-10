const { combineReducers } = require("redux");
const { default: authReducers } = require("./authReducers");
const { default: complainReducers } = require("./complaintReducers");

const rootReducer = combineReducers({
    auth:authReducers,
    complain:complainReducers
    
})

export default rootReducer