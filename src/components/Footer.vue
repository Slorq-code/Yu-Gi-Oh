<template>
    <div class="footerContainer" >
        <span class="firma">Development of Andrés F. Rodriguez</span>
    </div>
</template>

<script>
export default {
    name: 'footer',
    components: {},
}
</script>

<style>
.footerContainer {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 120px;
    border-radius: 25px;
    box-shadow: 0px 3px 6px #2c8f92;
}
.firma {
    font-size: 30px;
    margin: 0 80px 0 0;
}

</style>