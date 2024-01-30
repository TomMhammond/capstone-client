import './Pet.scss';

export default function Pet({ pet }){
    let aggression;
    let aggressionClass;
    let status;
    let statusClass;
    
    if(pet.is_aggressive === 0){
        aggression = 'Docile';
        aggressionClass = 'pet--docile'
    } else if (pet.is_aggressive === 1) {
        aggression = "Aggressive";
        aggressionClass = 'pet--aggressive'
    }

    if(pet.is_deceased === 0){
        status = 'Active';
        statusClass = 'pet--active';
    } else if(pet.is_deceased) {
        status = 'Deceased';
        statusClass = 'pet--deceased';
    }
    
    return(
        <div className='pet'>
            <p className='pet__name'>{pet.name}</p>
            <p className='pet__species'>{pet.species}</p>
            <p className='pet__breed'>{pet.breed}</p>
            <p className={`${aggressionClass}`}>{aggression}</p>
            <p className={`${statusClass}`}>{status}</p>
        </div>
    )
}