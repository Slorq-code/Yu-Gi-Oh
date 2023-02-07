import { createStore } from "vuex";
import authApi from "@/api/authApi";

export default createStore({
  state: {
    characters: [],
    charactersFilter: [],
    status: "authenticating",
    user: null,
    idToken: null,
    refreshToken: null,
  },
  mutations: {
    loginUser(state, { user }) {
      state.user = user;
      state.status = "authenticated";
    },
    setCharacters(state, payload) {
      state.characters = payload;
    },
    setCharactersFilter(state, payload) {
      state.charactersFilter = payload;
    },
  },
  actions: {
    //-------------------------------------------
    async createUser({ commit }, user) {
      const { first_name, last_name, email, password, password_confirm } = user;
      try {
        const { data } = await authApi.post("api/v1/register", {
          first_name,
          last_name,
          email,
          password,
          password_confirm,
        });
        delete user.password;
        delete user.password_confirm;
        commit("loginUser", { user });
        console.log(data);
        return { ok: true };
      } catch (error) {
        return { ok: false, message: error.response.data.message };
      }
    },
    async signInUser({ commit }, user) {
      const { email, password } = user;
      try {
        const { data } = await authApi.post("api/v1/login", {
          email,
          password,
        });
        delete user.password;
        commit("loginUser", { user });

        console.log(data);
        return { ok: true };
      } catch (error) {
        return { ok: false, message: error.response.data.message };
      }
    },
    //-------------------------------------------
    async getCharacters({ commit }) {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        const data = await response.json();
        commit("setCharacters", data.results);
        commit("setCharactersFilter", data.results);
      } catch (error) {
        console.error(error);
      }
    },
    filterByStatus({ commit, state }, status) {
      const filter = state.characters.filter((character) => {
        return character.status.includes(status);
      });
      commit("setCharactersFilter", filter);
    },
    filterByName({ commit, state }, name) {
      const formatName = name.toLowerCase();
      const filter = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase();
        if (characterName.includes(formatName)) {
          return character;
        }
      });
      commit("setCharactersFilter", filter);
    },
  },
  modules: {},
});
