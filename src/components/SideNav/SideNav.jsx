import './SideNav.scss';
import { useNavigate } from 'react-router-dom';

export default function SideNav( {access} ){
    const navigate = useNavigate();
    
    const clickRegister = () => {
        navigate('/register/client')
    }
    
    const clickClients = () => {
        navigate('/clients');
    }

    const clickPets = () => {
        navigate('/pets');
    }

    const clickStaff = () => {
        navigate('/staff')
    }
    let clients;
    let register;
    let pets;
    let staff;
    if(access === 'admin' || access === 'staff'){
        clients = 'Clients';
        register = 'Register';
        pets = 'Pets';
        staff = 'Staff'
    }

    let newUser;
    if(access === 'admin'){
        newUser = 'Add User'
    }

    return(
        <aside className='nav'>
            <ul className='nav__list'>
                <li className='nav__list-item' onClick={clickRegister}>{register}</li>
                <li className='nav__list-item' onClick={clickClients}>{clients}</li>
                <li className='nav__list-item' onClick={clickPets}>{pets}</li>
                <li className='nav__list-item' onClick={clickStaff}>{staff}</li>
                <li className='nav__list-item'>{newUser}</li>
            </ul>
        </aside>
    )
}