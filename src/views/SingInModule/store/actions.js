import authApi from "@/api/authApi";

export const createUser = async ({ commit }, user) => {
    const { first_name, last_name, email, password, password_confirm } = user;
    try {
    const { data } = await authApi.post("api/v1/register", {
        first_name,
        last_name,
        email,
        password,
        password_confirm,
    });
    delete user.password
    delete user.password_confirm
    commit('loginUser',{user})
    console.log(data)
    return { ok: true };
    } catch (error) {
        return { ok: false, message: error.response.data.message};
    }
};

export const signInUser = async ({ commit }, user) => {
    const { email, password } = user;
    try {
    const { data } = await authApi.post("api/v1/login", {
        email,
        password,
    });
    commit('loginUser',{user})
    console.log(data)
    return { ok: true };
    } catch (error) {
        return { ok: false, message: error.response.data.message};
    }
};
