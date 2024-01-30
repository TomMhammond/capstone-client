import { useEffect, useState } from 'react';
import './Medical.scss';
import axios from 'axios';


export default function Medical({ id }){
    const [ medical, setMedical ] = useState([]);
    
    useEffect(() => {
        const fetchMedical = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/medical/${id}`);
            setMedical(response.data[0]);
        }
        fetchMedical();
    }, []);

    console.log(medical)
    return(
        <></>
    )
}