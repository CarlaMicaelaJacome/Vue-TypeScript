import { AuthUser } from "@/models/authUser";
import { Token } from "@/models/Token";
import { MutationTree } from "vuex";
import { IAuthUserState } from "./State";

const mutations: MutationTree<IAuthUserState> = {
    setToken(state: IAuthUserState, token: Token) {
        state.token = token;
    },
    setAuthUser(state: IAuthUserState, authUser: AuthUser) {
        state.authUser = authUser;
    },
    setIsLoading(state: IAuthUserState, value: boolean){
        state.isLoading = value;
    },
    deleteToken(state: IAuthUserState) {
        state.token = null;
    },
}

export default mutations;