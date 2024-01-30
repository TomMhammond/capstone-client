import './PetListItem.scss';

export default function PetListItem( {petData} ) {
    console.log(petData)
    const { name, species, breed } = petData;
    return (
        <section className='pet-list'>
            <p className='pet-list__item pet-list__name'>{name}</p>
            <p className='pet-list__item pet-list__species'>{species}</p>
            <p className='pet-list__item pet-list__breed'>{breed}</p>
            <p className='pet-list__item pet-list__chart'>Will be link to chart</p>
        </section>
    )
}