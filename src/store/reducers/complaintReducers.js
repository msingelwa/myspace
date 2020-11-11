const initState = {
    complaints: [
        { id: '1', name: 'Lloyd', title: 'Chair', content: 'Broken chair and not comfortable for long hours sit' },
        { id: '2', name: 'Lonwabo', title: 'Window', content: 'Broken chair and not comfortable for long hours sit' },
        { id: '3', name: 'Msingelwa', title: 'Ledge', content: 'Broken chair and not comfortable for long hours sit' }
    ]
}

const complainReducers = (state = initState, action) => {
    switch (action.type) {
        case 'CREATE_COMPLAINT':
            console.log("created a complaint", action.complaint);
            return state
        case 'CREATE_COMPLAINT_ERROR':
            console.log("created a error", action.err);
            return state
        default:
            return state
    }
}
export default complainReducers