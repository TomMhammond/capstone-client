import { useNavigate } from 'react-router-dom';
import './Header.scss';
import image from '../../assets/images/paw-prints.jpeg'

export default function Header({ isLoggedIn, userName, setIsLoggedIn, setUserName, setAccess }){
    const navigate = useNavigate();
    let text;
    let logOut;

    if(isLoggedIn) {
        text = `Welcome back, ${userName}`;
        logOut = `Log Out`;
    }

    const logOutClickHandler = () => {
        setIsLoggedIn(false);
        setUserName(null);
        setAccess(null);
        sessionStorage.removeItem('authToken')
        navigate('/')
    }

    const clickHandler = () => {
        navigate('/dashboard')
    }

    return(
        <header className='header'>
                <h2 className='header__title' onClick={clickHandler}>Pawsome Practice Manager</h2>
                <img className='header__img' src={image}></img>
            <ul className='header__list'>
                <li className='header__list-item header__list-item--left'>{text}</li>
                <li className='header__list-item--left' onClick={logOutClickHandler}>{logOut}</li>
            </ul>
        </header>
    )
}