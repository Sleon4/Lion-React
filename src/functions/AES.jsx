import CryptoJS from 'crypto-js';

export function encode(files) {
    const list = new Object();
    const key = CryptoJS.enc.Utf8.parse(
        CryptoJS.MD5('LIONFRAMEWORK-KY')
    );
    const iv = {
        iv: CryptoJS.enc.Utf8.parse('LIONFRAMEWORK-IV')
    };

    Object.entries(files).forEach(([index, file]) => {
        list[index] = CryptoJS.AES.encrypt(file, key, iv).toString();
    });

    return list;
}

export function decode(files) {
    return {
        status: 'warning',
        message: 'waiting...'
    };
}