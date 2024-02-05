import EditStaffForm from '../../components/EditStaffForm/EditStaffForm';
import SideNav from '../../components/SideNav/SideNav';
import './EditStaffPage.scss';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function EditStaffPage({ access, token}){
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
                <div className='edit-staff-card'>
                    <h2 className='edit-staff-card__title'>Edit Client</h2>
                    <EditStaffForm token={token}/>
                </div>
            </section>
        </main>
    )
}