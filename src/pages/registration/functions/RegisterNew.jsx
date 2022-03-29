import { post } from "../../../functions/AxiosBase";
import { encode } from "../../../functions/AES";
import { sha256 } from "../../../functions/Security";

export default async function RegisterNew(list) {
    list.users_password = sha256(list.users_password);
    list.confirm_user_password = sha256(list.confirm_user_password);

    return await post('auth/signup', encode(list));
}