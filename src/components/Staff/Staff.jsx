import { useNavigate } from 'react-router-dom';
import './Staff.scss';

export default function Staff({ staff }){
    const navigate = useNavigate();

    const clickHandler = () => {
        navigate(`/staff/${staff.id}`)
    }

    return(
        <div className='staff' onClick={clickHandler}>
            <p className='staff__first-name'>{staff.first_name}</p>
            <p className='staff__last-name'>{staff.last_name}</p>
            <p className='staff__position'>{staff.position}</p>
        </div>
    )
}