import Main from '../pages/Main';
import {createRouter, createWebHistory} from 'vue-router';
import UserProfile from '../components/UserProfile';

const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/user/:id',
        component: UserProfile,
        props: true
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL)
});

export default router;