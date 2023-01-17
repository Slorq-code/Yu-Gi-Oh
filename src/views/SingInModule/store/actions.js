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
    console.log(data);
    return { ok: true };
    } catch (error) {
        console.log(error.response.data.message);
        return { ok: false, message: "...." };
    }
};
