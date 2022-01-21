<template>
    <h1>Users List:</h1>
    <div class="userList">
        <h1 v-show="users.length == 0">The list is empty</h1>
        <user-item v-for="user in users" 
            :key="user.id" 
            :user="user"
        />
    </div>
</template>

<!--@open="$emit('open', user)"-->

<script>
import UserItem from './UserItem.vue';
export default {
    components: {UserItem},
    props: {
        users: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.container .userList {
    max-width: 70%;
    max-height: 90%;
    margin: 15px auto;
    padding: 10px 10px;
    overflow-y: auto;
}

::-webkit-scrollbar{
    width: 0.6rem;
    background: #413e3e;
    border-radius: .3rem;
}

::-webkit-scrollbar-thumb{
  background: #ffe600;
  border-radius: .3rem;
}

@media screen and (max-width: 1100px) {
    .container .userList {
        min-width: 90%;
    }
}

</style>