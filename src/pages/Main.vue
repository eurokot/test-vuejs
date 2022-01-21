<template>
    <div class="container">
        <users-list :users="users" v-if="!loading"/>
        <loading v-else/>
    </div>
</template>

<script>
import UsersList from '../components/UsersList.vue';
import Loading from '../components/UI/Loading.vue';
import UserProfile from '../components/UserProfile.vue';
import axios from 'axios';
export default {
    components: {
        UsersList, Loading, UserProfile
    },
    data() {
        return {
            users: [],
            loading: false
        }
    },
    methods: {
        async fetchUsers() {
            try {
                this.loading = true;
                setTimeout(async () => {
                    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                    this.users = response.data;
                    this.loading = false;
                }, 1000);
            } catch (e) {
                alert('Something wrong...');
            }
        }
    },
    mounted() {
        this.fetchUsers();
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
}

body {
    background-color: #41B883;
    overflow: hidden;
}

.container {
    width: 100vw;
    height: 100vh;
}

.container h1 {
    margin-top: 15px;
    text-align: center;
    color: rgb(252, 227, 0);
    font-weight: 700;
}
</style>