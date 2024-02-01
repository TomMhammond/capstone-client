import { useNavigate } from 'react-router-dom';
import './ClientForm.scss';
import axios from 'axios';

export default function ClientForm(){
    const navigate = useNavigate();
    const token = sessionStorage.authToken;

    const registerSubmitHandler = async (e) => {
        e.preventDefault();
        const formEl = e.target;
        const firstName = formEl.firstName.value;
        const lastName = formEl.lastName.value;
        const phone = formEl.phone.value;
        const email = formEl.email.value;
        const address = formEl.address.value;
        const city = formEl.city.value;
        const province = formEl.province.value;
        const country = formEl.country.value;
        const postalCode = formEl.postalCode.value;

        const body = 
            {
                first_name: firstName,
                last_name: lastName,
                phone: phone,
                email: email,
                address: address,
                city: city,
                province: province,
                country: country,
                postal_code: postalCode
            }

        await axios.post(`${process.env.REACT_APP_BASE_URL}/clients`, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        navigate('/register/pet')

    }

    const cancelClickHandler = (e) =>{
        e.preventDefault();
        navigate('/pets') //this is temporary - needs to be changed once dashboard created
    }
    
    return(
        <form className='client-form' onSubmit={registerSubmitHandler}>
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