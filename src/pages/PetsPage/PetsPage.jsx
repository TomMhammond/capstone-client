import { useEffect, useState } from 'react';
import './PetsPage.scss';
import axios from 'axios';
import SideNav from '../../components/SideNav/SideNav';

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
    console.log(petList)
    return(
        <main className='main'>
            <SideNav />
        </main>
    )
}