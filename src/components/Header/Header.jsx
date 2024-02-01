import { useNavigate } from 'react-router-dom';
import './Header.scss';

export default function Header({ isLoggedIn, userName, setIsLoggedIn, setUserName }){
    const navigate = useNavigate();
    let text;
    let logOut;

    if(isLoggedIn) {
        text = `Welcome back, ${userName}`;
        logOut = `Log Out`;
    }

    const clickHandler = () => {
        setIsLoggedIn(false);
        setUserName(null);
        navigate('/')
    }

    return(
        <header className='header'>
            <h2 className='header__title'>Pawsome Practice Manager</h2>
            <ul className='header__list'>
                <li className='header__list-item header__list-item--left'>{text}</li>
                <li className='header__list-item--left' onClick={clickHandler}>{logOut}</li>
            </ul>
        </header>
    )
}