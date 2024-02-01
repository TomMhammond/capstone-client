import SideNav from '../../components/SideNav/SideNav';
import './SingleClientPage.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import PetList from '../../components/PetListItem/PetListItem';

export default function SingleClientPage(){
    const params = useParams();
    const id = params.id;
    const navigate = useNavigate();
    const token = sessionStorage.authToken;
   
    const [client, setClient ] = useState(null);
    const [pets, setPets ] = useState([]);

    useEffect(() => {
        if(!sessionStorage.authToken){
            return navigate('/login');
        }
    }, []);

    useEffect(() => {
        const fetchSingleClient = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/clients/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setClient(response.data);
        }
        fetchSingleClient();
    }, [])

    useEffect(() => {
        const fetchClientPets = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/pets/client/${id}`,{
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setPets(response.data);
        }
        fetchClientPets();
    }, [])

    if(!client || !pets) {
        return <></>
    }

    return(
        <main className='main'>
            <SideNav />
            <section className='page'>
                <div className='client-card'>
                    <h2 className='client-card__title'>{`${client.first_name} ${client.last_name}`}</h2>
                    <div className='client-card__container'>
                        <div className='client-card__wrapper'>
                            <div className='client-card__subcontainer'>
                                <p className='client-card__label'>Email:</p>
                                <p className='client-card__email'><a href={`mailto:${client.email}`}>{client.email}</a></p>
                            </div>
                            <div className='client-card__subcontainer'>
                                <p className='client-card__label'>Phone: </p>
                                <p className='client-card__phone'>{client.phone}</p>
                            </div>
                        </div>
                        <div className='client-card__wrapper'>
                            <div className='client-card__subcontainer'>
                                <p className='client-card__label'>Address:</p>
                                <p className='client-card__address'>{client.address}</p>
                            </div>
                            <div className='client-card__subcontainer'>
                                <p className='client-card__label'>City:</p>
                                <p className='client-card__city'>{client.city}</p>
                            </div>
                            <div className='client-card__subcontainer'>
                                <p className='client-card__label'>Country:</p>
                                <p className='client-card__country'>{client.country}</p>
                            </div>
                            <div className='client-card__subcontainer'>
                                <p className='client-card__label'>Postal Code:</p>
                                <p className='client-card__postal'>{client.postal_code}</p>
                            </div>
                        </div>
                    </div>
                    <h2 className='client-card__title'>Pet(s)</h2>
                    <div className='client-card__pet-container'>
                        {pets.map((pet) => (
                            <PetList key={pet.id} petData={pet}/>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    )
}