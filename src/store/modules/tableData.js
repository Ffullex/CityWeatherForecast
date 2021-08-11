import {
    getData,
} from '@/api/weather'

const state = {
    dt: null,
    temp: null,
    clouds: null,
    speed: null,
    cities: null,
}

const mutations = {
    SET_DATE: (state, dt) => {
        state.dt = dt
    },
    SET_TEMP: (state, temp) => {
        state.temp = temp
    },
    SET_CLOUDS: (state, clouds) => {
        state.clouds = clouds
    },
    SET_SPEED: (state, speed) => {
        state.speed = speed
    },
    SET_CITIES: (state, cities) => {
        state.cities = cities
    }
}

const getters = {
    dt: (state) => state.dt,
    temp: (state) => state.temp,
    clouds: (state) => state.clouds,
    speed: (state) => state.speed,
    cities: (state) => state.cities,
}

const actions = {
    getDate({ commit }) {
        return new Promise((resolve, reject) => {
            getData()
                .then((response) => {
                    commit('SET_DATE', response.data.list[1].dt)
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    getTemp({ commit }) {
        return new Promise((resolve, reject) => {
            getData()
                .then((response) => {
                    commit('SET_TEMP', response.data)
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    getClouds({ commit }) {
        return new Promise((resolve, reject) => {
            getData()
                .then((response) => {
                    commit('SET_CLOUDS', response.data.list.temp)
                    console.log('ok')
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

    getSpeed({ commit }) {
        return new Promise((resolve, reject) => {
            getData()
                .then((response) => {
                    commit('SET_SPEED', response)
                    resolve()
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    getCities({ commit }) {
        return new Promise((resolve, reject) => {
            getData()
                .then((response) => {
                    commit('SET_CITIES', response)
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
