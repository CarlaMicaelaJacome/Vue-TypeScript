import { Module } from "vuex";
import state, { IAuthUserState } from "./State";
import mutations from "./Mutations";
import getters from "./Getters";
import actions from "./Actions";
import { IState } from "..";

const authUserModule: Module<IAuthUserState, IState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}

export default authUserModule;