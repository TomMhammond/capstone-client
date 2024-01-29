import './Client.scss';
import { useNavigate } from 'react-router-dom';

export default function Client({ client }){
    const navigate = useNavigate();
    
    const clickHandler = (e) => {
        navigate(`/clients/${client.id}`)
    }
    
    return(
        <div className='client' onClick={clickHandler}>
            <p className='client__first-name'>{client.first_name}</p>
            <p className='client__last-name'>{client.last_name}</p>
            <p className='client__phone'>{client.phone}</p>
            <p className='client__email'>{client.email}</p>
        </div>
    )
}