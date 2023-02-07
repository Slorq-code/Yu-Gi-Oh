<template>
    <div class="headerContainer" >
        <img 
            class="headerImg"
            src="../assets/Morty-img.png" 
            alt="Morty"
        >
        <img 
            class="headerTitle"
            src="../assets/Names.png" 
            alt="Morty"
        >
        <img 
            class="headerImg"
            src="../assets/SunRick-img.png" 
            alt="Morty"
        >
    </div>
</template>

<script>
export default {
    name: 'Header',
    components: {
    },
}
</script>

<style>
.headerContainer {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    max-height: 110px;
    border-radius: 25px;
    box-shadow: 0px 3px 6px #2c8f92;
}
.headerImg {
    width: auto;
    height: 150px;
}
.headerTitle {
    width: 20%;
    height: auto;
}
</style>