import ClientForm from '../../components/ClientForm/ClientForm';
import SideNav from '../../components/SideNav/SideNav';
import './CreateClientPage.scss';

export default function CreateClientPage(){
    return(
        <main className='main'>
            <SideNav />
            <section className='page'>
                <div className='create-client-card'>
                    <h2 className='create-client-card__title'>Register Client</h2>
                    <ClientForm />
                </div>
            </section>
        </main>
    )
}