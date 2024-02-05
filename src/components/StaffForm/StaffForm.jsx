import { useNavigate } from 'react-router-dom';
import './StaffForm.scss';
import axios from 'axios';

export default function StaffForm( {token} ){
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        const formEl = e.target;
        const firstName = formEl.first_name.value;
        const lastName = formEl.last_name.value;
        const position = formEl.position.value;
        const hireDate = formEl.hire_date.value;

        const body = 
            {
                first_name: firstName,
                last_name: lastName,
                position,
                hire_date: hireDate
            }
        
        await axios.post(`${process.env.REACT_APP_BASE_URL}/staff`, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });

        navigate('/staff')
       
    }

    const cancelClickHandler = (e) => {
        e.preventDefault();
        navigate('/staff')
    }

    return(
        <form className='staff-form' onSubmit={submitHandler}>
             <div className='staff-form__container'>
                <div className='staff-form__wrapper'>
                    <label className='staff-form__label' htmlFor='first_name'>First Name:</label>
                    <input className='staff-form__input' type='text' name='first_name' id='first_name' placeholder='Jane'></input>
                </div>
                <div className='staff-form__wrapper'>
                    <label className='staff-form__label' htmlFor='last_name'>Last Name:</label>
                    <input className='staff-form__input' type='text' name='last_name' id='last_name' placeholder='Doe'></input>
                </div>
                <div className='staff-form__wrapper'>
                    <label className='staff-form__label' htmlFor='position'>Position:</label>
                    <input className='staff-form__input' type='text' name='position' id='position' placeholder='RVT'></input>
                </div>
                <div className='staff-form__wrapper'>
                    <label className='staff-form__label' htmlFor='hire_date'>Hire Date:</label>
                    <input className='staff-form__input' type='text' name='hire_date' id='hire_date' placeholder='2023-04-23'></input>
                </div>
            </div>
            <div className='staff-form__container pet-form__button-container'>
                <button className='staff-form__button staff-form__button--register'>Register</button>
                <button className='staff-form__button staff-form__button--cancel' onClick={cancelClickHandler}>Cancel</button>
            </div>
        </form>
    )
}