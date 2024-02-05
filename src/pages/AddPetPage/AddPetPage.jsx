import SideNav from '../../components/SideNav/SideNav';
import '../CreatePetPage/CreatePetPage';
// import PetForm from '../../components/PetForm/PetForm';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import AddPetForm from '../../components/AddPetForm/AddPetForm';

export default function CreatePetPage({token, access}){
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
                <div className='create-pet-card'>
                    <h2 className='create-pet-card__title'>Add Pet</h2>
                    <AddPetForm token={token}/>
                </div>
            </section>
        </main>
    )
}