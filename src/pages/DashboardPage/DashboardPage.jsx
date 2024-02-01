import SideNav from '../../components/SideNav/SideNav';
import './DashboardPage.scss';

export default function DashboardPage( {access} ){
    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='dashboard-card'>
                    <h2 className='dashboard-card__title'>Dashboard</h2>
                    
                </div>
            </section>
        </main>
    )
}