import SideNav from '../../components/SideNav/SideNav';
import './CreateStaffPage.scss';
import PetForm from '../../components/PetForm/PetForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function CreateStaffPage({token, access}){
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
                <div className='create-staff-card'>
                    <h2 className='create-staff-card__title'>Enter New Staff Member</h2>
                    {/* <StaffForm token={token}/> */}
                </div>
            </section>
        </main>
    )
}