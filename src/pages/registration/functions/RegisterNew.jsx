import { post } from "../../../functions/AxiosBase";
import { encode } from "../../../functions/AES";
import { sha256 } from "../../../functions/Security";

export default async function RegisterNew(list) {
    const aesEnc = encode({
        users_password: sha256(list.users_password),
        confirm_user_password: sha256(list.confirm_user_password)
    });

    list.users_password = aesEnc.users_password;
    list.confirm_user_password = aesEnc.confirm_user_password;

    return await post('api/auth/signup', list);
}