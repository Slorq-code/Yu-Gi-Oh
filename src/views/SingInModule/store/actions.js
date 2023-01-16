import authApi from "@/api/authApi"


export const createUser = async ({commit}, user) => {
const { name, last_name, email, password, confirm_password } = user
try {

    const {data} = await authApi.post('api/v1/register', {name, last_name, email, password, confirm_password})
    console.log(data)

    return {ok: true}

} catch (error) {
    console.log(error.response)
    return{ok: false, message: '....'}
}

}