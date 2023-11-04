const initialState={
    isToggled: false,
}

const toggleReducer=(state=initialState,action)=>{
    switch(action.type){
        case "toggle":
            return{...state,isToggled: !state.isToggled}

        default:
            return state;
    }
}

export default toggleReducer;