import './CreateMedicalPage.scss';

export default function CreateMedicalPage(){
    return(
        <main className='main'>
            <section className='page'>
                <div className='create-medical-card'>
                    <h2 className='create-medical-card__title'>Pet Medical Information</h2>
                    <MedicalForm />
                </div>
            </section>
        </main>
    )
}