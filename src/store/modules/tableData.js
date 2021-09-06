import {
    getCities,
    getData,
} from '@/api/weather'

const state = {
    list: null,
    cities: null,
}

const mutations = {
    SET_LIST: (state, list) => {
        state.list = list
    },
    SET_CITIES: (state, cities) => {
        state.cities = cities
    }
}

const getters = {
    list: (state) => state.list,
    cities: (state) => state.cities,
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
    getCities({ commit }, query) {
        console.log(query)
        return new Promise((resolve, reject) => {
            getCities(query)
                .then((response) => {
                    commit('SET_LIST', response)
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}
