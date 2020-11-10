export const createComplaint = (complaint) => {
    return (dispatch, getState) => {
        //make async call to database
        dispatch({ type: 'CREATE_COMPLAINT', complaint })
    }
}
