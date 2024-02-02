import { useNavigate, useParams } from 'react-router-dom';
import './EditClientForm.scss';
import { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';

export default function EditClientForm({ token }){
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;

    const [ clientData, setClientData ] = useState(null);


    useEffect(() => {
        if(!sessionStorage.authToken){
            return navigate('/');
        }
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/clients/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setClientData(response.data);
        };
        fetchData();
    }, [])

    if(!clientData){
        return<></>
    }

    const submitHandler = async (e) => {
        e.preventDefault();

        const formEl = e.target;
        const firstNameEl = formEl.firstName.value;
        let firstName;
        if(firstNameEl === ''){
            firstName = `${clientData.first_name}`
        } else {
            firstName = firstNameEl;
        }
        const lastNameEl = formEl.lastName.value;
        let lastName;
        if(lastNameEl === ''){
            lastName = `${clientData.last_name}`
        } else {
            lastName = lastNameEl;
        }
        const phoneEl = formEl.phone.value;
        let phone;
        if(phoneEl === ''){
            phone = `${clientData.phone}`
        } else {
            phone = phoneEl;
        }
        const emailEl = formEl.email.value;
        let email;
        if(emailEl === ''){
            email = `${clientData.email}`
        } else {
            email = emailEl;
        }
        const addressEl = formEl.address.value;
        let address;
        if(addressEl === ''){
            address = `${clientData.address}`
        } else {
            address = addressEl;
        }
        const cityEl = formEl.city.value;
        let city;
        if(cityEl === ''){
            city = `${clientData.city}`
        } else {
            city = cityEl;
        }
        const provinceEl = formEl.province.value;
        let province;
        if(provinceEl === ''){
            province = `${clientData.province}`
        } else {
            province = provinceEl;
        }
        const countryEl = formEl.country.value;
        let country;
        if(countryEl === ''){
            country = `${clientData.country}`
        } else {
            country = countryEl;
        }
        const postalCodeEl = formEl.postalCode.value;
        let postalCode;
        if(postalCodeEl === ''){
            postalCode = `${clientData.postal_code}`
        } else {
            postalCode = postalCodeEl;
        }

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
            };
     
        await axios.put(`${process.env.REACT_APP_BASE_URL}/clients/${id}`, body, {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        })

        navigate(`/clients/${id}`)
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