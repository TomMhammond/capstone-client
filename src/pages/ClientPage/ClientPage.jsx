import './ClientPage.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function ClientPage(){
    const [clientList, setCLientList ] = useState([]);
    useEffect(() => {
        const fetchClientList = async () => {
            const response = await axios.get('http://localhost:8080/clients');
            setCLientList(response.data)
        } 
        fetchClientList();
    }, []);

    if(clientList.length === 0){
        return <></>
    };

    console.log(clientList)

    return(
        <></>
    )
}