import SideNav from '../../components/SideNav/SideNav';
import './DashboardPage.scss';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function DashboardPage( {access, userName} ){
    const date = new Date();
    const hour = date.getHours();

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


    let sentence;
    if(access === 'client'){

        sentence = `${userName}, you have 3 pets in practice: Spike, Crusher, and Fred.`
    } else {
        sentence = `${userName}, select a navigation link to begin.`
    }

    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='dashboard-card'>
                    <h2 className='dashboard-card__title'>Dashboard</h2>
                    <p className='dashboard-card__info'>{greeting}</p>
                    <p className='dashboard-card__info--gap'>{sentence}</p>
                    <div className='dashboard-card__calendar-container'>
                        <Calendar />
                    </div>
                </div>
            </section>
        </main>
    )
}