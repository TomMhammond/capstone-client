import { useNavigate } from 'react-router-dom';
import './PetListItem.scss';

export default function PetListItem( {petData} ) {
    const { name, species, breed, id } = petData;
    const navigate = useNavigate();

    let aggression;
    let status;

    if(petData.is_aggressive === 1) {
        aggression = 'pet-list--aggressive';
    } else if(petData.is_aggressive === 0) {
        aggression = 'pet-list--not-aggressive';
    }

    if(petData.is_deceased === 0){
        status = 'pet-list--living'
    } else if(petData.is_deceased === 1){
        status = 'pet-list--deceased'
    }

    const clickHandler = () => {
        navigate(`/pets/${id}`)
    }

    return (
        <section className={`pet-list ${aggression} ${status}`} onClick={clickHandler}>
            <p className='pet-list__item pet-list__name'>{name}</p>
            <p className='pet-list__item pet-list__species'>{species}</p>
            <p className='pet-list__item pet-list__breed'>{breed}</p>
            <p className='pet-list__item pet-list__dob'>9999/99/99</p>
        </section>
    )
}