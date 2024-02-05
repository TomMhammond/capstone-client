import { useNavigate, useParams } from 'react-router-dom';
import '../StaffForm/StaffForm';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function StaffForm( {token} ){
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const [ staff, setStaff ] = useState(null);

    useEffect(() => {
        const fetchStaffData = async() => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/staff/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setStaff(response.data);
        }
        fetchStaffData();
    }, [])

    const submitHandler = async (e) => {
        e.preventDefault();

        const formEl = e.target;
        const firstNameEl = formEl.first_name.value;
        let firstName;
        if(!firstNameEl){
            firstName = staff.first_name;
        } else {
            firstName = firstNameEl
        }

        const lastNameEl = formEl.last_name.value;
        let lastName;
        if(!lastNameEl){
            lastName = staff.last_name;
        } else {
            lastName= lastNameEl;
        }

        const positionEl = formEl.position.value;
        let position;
        if(!positionEl){
            position = staff.position;
        } else {
            position = positionEl;
        }

        const hireDateEl = formEl.hire_date.value;
        let hireDate;
        if(!hireDateEl){
            hireDate = staff.hire_date;
        } else {
            hireDate = hireDateEl
        }

        const body = 
            {
                first_name: firstName,
                last_name: lastName,
                position,
                hire_date: hireDate
            }
        
        await axios.put(`${process.env.REACT_APP_BASE_URL}/staff/${id}`, body, {
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