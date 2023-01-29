import { AuthUser } from "@/models/authUser";
import { Token } from "@/models/Token";

export interface IAuthUserState {
    token: Token | null;
    authUser: AuthUser | null;
    isLoading: boolean;
}

function state(): IAuthUserState {
    return {
        token: null,
        authUser: null,
        isLoading: false, 
    }
}

export default state;