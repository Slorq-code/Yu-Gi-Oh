<template>
  <div class="footer" >
    <img class="imgFooter" src="../assets/imgs/logoYuGiOh.png" alt="logo">
  </div>
</template>

<script>
export default {
    name: "Footer"
}
</script>

<style>
.footer {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #342828;
    width: 100%;
    height: 50px;
    border-radius: 0px 0px 50px 50px;
}
.imgFooter {
    height: 100%;
    width: auto;
}
</style>