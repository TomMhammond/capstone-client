import { useNavigate, useParams } from 'react-router-dom';
import './EditClientForm.scss';
import { useEffect } from 'react';
import axios from 'axios';

export default function EditClientForm(){
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;


    useEffect(() => {
        if(!sessionStorage.authToken){
            return navigate('/');
        }
    })

    const submitHandler = (e) => {
        e.preventDefault();

        navigate('/dashboard');
    }

    const cancelClickHandler = (e) => {
        e.preventDefault();
        navigate('/dashboard');
    }

    return(
        <form className='client-form' onSubmit={submitHandler}>
            <div className='client-form__container'>
                <div className='client-form__wrapper'>
                    <label className='client-form__label' htmlFor='firstName'>First Name:</label>
                    <input className='client-form__input' type='text' name='firstName' id='firstName' placeholder='John'></input>
                </div>
                <div className='client-form__wrapper'>
                    <label className='client-form__label' htmlFor='lastName'>Last Name:</label>
                    <input className='client-form__input' type='text' name='lastName' id='lastName' placeholder='Smith'></input>
                </div>
                <div className='client-form__wrapper'>
                    <label className='client-form__label' htmlFor='phone'>Phone:</label>
                    <input className='client-form__input' type='text' name='phone' id='phone' placeholder='555-555-5555'></input>
                </div>
                <div className='client-form__wrapper'>
                    <label className='client-form__label' htmlFor='email'>Email:</label>
                    <input className='client-form__input' type='text' name='email' id='email' placeholder='some.email@example.com'></input>
                </div>
            </div>
            <div className='client-form__container'>
                <div className='client-form__wrapper'>
                    <label className='client-form__label' htmlFor='address'>Address:</label>
                    <input className='client-form__input' type='text' name='address' id='address' placeholder='123 Main Street'></input>
                </div>
                <div className='client-form__wrapper'>
                    <label className='client-form__label' htmlFor='city'>City:</label>
                    <input className='client-form__input' type='text' name='city' id='city' placeholder='Springfield'></input>
                </div>
                <div className='client-form__wrapper'>
                    <label className='client-form__label' htmlFor='province'>Province:</label>
                    <input className='client-form__input' type='text' name='province' id='province' placeholder='Ontario'></input>
                </div>
                <div className='client-form__wrapper'>
                    <label className='client-form__label' htmlFor='country'>Country:</label>
                    <input className='client-form__input' type='text' name='country' id='country' placeholder='Canada'></input>
                </div>
                <div className='client-form__wrapper'>
                    <label className='client-form__label' htmlFor='postalCode'>Postal Code:</label>
                    <input className='client-form__input' type='text' name='postalCode' id='postalCode' placeholder='A1A 1A1'></input>
                </div>
            </div>
            <div className='client-form__container client-form__button-container'>
                <button className='client-form__button client-form__button--register'>Register</button>
                <button className='client-form__button client-form__button--cancel' onClick={cancelClickHandler}>Cancel</button>
            </div>
        </form>
    )
}