import { createStore } from 'vuex'
import auth from '../views/SingInModule/store'
import grid from '../views/GridModule/store'


const store = createStore({
  modules: {
    auth,
    grid,
  }

})

export default store