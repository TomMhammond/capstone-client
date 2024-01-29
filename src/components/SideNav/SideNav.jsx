import './SideNav.scss';

export default function SideNav(){
    return(
        <aside className='nav'>
            <ul className='nav__list'>
                <li className='nav__list-item'>Clients</li>
                <li className='nav__list-item'>Pets</li>
                <li className='nav__list-item'>Staff</li>
            </ul>
        </aside>
    )
}