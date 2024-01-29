import './Client.scss';

export default function Client({ client }){
    return(
        <div className='client'>
            <p className='client__first-name'>{client.first_name}</p>
            <p className='client__last-name'>{client.last_name}</p>
            <p className='client__phone'>{client.phone}</p>
            <p className='client__email'>{client.email}</p>
        </div>
    )
}