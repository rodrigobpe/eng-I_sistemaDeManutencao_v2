import {defineStore} from 'pinia'
import api from '../services'

export const useServiceStore = defineStore('service', {
    state: () => ({
        services:[]
    }),
    getters:{},
    actions:{
        async getTasks(){
            const res = await api.get('/services')
            const data = res.data
            this.services = data
        }
    }
})
