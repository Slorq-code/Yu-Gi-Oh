<template>
    <div class="container">
        <div class="flex-box" >
            <FilterByStatus />
            <FilterByName />
        </div>
        <ListCharacters />
    </div>
</template>

<script >
import ListCharacters from '@/components/ListCharacters'
import FilterByStatus from '@/components/FilterByStatus'
import FilterByName from '@/components/FilterByName'
export default {
    name: 'App',
    components: {
        ListCharacters,
        FilterByStatus,
        FilterByName
    }
}
</script>

<style>
.container {
    width: 100%;
    max-width: 90%;
    margin: 1rem auto;
}
img {
    width: 100%;
}
.flex-box{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>