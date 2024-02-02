import SideNav from '../../components/SideNav/SideNav';
import './DashboardPage.scss';

export default function DashboardPage( {access, userName} ){
    const date = new Date();
    const hour = date.getHours();
    console.log(hour);

    let greeting;
    if(hour >= 0 && hour < 6 ){
        greeting = `You are working early ${userName}. Good morning`
    } else if(hour >= 6 && hour < 12){
        greeting = `Good morning ${userName}`;
    } else if(hour >= 12 && hour < 18) {
        greeting = `Good afternoon ${userName}`;
    } else {
        greeting = `Good Evening ${userName}`;
    }

    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='dashboard-card'>
                    <h2 className='dashboard-card__title'>Dashboard</h2>
                    <p className='dashboard-card__info'>{greeting}</p>
                </div>
            </section>
        </main>
    )
}