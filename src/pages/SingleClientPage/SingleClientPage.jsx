import SideNav from '../../components/SideNav/SideNav';
import './SingleClientPage.scss';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function SingleClientPage(){
    const params = useParams();
    const id = params.id;
   
    const [client, setClient ] = useState(null);

    useEffect(() => {
        const fetchSingleClient = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/clients/${id}`);
            setClient(response.data);
        }
        fetchSingleClient();
    }, [])

    if(!client) {
        return <></>
    }

    return(
        <main className='main'>
            <SideNav />
            <section className='page'>
                <div className='client-card'>
                    <h2 className='client-card__title'>{`${client.first_name} ${client.last_name}`}</h2>
                    <div className='client-card__container'>
                        <div className='client-card__subcontainer'>
                            <p className='client-card__email-label'>Email:</p>
                            <p className='client-card__email-info'>{client.email}</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}