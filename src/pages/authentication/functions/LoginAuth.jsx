import { post } from "../../../functions/AxiosBase";
import { encode } from "../../../functions/AES";
import { sha256 } from "../../../functions/Security";

export default async function LoginAuth(list) {
    const aesEnc = encode({
        users_password: sha256(list.users_password)
    });

    list.users_password = aesEnc.users_password;
    
    return await post('api/auth/signin', list);
}