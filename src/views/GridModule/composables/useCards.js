import {useStore} from 'vuex'

const useCards = () => {
    
    const store = useStore()

    const newCards = "test"

    return {
        newCards
    }

}

export default useCards