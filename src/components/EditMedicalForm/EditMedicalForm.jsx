import { useNavigate, useParams } from 'react-router-dom';
import '../MedicalForm/MedicalForm.scss';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function EditMedicalForm({ token }){
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;
    const [ medical, setMedical ] =useState(null);

    useEffect(() => {
        const fetchMedical = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/medical/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setMedical(response.data[0]);
        }
        fetchMedical()
    }, [])

    if(!medical){
        return <></>
    }


    const submitHandler = async (e) => {
        e.preventDefault();

        const formEl = e.target;
        const allergy1El = formEl.allergy1.value;
        let allergy1;
        if(!allergy1El){
            allergy1 = medical.allergy1;
        } else {
            allergy1 = allergy1El;
        }
        
        const allergy2El = formEl.allergy2.value;
        let allergy2;
        if(!allergy2El){
            allergy2 = medical.allergy2;
        } else {
            allergy2 = allergy2El;
        }

        const allergy3El = formEl.allergy3.value;
        let allergy3;
        if(!allergy3El){
            allergy3 = medical.allergy3;
        } else {
            allergy3 = allergy3El;
        }

        const condition1El = formEl.condition1.value;
        let condition1;
        if(!condition1El){
            condition1 = medical.condition1;
        } else {
            condition1 = condition1El;
        }

        const condition2El = formEl.condition2.value;
        let condition2;
        if(!condition2El){
            condition2 = medical.condition2;
        } else {
            condition2 = condition2El;
        }

        const condition3El = formEl.condition3.value;
        let condition3;
        if(!condition3El){
            condition3 = medical.condition3;
        } else {
            condition3 = condition3El;
        }

        const neuterEl = formEl.neuter.value;
        let neuter;
        if(!neuterEl && neuterEl !== 0){
            neuter = Number(medical.is_neutured);
        } else {
            neuter = Number(neuterEl);
        }

        const vaccinatedEl = formEl.vaccinated.value;
        let vaccinated;
        if(!vaccinatedEl && vaccinatedEl !== 0){
            vaccinated = Number(medical.is_vaccinated);
        } else {
            vaccinated = Number(vaccinatedEl);
        }

        const body = 
        {
            pet_id: id,
            is_neutured: neuter,
            is_vaccinated: vaccinated,
            allergy1,
            allergy2,
            allergy3,
            condition1,
            condition2,
            condition3
        }

       await axios.put(`${process.env.REACT_APP_BASE_URL}/medical/${id}`, body, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
       });
       navigate(`/pets/${id}`)
    }

    const cancelClickHandler = (e) => {
        e.preventDefault();
        navigate(`/pets/${id}`)
    }
    return(
        <form className='medical-form' onSubmit={submitHandler}>
            <div className='medical-form__container'>
                <h4 className='medical-form__subtitle'>Allergies</h4>
                <div className='medical-form__wrapper'>
                    <label className='medical-form__label' htmlFor='allergy1'>Allergy:</label>
                    <input className='medical-form__input' type='text' name='allergy1' id='allergy1'></input>
                </div>
                <div className='medical-form__wrapper'>
                    <label className='medical-form__label' htmlFor='allergy2'>Allergy:</label>
                    <input className='medical-form__input' type='text' name='allergy2' id='allergy2'></input>
                </div>
                <div className='medical-form__wrapper'>
                    <label className='medical-form__label' htmlFor='allergy3'>Allergy:</label>
                    <input className='medical-form__input' type='text' name='allergy3' id='allergy3'></input>
                </div>
                <h4 className='medical-form__subtitle'>Conditions</h4>
                <div className='medical-form__wrapper'>
                    <label className='medical-form__label' htmlFor='condition1'>Condition:</label>
                    <input className='medical-form__input' type='text' name='condition1' id='condition1'></input>
                </div>
                <div className='medical-form__wrapper'>
                    <label className='medical-form__label' htmlFor='condition2'>Condition:</label>
                    <input className='medical-form__input' type='text' name='condition2' id='condition2'></input>
                </div>
                <div className='medical-form__wrapper'>
                    <label className='medical-form__label' htmlFor='condition3'>Condition:</label>
                    <input className='medical-form__input' type='text' name='condition3' id='condition3'></input>
                </div>
            </div>
            <div className='medical-form__container'>
                <fieldset className='medical-form__radio-field'>
                    <legend>Neutured Status:</legend>
                        <div>
                            <input type="radio" id="yes" name="neuter" value="1" />
                            <label htmlFor="yes">Neutered/Spayed</label>
                        </div>
                        <div>
                            <input type="radio" id="no" name="neuter" value="0" />
                            <label htmlFor="no">Not Neutered/Spayed</label>
                        </div>
                </fieldset>
                <fieldset className='medical-form__radio-field medical-form__vaccinated'>
                    <legend>Vaccinated Status:</legend>
                        <div>
                            <input type="radio" id="isVaccinated" name="vaccinated" value="1" />
                            <label htmlFor="isVaccinated">Is vaccinated</label>
                        </div>
                        <div>
                            <input type="radio" id="isNotVaccinated" name="vaccinated" value="0" />
                            <label htmlFor="isNotVaccinated">Is not vaccinated</label>
                        </div>
                </fieldset>
            </div>
            <div className='medical-form__container medical-form__button-container'>
                <button className='medical-form__button medical-form__button--register'>Update</button>
                <button className='medical-form__button medical-form__button--cancel' onClick={cancelClickHandler}>Cancel</button>
            </div>
        </form>
    )
}