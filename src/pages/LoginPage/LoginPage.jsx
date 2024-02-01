import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.scss';

export default function LoginPage({ setIsLoggedIn, setUserName, setAccess }){
    return(
        <main className='main'>
        <section className='page'>
            <div className='login-card'>
                <h2 className='login-card__title'>Login</h2>
                <LoginForm setIsLoggedIn={setIsLoggedIn} setUserName={setUserName} setAccess={setAccess}/>
            </div>
        </section>
    </main>
    )
}