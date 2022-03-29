import { useState } from "react";

const [token, setToken] = useState(null);

export default function setJWT(_jwt) {
    setToken(_jwt);
}

export function getToken() {
    return token;
}