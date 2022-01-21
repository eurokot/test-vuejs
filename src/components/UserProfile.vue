<template>
    <div>
      <h1>User Profile</h1>
      <div class="profile__wrapper">
        <ul class="profile__list" v-for="user in userFind" :key="user.id">
            <li>Name: <span>{{user.name}}</span></li>
            <li>Username: <span>{{user.username}}</span></li>
            <li>Email: <span>{{user.email}}</span></li>
            <li>Address:
                <ul>
                    <li>Street: <span>{{user.address.street}}</span></li>
                    <li>Suite: <span>{{user.address.suite}}</span></li>
                    <li>City: <span>{{user.address.city}}</span></li>
                    <li>Zipcode: <span>{{user.address.zipcode}}</span></li>
                    <li>Geo:
                        <ul>
                            <li>lat: <span>{{user.address.geo.lat}}</span></li>
                            <li>lng: <span>{{user.address.geo.lng}}</span></li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>Phone: <span>{{user.phone}}</span></li>
            <li>Website: <span>{{user.website}}</span></li>
            <li>Company:
                <ul>
                    <li>Name: <span>{{user.company.name}}</span></li>
                    <li>CatchPhrase: <span>{{user.company.catchPhrase}}</span></li>
                    <li>Bs: <span>{{user.company.bs}}</span></li>
                </ul>
            </li>
        </ul>
        <button class="profile__back" @click="$router.push('/')">Back</button>
      </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            id: '',
            userFind: []
        }
    },
    created() {
        this.id = this.$route.params.id;
    },
    methods: {
        async fetchUser() {
            try {
                const response = await axios.get('https://jsonplaceholder.typicode.com/users');
                this.userFind = response.data.filter((e) => e.id == this.id);
            } catch (e) {
                alert('Something wrong...');
            }
        }
    },
    mounted() {
        this.fetchUser();
    }
}
</script>

<style scoped>
h1 {
    margin-top: 15px;
    text-align: center;
    color: rgb(252, 227, 0);
    font-weight: 700;
}

.profile__wrapper {
    width: 550px;
    max-height: 80%;
    margin: 15px auto;
    padding: 15px 30px;
    background-color: #fff;
    border-radius: 5px;
    -o-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -ms-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
}

.profile__wrapper .profile__list li {
    list-style-type: none;
    font-weight: 700;
}

.profile__wrapper .profile__list li span{
    margin-left: 10px;
    font-weight: 500;
}

.profile__wrapper .profile__list ul li{
    padding-left: 30px;
}

.profile__wrapper .profile__back {
    width: 100px;
    height: 30px;
    margin-top: 30px;
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 700;
    color: #ffe600;
    background-color: #41B883;
    border-style: none;
    border-radius: 5px;
    -o-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    -ms-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
    outline: none;
    cursor: pointer;
    transition: transform .3s;
}

.profile__wrapper .profile__back:hover {
    transform: scale(1.1);
}

@media screen and (max-width: 600px) {
    .profile__wrapper {
        max-width: 90%;
    }
}

@media screen and (max-width: 400px) {
    .profile__wrapper .profile__list {
        font-size: 14px;
    }
}


</style>