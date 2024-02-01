import './CreateMedicalPage.scss';
import MedicalForm from '../../components/MedicalForm/MedicalForm';
import SideNav from '../../components/SideNav/SideNav';

export default function CreateMedicalPage(){
    return(
        <main className='main'>
            <SideNav />
            <section className='page'>
                <div className='create-medical-card'>
                    <h2 className='create-medical-card__title'>Pet Medical Information</h2>
                    <MedicalForm />
                </div>
            </section>
        </main>
    )
}