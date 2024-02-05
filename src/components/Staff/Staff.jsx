import './Staff.scss';

export default function Staff({ staff }){
    return(
        <div className='staff'>
            <p className='staff__first-name'>{staff.first_name}</p>
            <p className='staff__last-name'>{staff.last_name}</p>
            <p className='staff__position'>{staff.position}</p>
        </div>
    )
}