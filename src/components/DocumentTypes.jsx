import { useEffect, useState } from "react";
import { get } from "../functions/AxiosBase";

export default function DocumentTypes() {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        get('read-document-types').then(response => {
            setDocuments(response.data);
        });
    }, [setDocuments]);

    return documents;
}