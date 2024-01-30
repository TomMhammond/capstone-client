import './ClientPage.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SideNav from '../../components/SideNav/SideNav';
import Client from '../../components/Client/Client';

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

    return(
        <main className='main'>
            <SideNav />
            <section className='page'>
                <div className='client-card'>
                    <h2 className='client-card__title'>Clients</h2>
                    {clientList.map((client) => (
                        <Client client={client} key={client.id}/>
                    ))}
                </div>
            </section>
        </main>
    )
}