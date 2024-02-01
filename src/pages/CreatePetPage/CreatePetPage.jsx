import SideNav from '../../components/SideNav/SideNav';
import './CreatePetPage.scss';
import PetForm from '../../components/PetForm/PetForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function CreatePetPage(){
    const navigate = useNavigate();

    useEffect(() => {
        if(!sessionStorage.authToken){
            return navigate('/login');
        }
    }, [])
    
    return(
        <main className='main'>
            <SideNav />
            <section className='page'>
                <div className='create-pet-card'>
                    <h2 className='create-pet-card__title'>Register Pet</h2>
                    <PetForm />
                </div>
            </section>
        </main>
    )
}