import './LoginForm.scss';

export default function LoginForm(){
    return(
        <form className='login-form'>
            <div className='login-form__wrapper'>
                <label className='login-form__label' htmlFor='userName'>Username:</label>
                <input className='login-form__input' type='text' name='userName' id='userName'></input>
            </div>
            <div className='login-form__wrapper'>
                <label className='login-form__label' htmlFor='password'>Username:</label>
                <input className='login-form__input' type='password' name='password' id='password'></input>
            </div>
        </form>
    )
}