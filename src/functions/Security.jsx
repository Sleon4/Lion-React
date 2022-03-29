import CryptoJS from 'crypto-js';

export default function formdata(files) {
    const form = new FormData();
    Object.keys(files).forEach(key => form.append(key, files[key]));
    return form;
}

export function sha256(file) {
    return CryptoJS.SHA256(file).toString();
}