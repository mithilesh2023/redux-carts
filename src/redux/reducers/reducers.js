
const INIT_STATE={
    carts:[]
};

export const cartreducer=(state=INIT_STATE,action)=>{
    switch(action.type){
        case "ADD_CART":
            const IteamIndex=state.carts.findIndex((items)=>items.id===action.payload.id);
            if (IteamIndex >=0){
                state.carts[IteamIndex].qty+=1
            }
            else{
                const temp={...action.payload,qty:1}
                return{
                    ...state,
                    carts:[...state.carts,temp]
                }
            }
           
            case "DELETE_CART":
                const data=state.carts.filter((el)=>el.id !== action.payload);
                return{
                    ...state,
                    carts:data
                }

            case "RMV_ONE":
            const IteamIndex_dec=state.carts.findIndex((items)=>items.id===action.payload.id);
            if (state.carts[IteamIndex_dec].qty >=1){
                const dltitems=state.carts[IteamIndex_dec].qty -=1
                console.log([...state.carts,dltitems]);

                return{
                    ...state,
                    carts:[...state.carts]
                }
            }
            else if (state.carts[IteamIndex_dec].qty===1){
                const data=state.carts.filter((el)=>el.id !== action.payload);
                return{
                    ...state,
                    carts:data
                }
            }
                
            default:
                return state
    }
}
