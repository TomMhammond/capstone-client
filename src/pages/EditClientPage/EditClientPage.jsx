import EditClientForm from '../../components/EditClientForm/EditClientForm';
import SideNav from '../../components/SideNav/SideNav';
import './EditClientPage.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditClientPage({ access, token}){
    const navigate = useNavigate();

    useEffect(() => {
        if(!sessionStorage.authToken){
            return navigate('/');
        }
    }, [])


    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='edit-client-card'>
                    <h2 className='edit-client-card__title'>Edit Client</h2>
                    <EditClientForm token={token}/>
                </div>
            </section>
        </main>
    )
}