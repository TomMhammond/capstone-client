import '../CreateMedicalPage/CreateMedicalPage.scss';
import SideNav from '../../components/SideNav/SideNav';
import EditMedicalForm from '../../components/EditMedicalForm/EditMedicalForm';

export default function EditMedicalPage({token, access}){
    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='create-medical-card'>
                    <h2 className='create-medical-card__title'>Edit Pet Medical Information</h2>
                    <EditMedicalForm token={token}/>
                </div>
            </section>
        </main>
    )
}