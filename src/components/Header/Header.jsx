import './Header.scss';

export default function Header(){
    return(
        <header className='header'>
            <h2 className='header__title'>Pawsome Practice Manager</h2>
            <ul className='header__list'>
                <li className='header__list-item'>Sign In</li>
            </ul>
        </header>
    )
}