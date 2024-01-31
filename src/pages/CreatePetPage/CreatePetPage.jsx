import SideNav from '../../components/SideNav/SideNav';
import './CreatePetPage.scss';
import PetForm from '../../components/PetForm/PetForm';

export default function CreatePetPage(){
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