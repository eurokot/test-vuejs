<template>
    <div class="userList__item" @click="$router.push(`/user/${user.id}`)">
        <h3>{{user.id}}. {{user.name}}</h3>
        <p>username: {{user.username}}</p>
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    }
}
</script>

<style>
.userList__item {
    width: 90%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px auto;
    padding: 5px 10px;
    background-color: #fff;
    border-radius: 5px;
    -o-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -ms-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    transition: all .5s;
}

.userList__item:hover {
    -o-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
}

@media screen and (max-width: 800px) {
    .userList__item {
        min-width: 90%;
        flex-direction: column;
    }

    .userList__item:hover {}
}

@media screen and (max-width: 500px) {
    .userList__item {
        height: 70px;
        font-size: 12px;
        align-items: flex-start;
    }
}

</style>