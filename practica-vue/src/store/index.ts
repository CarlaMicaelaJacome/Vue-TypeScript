import { createStore } from 'vuex'
import productsModule from "./Products";
import authUserModule from './authUser';

export interface IState{
  greeting: string;
}

export default createStore({
  state: {
    greeting: " Everything in just one click"
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Products: productsModule,
    authUser: authUserModule
  }
})
