const initalState = {
    list: []
};
const reducer = (state = initalState, action) => {
    switch(action.type){
        case 'LIST':
            return{
                ...state,
                list: [...state.list, action.payload],
            };
        case 'DELETE_ITEM': 
            return{
                ...state,
                list: state.list.filter((l)=>l.id !== action.payload)
            };
        default:
            return state;    


    }

};

export default reducer;