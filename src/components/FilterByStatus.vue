<template>
  <div class="filter">
    <div class="item" @click="filter('')">
      All
    </div>
    <div class="item" @click="filter('Alive')">
      Alive
    </div>
    <div class="item" @click="filter('Dead')">
      Dead
    </div>
    <div class="item" @click="filter('unknown')">
      Unknown
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    const store = useStore()
    const filter = ((status) => {
      store.dispatch('filterByStatus', status)
    })
    return {
      filter
    }
  }
}
</script>

<style lang="scss">

.filter {
  position: fixed;
  left: 0;
  top: 20%;
  overflow: hidden;
  width: 100px;
  height: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: 1s ease-out;
  &:hover {
    justify-content: space-between;
  }
}
.item {
  padding: 1rem 0.5rem;
  background-color: var(--background-card);
  text-align: center;
  cursor: pointer;
  &:hover {
    color: var(--text-orange);
  }
}
</style>