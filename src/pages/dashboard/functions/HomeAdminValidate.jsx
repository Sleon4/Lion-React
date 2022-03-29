import { post } from "../../../functions/AxiosBase";

export default async function HomeAdminValidate() {
    return post('example-athorize', {
        name: 'example-Dev'
    }, window.sessionStorage.getItem('jwt'));
}