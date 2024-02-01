import { useNavigate } from 'react-router-dom';
import ClientForm from '../../components/ClientForm/ClientForm';
import SideNav from '../../components/SideNav/SideNav';
import './CreateClientPage.scss';
import { useEffect } from 'react';

export default function CreateClientPage({ token, access }){
    const navigate = useNavigate();

    useEffect(() => {
        if(!sessionStorage.authToken){
            return navigate('/login');
        }
    }, [])
    
    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='create-client-card'>
                    <h2 className='create-client-card__title'>Register Client</h2>
                    <ClientForm token={token}/>
                </div>
            </section>
        </main>
    )
}