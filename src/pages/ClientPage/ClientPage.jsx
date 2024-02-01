import './ClientPage.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';
import SideNav from '../../components/SideNav/SideNav';
import Client from '../../components/Client/Client';
import { useNavigate } from 'react-router-dom';

export default function ClientPage(){
    const [clientList, setCLientList ] = useState([]);
    const navigate = useNavigate();
    const token = sessionStorage.authToken;
   
    useEffect(() => {
        if(!sessionStorage.authToken){
            return navigate('/login');
        }
    }, [])
   
    useEffect(() => {
        const fetchClientList = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/clients`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
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