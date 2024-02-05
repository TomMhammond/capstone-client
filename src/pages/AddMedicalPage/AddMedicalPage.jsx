import AddMedicalForm from "../../components/AddMedicalForm/AddMedicalForm";
import SideNav from "../../components/SideNav/SideNav";

export default function AddMedicalPage({ access, token }){
    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='create-medical-card'>
                    <h2 className='create-medical-card__title'>Pet Medical Information</h2>
                    <AddMedicalForm token={token}/>
                </div>
            </section>
        </main>
    )
}