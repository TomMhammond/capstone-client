import './PetListItem.scss';

export default function PetListItem( {petData} ) {
    const { name, species, breed } = petData;

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

    return (
        <section className={`pet-list ${aggression} ${status}`}>
            <p className='pet-list__item pet-list__name'>{name}</p>
            <p className='pet-list__item pet-list__species'>{species}</p>
            <p className='pet-list__item pet-list__breed'>{breed}</p>
            <p className='pet-list__item pet-list__chart'>Will be link to chart</p>
        </section>
    )
}