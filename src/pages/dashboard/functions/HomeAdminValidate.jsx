import { post } from "../../../functions/AxiosBase";

export default async function HomeAdminValidate() {
    return post('', {
        name: 'Sergio',
        last_name: '',
        email: 'sergioleon4004@gmail.com',
        phone: 3154498121
    });
}