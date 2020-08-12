//reducer is just a function that gets state object and a recieved action



const INITIAL_STATE = {
    currentUser: null
}

//set default value for state. if state is undefined then it will use the INITIAL_STATE value we created
// switch statement has a condition and we set up case statements or if else statements
//if the case of the action type is the one you want, you render something
//otherwise by default just return the state

const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                // spread everything else on state, ...state, bc you only want to modify the values you care about
                ...state,
                currentUser: action.payload
            };
        default:
            return state;
    }
}

export default userReducer;


//remember to bring into rootReducer