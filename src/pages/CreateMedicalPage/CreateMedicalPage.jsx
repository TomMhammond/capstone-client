import './CreateMedicalPage.scss';
import MedicalForm from '../../components/MedicalForm/MedicalForm';
import SideNav from '../../components/SideNav/SideNav';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function CreateMedicalPage({token, access}){
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
                <div className='create-medical-card'>
                    <h2 className='create-medical-card__title'>Pet Medical Information</h2>
                    <MedicalForm token={token}/>
                </div>
            </section>
        </main>
    )
}