export const setStateToLocal = (state,key)=>{
    localStorage.setItem(key,JSON.stringify(state))
}

export const getStateFromLocal = (key)=>{
    return localStorage.getItem(key)
}