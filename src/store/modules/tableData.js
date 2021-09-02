import {
    chooseCity,
    getData,
} from '@/api/weather'
import { setToken } from "@/utils/select";

const state = {
    list: null,
    city: null,
    // cities: null,
}

const mutations = {
    SET_LIST: (state, list) => {
        state.list = list
    },
    SET_CITY: (store, city) => {
        store.city = city
    },
    // SET_CITIES: (state, cities) => {
    //     state.cities = cities
    // }
}

const getters = {
    list: (state) => state.list,
    city: (store) => store.city,
    // cities: (state) => state.cities,
}

const actions = {

    getData({ commit }, city) {
        console.log(city)
        return new Promise((resolve, reject) => {
            getData(city)
                .then((response) => {
                    commit('SET_LIST', response.list)
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    getCity( data ) {
        const { value } = data
        return new Promise((resolve, reject) => {
            chooseCity({ value: value })
                .then((response) => {
                    setToken(response.token)
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    // getCities({ commit }) {
    //     return new Promise((resolve, reject) => {
    //         getCities()
    //             .then((response) => {
    //                 commit('SET_CITIES', response)
    //                 resolve()
    //             })
    //             .catch((error) => {
    //                 reject(error)
    //             })
    //     })
    // },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
