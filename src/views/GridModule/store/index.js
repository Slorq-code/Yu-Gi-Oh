import authApi from "@/api/authApi";

const gridModule = {
    state: {
        status: "informacion de prueba desde el state store grid",
        cardList: []
    },
    mutations: {},
    actions: {
        getCards:  async () => {
            try {
                const { data } = await authApi.get("api/v1/random")
                console.log(data)
                return { ok: true }
            } catch(error) {
                console.log(error)
                return { ok: false }
            }
        }
    },
    getters: {
        pendingTodos(state, getters, rootState) {
            return state.status
        }
    },
    modules: {},
}

export default gridModule