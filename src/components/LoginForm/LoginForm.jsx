import { useNavigate } from 'react-router-dom';
import './LoginForm.scss';
import axios from 'axios';

export default function LoginForm({ setIsLoggedIn, setUserName }){
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formEl = e.target;
        const userName = formEl.userName.value;
        const password = formEl.password.value;

        const body = {userName, password}

        try{
            const response = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, body);
            sessionStorage.setItem('authToken', response.data.token);
            setIsLoggedIn(true);
            setUserName(userName);
            navigate('/pets')
        } catch(err) {
            console.error(err);
        }
    }
    
    return(
        <form className='login-form' onSubmit={handleSubmit}>
            <div className='login-form__container'>
                <div className='login-form__wrapper'>
                    <label className='login-form__label' htmlFor='userName'>Username:</label>
                    <input className='login-form__input' type='text' name='userName' id='userName'></input>
                </div>
                <div className='login-form__wrapper'>
                    <label className='login-form__label' htmlFor='password'>Username:</label>
                    <input className='login-form__input' type='password' name='password' id='password'></input>
                </div>
            </div>
            <div className='login-form__container login-form__button-container'>
                <button className='login-form__button login-form__button--register'>Login</button>
               
            </div>
        </form>
    )
}