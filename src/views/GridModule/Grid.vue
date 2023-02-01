<template>
    <div class="gridContainer">
        <h4> info: {{ pending }}</h4>
        <img 
        v-for="item in testerInformation"
        :key="item.id"
        src="item.url" 
        alt="item.nombre"
        >
        <div 
        v-for="item in testerInformation" 
        :key="item.id" 
        class="slotsCards">
        </div>
    </div>
</template>


<script>

import { computed, ref } from 'vue'
import { useStore } from 'vuex'
import authApi from "@/api/authApi";

export default {
    name: "Grid",
    setup() {
        const store = useStore();
        const pending = computed(() => store.getters['pendingTodos'])
        const getNewCards = async () => {
            resp = await authApi.get('api/v1/random')
        }
        console.log(getNewCards)
        const testerInformation = ref([
            {
                id: 1,
                "nombre": "Test",
                "valor": 1,
                "poder": 2,
                url: require("../../assets/imgs/200x300.png")

            },
            {
                id: 1,
                "nombre": "Test",
                "valor": 1,
                "poder": 2,
                url: require('@/assets/imgs/200x300.png')

            },
            {
                id: 1,
                "nombre": "Test",
                "valor": 1,
                "poder": 2,
                url: require('@/assets/imgs/200x300.png')

            },
            {
                id: 1,
                "nombre": "Test",
                "valor": 1,
                "poder": 2,
                url: require('@/assets/imgs/200x300.png')

            },
            {
                id: 1,
                "nombre": "Test",
                "valor": 1,
                "poder": 2,
                url: require('@/assets/imgs/200x300.png')

            },
            {
                id: 1,
                "nombre": "Test",
                "valor": 1,
                "poder": 2,
                url: require('@/assets/imgs/200x300.png')

            },
            {
                id: 1,
                "nombre": "Test",
                "valor": 1,
                "poder": 2,
                url: require('@/assets/imgs/200x300.png')

            },
            {
                id: 1,
                "nombre": "Test",
                "valor": 1,
                "poder": 2,
                url: require('@/assets/imgs/200x300.png')

            },
            {
                id: 1,
                "nombre": "Test",
                "valor": 1,
                "poder": 2,
                url: require('@/assets/imgs/200x300.png')

            },
            {
                id: 1,
                "nombre": "Test",
                "valor": 1,
                "poder": 2,
                url: require('@/assets/imgs/200x300.png')

            },
            {
                id: 1,
                "nombre": "Test",
                "valor": 1,
                "poder": 2,
                url: require('@/assets/imgs/200x300.png')

            },
            {
                id: 1,
                "nombre": "Test",
                "valor": 1,
                "poder": 2,
                url: require('@/assets/imgs/200x300.png')

            },
        ])

        return {
            pending,
            testerInformation,
        }
    }
}
</script>

<style scoped>
.gridContainer {
    width: 100vh;
    height: 100%;
}
</style>