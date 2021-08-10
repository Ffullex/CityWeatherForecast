import {
    getData,
} from '@/api/weather'

const state = {
    dt: null,
    temp: null,
    clouds: null,
    speed: null,
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
}

const getters = {
    dt: (state) => state.dt,
    temp: (state) => state.temp,
    clouds: (state) => state.clouds,
    speed: (state) => state.speed,
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
                    commit('SET_TEMP', response.data.list[0].main.temp)
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
                    commit('SET_CLOUDS', response)
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
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
}