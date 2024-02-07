import { useEffect, useState } from 'react';
import './Medical.scss';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


export default function Medical({ id, token }){
    const [ medical, setMedical ] = useState([]);
    const navigate = useNavigate();
    let neuturedStatus;
    let vaccineStatus;
    const allergies = [];
    const conditions = [];
    
    useEffect(() => {
        const fetchMedical = async () => {
            const response = await axios.get(`${process.env.REACT_APP_BASE_URL}/medical/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            setMedical(response.data[0]);
        }
        fetchMedical();
    }, []);

    if(!medical){
        return <></>
    }

    if(medical.is_neutured === 0){
        neuturedStatus = 'Intact';
    } else {
        neuturedStatus = 'Neutured';
    }

    if(medical.is_vaccinated === 0){
        vaccineStatus = 'Not vaccinated';
    } else {
        vaccineStatus = 'Vaccinated';
    }

    const allergy1 = medical.allergy1;
    const allergy2 = medical.allergy2;
    const allergy3 = medical.allergy3;
   
    if(allergy1 !== null){
        allergies.push(allergy1);
    }
    if(allergy2 !== null){
        allergies.push(allergy2);
    }
    if(allergy3 !== null){
        allergies.push(allergy3);
    }

    if(allergies.length === 0){
        allergies.push('No allergies known')
    }

    const condition1 = medical.condition1;
    const condition2 = medical.condition2;
    const condition3 = medical.condition3;

    if(condition1 !== null){
        conditions.push(condition1);
    }

    if(condition2 !== null){
        conditions.push(condition2);
    }

    if(condition3 !== null){
        conditions.push(condition3);
    }

    if(conditions.length === 0){
        conditions.push('No conditions known')
    }

    const clickHandler = () => {
        navigate(`/edit/medical/${id}`)
    }

    return(
        <section className='medical'>
            <div className='medical__status-container'>
                <p className='medical__status'>{`${medical.name}'s neutered status: ${neuturedStatus}`}</p>
                <p className='medical__status'>{`${medical.name}' vaccination status: ${vaccineStatus}`}</p>
            </div>
            <div className='medical__wrapper'>
                <div className='medical__allergy-container'>
                    <h4 className='medical__allergy-title medical__subtitle'>{`${medical.name}'s Allergies:`}</h4>
                    <ul className='medical__allergy-list medical__list'>
                        {allergies.map((allergy) => (
                            <li className='medical__allergy-list-item medical__list-item'>{allergy}</li>
                        ))}
                    </ul>
                    <div className='medical__edit-button' onClick={clickHandler}>Edit</div>
                </div>
                <div className='medical__condition-container'>
                    <h4 className='medical__condition-title medical__subtitle'>{`${medical.name}'s Conditions:`}</h4>
                    <ul className='medical__condition-list medical__list'>
                        {conditions.map((condition) => (
                            <li className='medical__condition-list-item medical__list-item'>{condition}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}