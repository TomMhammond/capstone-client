import LoginForm from '../../components/LoginForm/LoginForm';
import './LoginPage.scss';

export default function LoginPage(){
    return(
        <main className='main'>
        <section className='page'>
            <div className='login-card'>
                <h2 className='login-card__title'>Login</h2>
                <LoginForm />
            </div>
        </section>
    </main>
    )
}