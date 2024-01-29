import './ClientPage.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SideNav from '../../components/SideNav/SideNav';

export default function ClientPage(){
    const [clientList, setCLientList ] = useState([]);
    useEffect(() => {
        const fetchClientList = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/clients`);
            setCLientList(response.data)
        } 
        fetchClientList();
    }, []);

    if(clientList.length === 0){
        return <></>
    };

    console.log(clientList)

    return(
        <main className='main'>
            <SideNav />
            <section className='page'>

            </section>
        </main>
    )
}