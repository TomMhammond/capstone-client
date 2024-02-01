import { useEffect, useState } from 'react';
import './MedicalForm.scss';
import axios from 'axios';

export default function MedicalForm(){
    const [ petId, setPetId ] = useState(null)

    useEffect(() => {
        const fetchPetId = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/pets`);
            const arrLenght = response.data.length;
            const id = response.data[arrLenght - 1].id;
            setPetId(id);
        }
        fetchPetId();
    }, [])
   
    const registerSubmitHandler = async (e) => {
        e.preventDefault();

        const formEl = e.target;
        let allergy1;
        if(formEl.allergy1.value){
            allergy1 = formEl.allergy1.value
        } else {
            allergy1 = null;
        }
        let allergy2;
        if(formEl.allergy2.value){
            allergy2 = formEl.allergy2.value
        } else {
            allergy2 = null;
        }
        let allergy3;
        if(formEl.allergy3.value){
            allergy3 = formEl.allergy3.value
        } else {
            allergy3 = null;
        }
        let condition1;
        if(formEl.condition1.value){
            condition1 = formEl.condition1.value
        } else {
            condition1 = null;
        }
        let condition2;
        if(formEl.condition2.value){
            condition2 = formEl.condition2.value
        } else {
            condition2 = null;
        }
        let condition3;
        if(formEl.condition3.value){
            condition3 = formEl.condition3.value
        } else {
            condition3 = null;
        }
        const neuter = Number(formEl.neuter.value);
        const vaccinated = Number(formEl.vaccinated.value);
        console.log(petId)
        const body = 
            {
                pet_id: petId,
                is_neutured: neuter,
                is_vaccinated: vaccinated,
                allergy1,
                allergy2,
                allergy3,
                condition1,
                condition2,
                condition3
            }

        await axios.post(`${process.env.REACT_APP_BASE_URL}/medical`, body)
    }

    const cancelClickHandler = (e) => {
        e.preventDefault();
    }
    
    return(
        <form className='medical-form' onSubmit={registerSubmitHandler}>
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
                            <label htmlFor="yes">Neutured/Spade</label>
                        </div>
                        <div>
                            <input type="radio" id="no" name="neuter" value="0" />
                            <label htmlFor="no">Not Neutured/Spade</label>
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
                <button className='medical-form__button medical-form__button--register'>Register</button>
                <button className='medical-form__button medical-form__button--cancel' onClick={cancelClickHandler}>Cancel</button>
            </div>
        </form>
    )
}