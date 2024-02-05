import './StaffPage.scss';

export default function StaffPage({ token, access}){
    return(
        <main className='main'>
            <SideNav access={access}/>
            <section className='page'>
                <div className='staff-card'>
                    <h2 className='staff-card__title'>Staff</h2>
                    
                </div>
            </section>
        </main>
    )
}