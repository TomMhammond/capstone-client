import { useEffect, useState } from 'react';
import './PetsPage.scss';
import axios from 'axios';
import SideNav from '../../components/SideNav/SideNav';
import Pet from '../../components/Pet/Pet';

export default function PetsPage(){
    const [ petList, setPetList ] = useState([]);

    useEffect(() => {
        const fetchPetList = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/pets`);
            setPetList(response.data);
        }
        fetchPetList();
    },[]);

    if(!petList){
        return <></>
    }

    return(
        <main className='main'>
            <SideNav />
            <section className='page'>
                <div className='pet-card'>
                    <h2 className='pet-card__title'>Pets In Practice</h2>
                    {petList.map((pet) => (
                        <Pet key={pet.id} pet={pet}/>
                    ))}
                </div>
            </section>
        </main>
    )
}