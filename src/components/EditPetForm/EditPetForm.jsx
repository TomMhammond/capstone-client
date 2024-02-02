import { useNavigate, useParams } from 'react-router-dom';
import '../PetForm/PetForm.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditPetForm({ token }){
    const navigate = useNavigate();
    const params = useParams();
    const id = params.id;

    const [ petData, setPetData ] = useState(null);

    useEffect(() => {
        if(!sessionStorage.authToken){
            return navigate('/');
        };
        const fetchData = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/pets/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setPetData(response.data);
        };
        fetchData();
    }, []);

    const submitHandler = (e) => {
        e.preventDefault();
        const formEl = e.target;
        const nameEl = formEl.name.value;
        let name;
        if(!nameEl){
            name = petData.name;
        } else {
            name = nameEl;
        };
        const speciesEl = formEl.species.value;
        let species;
        if(!speciesEl){
            species = petData.species;
        } else {
            species = speciesEl;
        };
        const breedEl = formEl.breed.value;
        let breed;
        if(!breedEl){
            breed = petData.breed;
        } else {
            breed = breedEl;
        }
        const colourEl = formEl.colour.value;
        let colour;
        if(!colourEl){
            colour = petData.colour;
        } else {
            colour = colourEl;
        }
        const weightEl = Number(formEl.weight.value);
        let weight;
        if(!weightEl){
            weight = petData.weight;
        } else {
            weight = weightEl;
        }
        const tempermentEl = Number(formEl.temperment.value);
        let temperment;
        if(!tempermentEl){
            temperment = petData.is_aggressive;
        } else {
            temperment = tempermentEl;
        }

        const body = 
            {
                name,
                species,
                breed,
                colour,
                is_aggressive: temperment,
                weight,
                is_deceased: 0
            }
    };

    const cancelClickHandler = (e) => {
        e.preventDefault();
        navigate(`/pets/${id}`)
    }
    
    return(
        <form className='pet-form' onSubmit={submitHandler}>
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