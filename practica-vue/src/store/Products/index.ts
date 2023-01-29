import { Module } from "vuex";
import state, { ProductsStateInterface } from "./State";
import mutations from "./Mutations";
import getters from "./Getters";
import actions from "./Actions";
import { IState } from "..";

const productsModule: Module<ProductsStateInterface, IState> = {
    namespaced: true,
    state,
    mutations,
    getters,
    actions,
}

export default productsModule;