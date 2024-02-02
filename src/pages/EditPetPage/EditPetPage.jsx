import '../CreatePetPage/CreatePetPage.scss';
import SideNav from '../../components/SideNav/SideNav';
import EditPetForm from '../../components/EditPetForm/EditPetForm';


export default function EditPetPage({ access, token }){
    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='create-pet-card'>
                    <h2 className='create-pet-card__title'>Edit Pet</h2>
                    <EditPetForm token={token}/>
                </div>
            </section>
        </main>
    )
}