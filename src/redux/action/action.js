export const ADD_CART=(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}
export const DELETE=(id)=>{
    return{
        type:"DELETE_CART",
        payload:id
    }
}

//  remove any items

export const REMOVE=(one_item)=>{
    return{
        type:"RMV_ONE",
        payload:one_item
    }
}