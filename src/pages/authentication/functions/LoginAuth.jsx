import { post } from "../../../functions/AxiosBase";
import { encode } from "../../../functions/AES";
import { sha256 } from "../../../functions/Security";

export default async function LoginAuth(list) {
    list.users_password = sha256(list.users_password);
    return await post('auth/signin', encode(list));
}