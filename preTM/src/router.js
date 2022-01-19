import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Topic from './components/Topic.vue'
import AfterPitapat from './components/Topic/AfterPitapat.vue'
import Health from './components/Topic/Health.vue'
import Invest from './components/Topic/Invest.vue'
import Ssum from './components/Topic/Ssum.vue'
import Travel from './components/Topic/Travel.vue'
import PitAPat from './components/PitAPat.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    routes: [
        { path: "/", component: Home },
        { path: "/topic", component: Topic },
        { path: "/pitapat", component: PitAPat },
        {
            path: "/topic",
            component: Topic,
            props: true,
            children: [
                {path: "afterpitapat", component: AfterPitapat},
                {path: "health", component: Health},
                {path: "invest", component: Invest},
                {path: "ssum", component: Ssum},
                {path: "travel", component: Travel},
            ]
        }
    ]
})

export default router;