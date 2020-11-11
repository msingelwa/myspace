export const createComplaint = (complaint) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        //make async call to database
        const firestore = getFirestore()
        firestore.collection('complaints').add({
            ...complaint, 
            authorFName: 'Lloyd',
            authorLName: 'Msingelwa',
            authorId: 123,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_COMPLAINT', complaint })
        }).catch(err => {
            dispatch({ type: 'CREATE_COMPLAINT_ERROR', err })
        })
        
    }
}
