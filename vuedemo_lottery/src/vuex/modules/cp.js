import * as types from '../mutation-types'
import {Common} from 'js/base'
import api from '../api'
const state = {
    currentPlay: {},
    numbers: []
}

const actions = {
    switchPlay: function ({commit}, playType) {
        commit(types.SWITCH_PLAY_TYPE, playType);
    }
}
const getters = {
    getCurrentPlay: state => state.currentPlay,
    getNumbers: state => state.numbers
}

const mutations = {
    [types.SWITCH_PLAY_TYPE] (state, playType) {
        state.currentPlay = playType;
    },
    chooseNums (state, object) {
        state.numbers.push(object);
    }
}

export default {
    state,
    actions,
    getters,
    mutations
}