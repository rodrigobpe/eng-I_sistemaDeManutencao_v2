import { createRouter, createWebHistory } from "vue-router"
import HomeView from '../views/HomeView/index.vue'
import BudgetView from '../views/BudgetView/index.vue'

const routes = [
    {
        path:'/',
        name:'home',
        component: HomeView
    },
    {
        path:'/budgets',
        name:'budget',
        component: BudgetView
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router