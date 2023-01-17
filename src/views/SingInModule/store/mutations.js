
export const loginUser = ( state, {user} ) => {
    state.user  = user
    state.status = "authenticated"
}