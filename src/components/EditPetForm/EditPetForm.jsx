import { useNavigate, useParams } from 'react-router-dom';
import '../PetForm/PetForm.scss';

export default function EditPetForm(){
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;

    const cancelClickHandler = (e) => {
        e.preventDefault();
        navigate(`/pets/${id}`)
    }
    
    return(
        <form className='pet-form'>
        <div className='pet-form__container'>
            <div className='pet-form__wrapper'>
                <label className='pet-form__label' htmlFor='name'>Name:</label>
                <input className='pet-form__input' type='text' name='name' id='name' placeholder='Spot'></input>
            </div>
            <div className='pet-form__wrapper'>
                <label className='pet-form__label' htmlFor='species'>Species:</label>
                <input className='pet-form__input' type='text' name='species' id='species' placeholder='Canine'></input>
            </div>
            <div className='pet-form__wrapper'>
                <label className='pet-form__label' htmlFor='breed'>Breed:</label>
                <input className='pet-form__input' type='text' name='breed' id='breed' placeholder='English Springer Spaniel'></input>
            </div>
            <div className='pet-form__wrapper'>
                <label className='pet-form__label' htmlFor='colour'>Colour:</label>
                <input className='pet-form__input' type='text' name='colour' id='colour' placeholder='White and brown'></input>
            </div>
            <div className='pet-form__wrapper'>
                <label className='pet-form__label' htmlFor='weight'>Weight(lbs):</label>
                <input className='pet-form__input' type='text' name='weight' id='weight' placeholder='28'></input>
            </div>
        </div>
        <div className='pet-form__container'>
            <fieldset className='pet-form__radio-field'>
                <legend>Gender:</legend>
                    <div>
                        <input type="radio" id="male" name="gender" value="male" />
                        <label htmlFor="male">Male</label>
                    </div>
                    <div>
                        <input type="radio" id="female" name="gender" value="female" />
                        <label htmlFor="female">Female</label>
                    </div>
            </fieldset>
            <fieldset className='pet-form__radio-field pet-form__temperment'>
                <legend>Temperment:</legend>
                    <div>
                        <input type="radio" id="docile" name="temperment" value='0' />
                        <label htmlFor="docile">Docile</label>
                    </div>
                    <div>
                        <input type="radio" id="aggressive" name="temperment" value="1" />
                        <label htmlFor="aggressive">Aggressive</label>
                    </div>
            </fieldset>
        </div>
        <div className='pet-form__container pet-form__button-container'>
            <button className='pet-form__button pet-form__button--register'>Register</button>
            <button className='pet-form__button pet-form__button--cancel' onClick={cancelClickHandler}>Cancel</button>
        </div>
    </form>
    )
}