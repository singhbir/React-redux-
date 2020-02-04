import  DATA from './DummyData.js'

export const initialState = {
    data : DATA
}

export const reducer = (state = initialState, action ) =>{
    const newState = {...state}
    switch(action.type){
        case "ADD_ITEM":
            console.log("i am clicked")
            return{
                ...state,
                data:[action.value].concat(state.data)
            }
            break;
        case "DEL_ITEM":
            console.log("clicked")
            return{
                ...state,
                data:state.data.filter(el=> el.id !== action.key)
            }
            break;
    }
    return newState
}
