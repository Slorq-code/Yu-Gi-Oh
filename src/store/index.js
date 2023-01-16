import { createStore } from 'vuex'
import auth from '../views/SingInModule/store'


const store = createStore({
  modules: {
    auth,
  }

})

export default store