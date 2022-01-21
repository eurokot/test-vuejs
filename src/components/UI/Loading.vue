<template>
    <div class="wrapper">
      <div id='loader'></div>
    </div>
</template>

<script>
export default {
   
}
</script>

<style scoped>

.wrapper {
    width: 50%;
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
}

#loader {
    width: 60px;
    height: 60px;
    background-color: transparent;
    -o-animation: loading 2.5s infinite linear;
    -webkit-animation: loading 2.5s infinite linear;
    -moz-animation: loading 2.5s infinite linear;
    -ms-animation: loading 2.5s infinite linear;
    animation: loading 2.5s infinite linear;
    border-radius: 50%;
    border: 4px dashed rgb(252, 227, 0);
    transition: border-color 1s;
}

@keyframes loading {
    0% {
        -o-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
        -moz-transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    50% {
        -o-transform: rotate(360deg);
        -webkit-transform: rotate(360deg);
        -moz-transform: rotate(360deg);
        -ms-transform: rotate(360deg);
        transform: rotate(360deg);
    }
    100% {
        -o-transform: rotate(720deg);
        -webkit-transform: rotate(720deg);
        -moz-transform: rotate(720deg);
        -ms-transform: rotate(720deg);
        transform: rotate(720deg);
    }
}
</style>