import { useNavigate } from 'react-router-dom';
import '../MedicalForm/MedicalForm.scss';

export default function EditMedicalForm(){
    const navigate = useNavigate();

    const cancelClickHandler = (e) => {
        e.preventDefault();
        navigate('/pets')
    }
    return(
        <form className='medical-form'>
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
                <button className='medical-form__button medical-form__button--register'>Update</button>
                <button className='medical-form__button medical-form__button--cancel' onClick={cancelClickHandler}>Cancel</button>
            </div>
        </form>
    )
}