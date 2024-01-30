import './SideNav.scss';
import { useNavigate } from 'react-router-dom';

export default function SideNav(){
    const navigate = useNavigate();
    const clickClients = () => {
        navigate('/clients');
    }

    const clickPets = () => {
        navigate('/pets');
    }

    return(
        <aside className='nav'>
            <ul className='nav__list'>
                <li className='nav__list-item'>Register</li>
                <li className='nav__list-item' onClick={clickClients}>Clients</li>
                <li className='nav__list-item' onClick={clickPets}>Pets</li>
                <li className='nav__list-item'>Staff</li>
            </ul>
        </aside>
    )
}