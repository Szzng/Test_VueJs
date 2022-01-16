import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import About from './components/About.vue'
import PitAPat from './components/PitAPat.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        {path: "/", component: Home},
        {path: "/about", component: About},
        {path: "/pitapat", component: PitAPat},
    ]
})

export default router;