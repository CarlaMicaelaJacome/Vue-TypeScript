import fakeStoreAPI from "@/API/fakeStoreAPI";
import { Pagination } from "@/models/Pagination";
import { Product } from "@/models/Product";
import { AxiosResponse } from "axios";
import { ActionTree } from "vuex";
import { IState } from "..";
import { ProductsStateInterface } from "./State";

const actions: ActionTree<ProductsStateInterface, IState> = { 
    async fetchProducts({commit}){
        commit("setIsLoading", true);
        const {data} = await fakeStoreAPI.get<unknown, AxiosResponse<Product[]>>("/products");
        commit("setIsLoading", false);
        commit("setProducts", data);
    },
    async fetchProductById({commit}, productId: number) {
        commit("setIsLoading", true);
        const {data} = await fakeStoreAPI.get<unknown, AxiosResponse<Product>>('/products/${productId}');
        commit("setIsLoading", false);
        commit("setSelectedProduct", data);
    },
    async fetchProductByTitle({commit}, productTitle: string) {
        commit("setIsLoading", true);
        const {data} = await fakeStoreAPI.get<unknown, AxiosResponse<Product[]>>('/products/?title=${productTitle}');
        commit("setIsLoading", false);
        commit("setProductsFiltered", data);
    },
    async fetchProductByPagination({commit}, pagination: Pagination) {
            commit("setIsLoading", true);
            const {data} = await fakeStoreAPI.get<unknown, AxiosResponse<Product[]>>('/products?offset=${pagination.offset}&limit=${pagination.limit}');
            commit("setIsLoading", false);
            commit("setProductsFiltered", data);
    },
}

export default actions;