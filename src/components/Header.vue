<template>
    <div class="header">
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link>
        </nav>
    </div>
</template>

<script>
export default {
    name: "Header"
};
</script>

<style scoped>
.header {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #decb98;
    width: 100%;
    height: 50px;
    border-radius: 50px 50px 0px 0px;
}
nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #e14841;
}
</style>
